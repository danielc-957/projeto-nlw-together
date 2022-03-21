import { useState } from "react";

export function Button(){
    const [contador,setContador] = useState(0);
    
    function increment (){
        setContador(contador + 2);
        
    }
    return (
        <button onClick={increment}> {contador} </button>
    );
}