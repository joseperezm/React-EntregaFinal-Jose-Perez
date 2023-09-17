import { useState } from "react"

function Contador () {

let [contador, setContador] = useState(0)

const sumar = () => {
    setContador(contador + 1)
}
const restar = () => {
    setContador(contador - 1)
}
const resetear = () => {
    setContador(contador = 0)
}

    return (
        <>
            <p>Cantidad: {contador}</p>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={resetear}>0</button>
        </>
    )
    }

export default Contador