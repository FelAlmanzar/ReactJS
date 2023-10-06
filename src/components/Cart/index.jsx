import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import "./style.css"
import ItemCount from "../ItemCount";

export function Cart() {

    const {cart, removeItem, clear, precioTotal} = useCart();
    

    return (
        
        <div className="cartPage">
      <h2>Carrito de Compras</h2>
    
      {cart.length === 0 ? (<><p>Tu carrito está vacío</p>
      <Link to="/">Ir a productos</Link> </>):(
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
             <button onClick={() => removeItem(item.id)}>Eliminar</button>
            <img src={item.imagen} alt={item.nombre} />
            <p>{item.nombre}</p>
            <p>Cantidad: {item.quantity}</p>
            <ItemCount/>
            <p>Precio: ${item.precio.toLocaleString('es-CO')}</p>
            <p>Total: ${(item.precio * item.quantity).toLocaleString('es-CO')}</p>
           
           
          </li>
          
        ))}
      </ul>
     ) }

{cart.length > 0 &&<>
      <h2>Precio Total: ${precioTotal().toLocaleString('es-CO')}</h2>
      <Link to="/checkout"><button className="comprar">Finalizar Compra</button></Link> 
      <button className="clear" onClick={clear}>Vaciar Carrito</button>
      </>}

    </div>
    )
}