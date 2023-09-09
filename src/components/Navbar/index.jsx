import "./style.css";
import CartWidget from "./CartWidget";
import Logo from "./Logo";

function Navbar(){
    return (
        
    <nav className="navBar">

<Logo />


        <ul>
            <li><a href="">Inicio</a></li>
            <li><a href="">Juegos</a></li>
            <li><a href="">Consolas</a></li>
            <li><a href="">Accesorios</a></li>
        </ul>

        

        <CartWidget />
        
    </nav>   

    );
}

export default Navbar;