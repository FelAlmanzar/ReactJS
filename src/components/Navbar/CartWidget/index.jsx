import "./style.css"
import cart from "../../../assets/icons/shopCar.png";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { useCart } from "../../../context/cartContext";

function CartWidget() {

    const {cantidadEnCarrito} = useCart();

    return(
        <div className="cart-widget">
            <Link to="/carrito"><img src={cart} alt="cart" className="cart-icon" /></Link>
            <p>{cantidadEnCarrito()}</p>
        </div>
    );
}

export default CartWidget

