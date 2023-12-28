import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import "./Formulario.css";

const Formulario = () => {
  const times =[
    {id:1 ,nome: 'Programação'},
    {id:2 ,nome: 'Front-End'},
    {id:3 ,nome: 'Data Science'},
    {id:4 ,nome: 'Devops'},
    {id:5 ,nome: 'UX e Design'},
    {id:6 ,nome: 'Mobile'},
    {id:7 ,nome: 'Inovação e Gestão'}
  ]

  const aoSalvar = (evento) => {
    evento.preventDefault()
    // console.log(evento)
    console.log('Form foi submetido')
  }

  return (
  <section className='formulario'>
    <form onSubmit={(evento) => aoSalvar(evento)}>
      <h2>Preencha os dados para criar o card do colaborador</h2>
      <CampoTexto obrigatorio={true} labelInput="Nome" placeHolderInput="Digite seu nome" />
      <CampoTexto obrigatorio={true} labelInput="Cargo" placeHolderInput="Digite seu Cargo" />
      <CampoTexto
        labelInput="Imagem"
        placeHolderInput="Digite seu imagem"
      />
      <ListaSuspensa obrigatorio={true} label="Time" itens={times}></ListaSuspensa>
      <Botao  >
        Criar Card

      </Botao>
    </form>
  </section>
  )
};

export default Formulario;
