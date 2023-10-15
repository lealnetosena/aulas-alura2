// const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront')

// btnFiltrarLivrosDeFront.addEventListener('click',filtrarLivros)

// function filtrarLivros(){
//     let livrosFiltrados = livros.filter(livro => livro.categoria == 'front-end')
//     console.table(livrosFiltrados)
// }

const botoes = document.querySelectorAll(".btn");

botoes.forEach((btn) =>
  btn.addEventListener("click", () => {
    filtrarLivros(btn.value);
  })
);

function filtrarLivros(tag) {
  let livrosFiltrados = tag == 'disponivel'? filtrarPorDisponibilidade() : filtrarPorCategoria(tag);
  exibirOsLivrosNaTela(livrosFiltrados);
  if(tag == 'disponivel'){
    const valorTotal = calcularValorTotal(livrosFiltrados)
    console.log(valorTotal)
    exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
  }
}
function filtrarPorCategoria(tag) {
  return livros.filter((livro) => livro.categoria == tag);
}

function filtrarPorDisponibilidade() {
  return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal){
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
  `
}

