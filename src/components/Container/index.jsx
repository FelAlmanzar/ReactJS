import "./style.css";
import {useState} from "react"; 

function Container({text}) {
    const [saludo, setSaludo] = useState(text);

    function changeText() {
        setSaludo ("Bienvenido");
    }

    return(
        <div className="Container_1">
            <p>{saludo}</p>
            <button onClick={changeText}>Presiona aquí</button>
        </div>
    );
}

export default Container;