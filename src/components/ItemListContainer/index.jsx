import ItemList from "../ItemList";
import "./style.css";
import {useState, useEffect} from "react"; 
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/data";


export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const { genero } = useParams();

  useEffect(() => {
    
    const productosRef = collection(db, "productos");

    const q = genero ? query(productosRef, where("genero", "==", genero)) : productosRef;

    getDocs(q)
    .then((resp)=> {

      setProducts(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id}
        })
      );
      setIsLoading(false);
    })

  }, [genero]);

  return (
    <div className="item-list-container">
      {isLoading ? (
        <Loader /> 
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
}









