import React from "react";
import "./style.css"
import ItemCount from "../ItemCount";

// export default function ItemDetail({product}) {
//     return (
//         <div className="item-detail">
//             {product.map((product) => (
//                 <Item key={product.id} product={product} />
//             ))}
//         </div>
//     )
// }

// export default function ItemDetail({ product }) {
//     return (
//       <div className="itemId">
//         {product.map((item) => ( // Cambia "product" a "item" para evitar la confusión de nombres
//           <div key={item.id}> {/* Agrega una clave única para cada elemento del mapeo */}
//             <img src={item.imagen} alt={item.nombre} /> {/* Agrega un atributo "alt" para accesibilidad */}
//             <h2>{item.nombre}</h2>
//             <span>$ {item.precio.toLocaleString('es-CO')} COP</span>
//             <ItemCount />
//             <button className="carrito">Agregar al Carrito</button>
//           </div>
//         ))}
//       </div>
//     );
//   }

export default function ItemDetail({ product }) {
  return (
    <div className="itemId">
      <img src={product.imagen} alt={product.nombre} />
      <h2>{product.nombre}</h2>
      <p>{product.descripcion}</p>
      <span>$ {product.precio.toLocaleString('es-CO')} COP</span>
      <ItemCount />
      <button className="carrito">Agregar al Carrito</button>
    </div>
  );
}