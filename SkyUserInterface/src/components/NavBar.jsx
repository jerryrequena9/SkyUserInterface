import { Link } from "react-router-dom";
import '../css/Navbar.css'

const NavBar=({logout}) =>{
    return (
    <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Raiser's Edge</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
            <button id="LogoutBTN" onClick={logout}>Log out</button>
        </div>
    </nav>
    );
};

export default NavBar;