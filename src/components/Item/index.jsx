import "./style.css"

import React from "react";

export default function Item({ product }) {
    return(
        <div className="item">
            <img src={product.imagen} />
            <h2>{product.nombre}</h2>
            <span>{product.precio}</span>
        </div>
    );

}
