import React from "react";
import { useEffect,useState } from "react";
import NavMenu from "./navigationView";
import LoginForm from './LoginForm';
import HomePage from './HomePage';
function ClientView(){

    const [isLoggedIn,setIsLoggedIn]=useState(false);
    useEffect(()=>{
        const userLoggedIn=localStorage.getItem('isLoggedIn');
        if(userLoggedIn==='true')
            setIsLoggedIn(true);
    },[]);

    return (
    <>
    <NavMenu/>
    {isLoggedIn?<HomePage/>:<LoginForm setIsLoggedIn={setIsLoggedIn}/>}
    </>  
    );
};
export default ClientView