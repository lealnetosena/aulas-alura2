export default function ehMaiorDeIdade(campo){
    console.log(campo.value)
    const dataNascimento = new Date(campo.value+"T00:00:00")
    if(!validaIdade(dataNascimento)){
        campo.setCustomValidity('O usuário não é maior de idade')
    }

}

function validaIdade(data){
    const dataAtual = new Date();
    // console.log(data.getUTCFullYear());
    // console.log(data.getUTCMonth());
    // console.log(data.getUTCDate());
    const dataMais18 = new Date(data.getUTCFullYear() +18,data.getUTCMonth(), data.getUTCDate())
    return dataAtual >= dataMais18
}