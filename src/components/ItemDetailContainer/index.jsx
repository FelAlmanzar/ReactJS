import React, { useEffect, useState } from "react";
import dataJson from "../Productos.json"
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";
import "./style.css";


// function getProductsID(id) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
  
//           if(id != undefined) {
//               const productoFiltrado = dataJson.filter((item) => item.id === id);
//               resolve (productoFiltrado)
//               }
  
//           else {
//         resolve(dataJson);
//       }
//       }, 1000);
//     });
//   }

// export default function ItemDetailContainer () {
//     const [product, setProduct] = useState ([]);
//     const {id} = useParams()

//     useEffect(() => {
//         getProductsID(id).then((data) => setProduct(data));
//       }, [id]);


// return (<div className="item-detail-container">
//     <ItemDetail product = {product}/>
//   </div>
// );
//     }


function getProductsByID(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (id !== undefined) {
        const productoFiltrado = dataJson.find((item) => item.id === parseInt(id));
        resolve(productoFiltrado ? [productoFiltrado] : []);
      } else {
        resolve(dataJson);
      }
    }, 1000);
  });
}

export default function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProductsByID(id).then((data) => setProduct(data));
  }, [id]);

  console.log("Product:", product); 

  return (
    <div className="item-detail-container">
      {product.length > 0 ? (
        <ItemDetail product={product[0]} />
      ) : (
        <p>No se encontró el producto.</p>
      )}
    </div>
  );
}