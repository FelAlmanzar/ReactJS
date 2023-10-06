import React, { useEffect, useState } from "react";
import dataJson from "../Productos.json"
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";
import "./style.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/data";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    
    const docRef = doc(db, "productos", id);
    getDoc(docRef)
    .then((resp) => {
      setProduct(
        {...resp.data(), id: resp.id}
      );
    })

  }, [id]);

  console.log("Product:", product); 

  return (
    <div className="item-detail-container">
      {product &&
        <ItemDetail product={product} />
     }
    </div>
  );
}