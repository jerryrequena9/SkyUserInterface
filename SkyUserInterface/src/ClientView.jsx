import React from "react";
import { useEffect,useState } from "react";
import NavMenu from "./navigationView";
import LoginForm from './LoginForm';
import HomePage from './HomePage';
import NavBar from "./components/NavBar";
function ClientView(){

const [isLoggedIn,setIsLoggedIn]=useState(false);

useEffect(()=>{
        const userLoggedIn=localStorage.getItem('isLoggedIn');
        if(userLoggedIn==='true')
            setIsLoggedIn(true);
    },[]);

const logout=()=>{
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    return (
    <>
    
    {isLoggedIn ? (
        <>
        <NavMenu/>
        <NavBar logout={logout}/>
        <HomePage/>
        </>
        ):( 
            <LoginForm setIsLoggedIn={setIsLoggedIn}/>
        )
    }

    </>  
    );
};
export default ClientView