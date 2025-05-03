import "./navMenu.css"
// import { Link } from "react-router-dom";
import React from "react";

function NavMenu(){
    return(
        <div id="menuContainer">
            <div id="PageLogo"><img src="./assests/RE_BB_logo.png"/></div>
            <div className="NavMenuLinks">
            {/* <Link to="/" className="nav-link">Home</Link> */}
                {/* <Link to="/dashboard">Dashboard</Link> */}
            </div>
        </div>
        
    );
};

export default NavMenu