import "./style.css"
import cart from "../../../assets/icons/shopCar.png";

function CartWidget() {
    return(
        <div className="cart-widget">
            <img src={cart} alt="cart" className="cart-icon" />
            <p>7</p>
        </div>
    );
}

export default CartWidget