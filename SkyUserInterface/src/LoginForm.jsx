import "./LoginForm.css"
import { useState } from "react";

// fetch(url, options)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));
function LoginForm({setIsLoggedIn}){ 
const [UserEmail,setEmail]=useState("");
const [UserPassword,setPassword]=useState("");




const handleEmailChange=(newEmail)=>{
    // console.log(newEmail);
    setEmail(newEmail);
}

const handlePasswordChange=(newPassword)=>{
    // console.log(newPassword);
    setPassword(newPassword);
}


const handleSubmit=()=>{
console.log(UserEmail);
console.log(UserPassword);
let url="https://680fd18827f2fdac240f7ceb.mockapi.io/login?email="+UserEmail+"&"+"password="+UserPassword;
let options= {method: 'GET',headers: {'content-type':'application/json'},};
if(UserEmail!='' && UserPassword!=''){
    fetch(url,options)
    .then(res =>{
        if (res.ok) 
            {
                localStorage.setItem('isLoggedIn','true');
                setIsLoggedIn(true);
                return res.json();
            }
        else if(!res.ok)
        {return  window.alert('User email or password are incorrect.');}
    
    })
      .then(data =>{
        console.log(data);
      })
      .catch(error => {
        console.log(error)
})}
else{
    window.alert('User email or password are incorrect.');
}
}





    return(

        <div className="UserLoginContainer">
            <div id="LoginForm">
            <img src="\assests\login_40dp_FFFFFF_FILL0_wght400_GRAD0_opsz40.png" alt="Login icon" />
            <h2>Sign In</h2>
            <label>Username: </label><input onChange={(event)=>handleEmailChange(event.target.value)} type="email" id="userNameField" required/><br/><br/>
            <label>Password:  </label><input onChange={(event)=>handlePasswordChange(event.target.value)} type="password" id="userPasswordField" required/><br/><br/>
            <button onClick={handleSubmit} id="UserLoginBtn">Login</button>
            <button id="UserCancelnBtn">Cancel</button>
            </div>
        </div>
    );
}

export default LoginForm