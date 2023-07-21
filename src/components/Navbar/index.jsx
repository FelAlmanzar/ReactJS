import "./style.css";
import CartWidget from "./CartWidget";

function Navbar(){
    return (<nav className="navBar">
        <ul>
            <li><a href="">Inicio</a></li>
            <li><a href="">Nosotros</a></li>
            <li><a href="">Productos</a></li>
            <li><a href="">Contacto</a></li>
        </ul>

        <CartWidget />
    </nav>   

    );
}

export default Navbar;