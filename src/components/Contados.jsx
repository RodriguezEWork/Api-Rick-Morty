import { useState } from "react";

const Contados = () => {

    const [contador, setContador] = useState(0);
    const AumentarContador = () => (
        setContador(contador + 1)
    )

    return (
        <div>
            <h1>Un contador de estado</h1>
            <h3>{contador}</h3>
            <button onClick={AumentarContador}>
                Aumentar el numero
            </button>
        </div>
    ) 
}

export default Contados