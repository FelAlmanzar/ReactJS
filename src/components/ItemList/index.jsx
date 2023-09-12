import Item from "../Item";
import "./style.css"

export default function ItemList({products}) {
    return (
        <div className="item-list">
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    )
}







// function getProducts() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(dataJson);
//     }, 2000);
//   });
// }

// export default function ItemList() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getProducts().then((data) => setProducts(data));
//   }, []);

//   return (
//     <div className="item-list">
//       {products.map((product) => (
//         <Item key={product.id} product={product} />
//       ))}
//     </div>
//   );
// }
