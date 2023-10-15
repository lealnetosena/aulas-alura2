async function buscaEndereco(cep1) {
  var mensagemErro = document.getElementById('erro');
  mensagemErro.innerHTML = ""
  try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep1}/json/`);
    var consultaCEPJson = await consultaCEP.json();
    if (consultaCEPJson.erro) {
      throw Error("CEP não existente!");
    }
    var cidade = document.getElementById('cidade');
    var logradouro = document.getElementById('endereco');
    var estado = document.getElementById('estado');

    cidade.value = consultaCEPJson.localidade
    logradouro.value = consultaCEPJson.logradouro
    estado.value = consultaCEPJson.estado
    console.log(consultaCEPJson)
    return consultaCEPJson;

  } catch (erro) {
    mensagemErro.innerHTML = `<p> CEP inválido. Tente novamente! </p>`
    console.log(erro);
  }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value))
