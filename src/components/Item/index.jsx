import "./style.css"
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import React from "react";

export default function Item({ product }) {
    return (
      <div className="item">
        <Link to={`/producto/${product.id}`}><img src={product.imagen} alt={product.nombre} /></Link> {/* Agrega un atributo "alt" para accesibilidad */}
        <h2>{product.nombre}</h2>
        <span>$ {product.precio.toLocaleString('es-CO')} COP</span>
        <ItemCount />
        <button className="carrito">
          Agregar al Carrito
        </button>
      </div>
    );
  }
