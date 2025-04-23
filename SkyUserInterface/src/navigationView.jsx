import "./navMenu.css"
import React from "react";

function NavMenu(){
    return(
        <div id="menuContainer">
            <div id="PageLogo"><p>Raiser's Edge</p></div>
            <div className="NavMenuLinks">Home Page</div>
            <div className="NavMenuLinks">Dashboard</div>
            <div className="NavMenuLinks">Non Profit Search</div>
        </div>
        
    );
};

export default NavMenu