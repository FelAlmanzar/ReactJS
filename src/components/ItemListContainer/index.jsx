import ItemList from "../ItemList";
import "./style.css";
import {useState} from "react"; 

function Container({greetings}) {
    const [saludo, setSaludo] = useState(greetings);

    function changeText() {
        setSaludo ("Bienvenido");
    }

    return(
        <div className="Container_1">
            <p>{saludo}</p>
            <button onClick={changeText}>Presiona aquí</button>
            <ItemList />
        </div>
    );
}

export default Container;