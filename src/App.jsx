import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import './App.css';

function App() {
  return (
  <main className="main">
    <Navbar/>
    <ItemListContainer greetings="Para iniciar" />
    <ItemDetailContainer />
  </main>
);
}


export default App
