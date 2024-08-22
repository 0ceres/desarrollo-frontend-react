import { useState } from "react";
import { useEffect } from "react";

const Counter = () => {

    const [contador, setContador] = useState(1);
    const handleIncrement = () => {
        setContador(contador + 1);
    };
    const handledeincrement = () => {
        setContador(contador - 1);
    };

    // esta funcion especial se ejecuta cuando el componente se haya montado
    useEffect(() => { 
        setContador(12);
    }, []);

    // esta funcion especial se ejecuta cada vez que el valor de contador cambia
    useEffect(() => { 
        if (contador === 15) {
            alert("Has llegado al valor 15 (quince)!");
        }
    }, [contador]);

    // esta funcion especial se ejecuta cuando el componente se va a desmontar
    useEffect(() => { 
        return () => {
            console.log("Counter Component is unmounting...");
        }
    });

    return (
        <>
            <h4>Counter Component</h4>
            <h5>{ contador }</h5>
            <div>
                <button onClick={handleIncrement}>Incrementar</button>
                <button onClick={handledeincrement}>Decrementar</button>
            </div>
        </>
    );
};

export default Counter;