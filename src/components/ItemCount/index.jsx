import { useState } from "react"
import "./style.css"

function ItemCount({ count, onQuantityChange }) {
    const [quantity, setQuantity] = useState(count);
  
    const handleIncrement = () => {
      if (quantity < 5) {
        setQuantity(quantity + 1);
        onQuantityChange(quantity + 1);
      }
    };
  
    const handleDecrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
        onQuantityChange(quantity - 1);
      }
    };
  
    return (
      <div className="button-container">
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
    );
  }
  
  export default ItemCount;

  
  
  
  