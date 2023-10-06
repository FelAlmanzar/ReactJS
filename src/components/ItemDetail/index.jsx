import React from "react";
import "./style.css"
import ItemCount from "../ItemCount";
import { useCart } from "../../context/cartContext";
import { useState } from "react"


export default function ItemDetail({ product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <div className="itemId">
      <img src={product.imagen} alt={product.nombre} />
      <h2>{product.nombre}</h2>
      <p>{product.descripcion}</p>
      <span>$ {product.precio && typeof product.precio === 'number' ? product.precio.toLocaleString("es-CO") + ' COP' : 'Precio no disponible'}</span>
      <ItemCount count={quantity} onQuantityChange={handleQuantityChange} />
      <button className="carrito" onClick={handleAddToCart}>
        Agregar al Carrito ({quantity})
      </button>
    </div>
  );
}