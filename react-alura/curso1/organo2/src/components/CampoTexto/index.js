import { useState } from 'react'
import './CampoTexto.css'
const CampoTexto = ({labelInput, placeHolderInput,obrigatorio}) =>{
    // let valor = ``
    const [valor, setValor] = useState('Oii')

    const aoDigitado = (evento) => {
        setValor(evento.target.value)
        console.log(valor)
    }
    
    return (
        <div className="campo-texto">
            <label>{labelInput}</label>
            <input value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeHolderInput}/>
        </div>
    )
}

export default CampoTexto