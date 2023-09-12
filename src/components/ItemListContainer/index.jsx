import ItemList from "../ItemList";
import "./style.css";
import {useState, useEffect} from "react"; 
import dataJson from "../Productos.json"
import { useParams } from "react-router-dom";


function getProducts(genero) {
  return new Promise((resolve) => {
    setTimeout(() => {

        if(genero != undefined) {
            const productosFiltrados = dataJson.filter((item) => item.genero === genero);
            resolve (productosFiltrados)
            }

        else {
      resolve(dataJson);
    }
    }, 1000);
  });
}

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const {genero} = useParams()

  useEffect(() => {
    getProducts(genero).then((data) => setProducts(data));
  }, [genero]);

  return <div className="item-list-container">
    <ItemList products={products}/>
  </div>

}















// function Container({greetings}) {
//     const [saludo, setSaludo] = useState(greetings);

//     function changeText() {
//         setSaludo ("Bienvenido");
//     }

//     return(
//         <div className="Container_1">
//             <p>{saludo}</p>
//             <button onClick={changeText}>Presiona aquí</button>
//             <ItemList />
//         </div>
//     );
// }

// export default Container;