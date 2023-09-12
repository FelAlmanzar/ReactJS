import "./style.css";
import CartWidget from "./CartWidget";
import Logo from "./Logo";
import { Link, NavLink } from "react-router-dom";

function Navbar(){
    return (
        
    <nav className="navBar">

<Logo />


        <ul>
            <li><Link to="/videojuegos/Deportes">Deportes</Link></li>
            <li><Link to="/videojuegos/Aventura">Aventura</Link></li>
            <li><Link to="/videojuegos/Versus">Versus</Link></li>
            <li><Link to="/videojuegos/Carreras">Carreras</Link></li>
        </ul>

        

        <CartWidget />
        
    </nav>   

    );
}

export default Navbar;