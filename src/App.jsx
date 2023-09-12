import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemCount from "./components/ItemCount";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
    
  <main className="main">
    <Navbar/>
    
      <Routes>        
        <Route exact path="/videojuegos/:genero" element={<ItemListContainer greetings="Para iniciar" />} />
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/producto/:id" element={<ItemDetailContainer />} /> 
      </Routes>
     
  </main>
  </BrowserRouter>

);
}


export default App
