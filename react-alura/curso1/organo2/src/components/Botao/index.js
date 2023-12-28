import './Botao.css'

const Botao = ({children}) =>{
    console.log(children)
    return (
        <button className='botao'>
            {children}
        </button>
    )
}

export default Botao