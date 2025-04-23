import "./LoginForm.css"



function LoginForm(){


    return(

        <div className="UserLoginContainer">
            <div id="LoginForm">
            <img src="\assests\login_40dp_FFFFFF_FILL0_wght400_GRAD0_opsz40.png" alt="Login icon" />
            <h2>Sign In</h2>
            <label>Username: </label><input id="userNameField"></input><br/><br/>
            <label>Password:  </label><input id="userPasswordField"></input>
            </div>
        </div>
    );
}

export default LoginForm