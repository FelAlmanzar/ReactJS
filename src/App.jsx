import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemCount from "./components/ItemCount";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import { Cart } from "./components/Cart";
import Checkout from "./components/checkout";

function App() {
  return (
<CartProvider>
    <BrowserRouter>
    
      <main className="main">
         <Navbar/>
    
         <Routes>        
          <Route exact path="/videojuegos/:genero" element={<ItemListContainer greetings="Para iniciar" />} />
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/producto/:id" element={<ItemDetailContainer />} /> 
          <Route exact path="/carrito" element={<Cart/>}/>
          <Route exact path="/checkout" element={<Checkout/>}/>
      </Routes>
     
      </main>
    </BrowserRouter>
    </CartProvider>
);
}


export default App
