import { useState } from "react"
import "./style.css"

export default function ItemCount() {
    
    const [count, setCount] = useState (0)

    function onIncrease (){
        if(count < 5){
            setCount(count + 1) 
        }
        
    }

    function onDecrease (){
        if(count > 0){
        setCount(count - 1)
    }
}

    return (
        <div>
            <button onClick={onDecrease}>-</button>
            <span>{count}</span>
            <button onClick={onIncrease}>+</button>
        </div>
    )
}