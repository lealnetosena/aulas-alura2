export default function ehUmCPF(campo){
    const cpf = campo.value.replace(/\.|-/g,"")
    
    // console.log(validaNumerosRepetidos(cpf))
    // console.log(validaPrimeiroDigito(cpf))
    console.log('primeiro digito' + validaPrimeiroDigito(cpf))
    console.log('segundo ditigo' + validaSegundoDigito(cpf.slice(0,9) + validaPrimeiroDigito(cpf)))
    console.log(cpf[9],cpf[10])
    if(validaNumerosRepetidos(cpf) 
    || (!validaPrimeiroDigito(cpf)  == cpf[9] ) 
    || (!validaSegundoDigito(cpf) == cpf[10] )){
        campo.setCustomValidity('Esse cpf não é valido')
    } 
    
}

function validaNumerosRepetidos(cpf){
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]
    return numerosRepetidos.includes(cpf)
}

function validaPrimeiroDigito(cpf){
    console.log(cpf)
    let soma = 0;
    let multiplicador = 10;

    for(let tamanho = 0; tamanho < 9; tamanho ++){
        // console.log(cpf[tamanho])
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
        
    }
    soma = (soma * 10) % 11;
    console.log('validaPrimeiroDigito - modulo' + soma)
    if(soma == 10 || soma == 11){
        soma = 0
    }
    console.log('validaPrimeiroDigito' + soma)
    return soma

}
// 969.221.800-70
// 989.143.300-??
// 222.716.420-??
function validaSegundoDigito(cpf){
    console.log(cpf)
    let soma = 0;
    let multiplicador = 11;

    for(let tamanho = 0; tamanho < 10; tamanho ++){
        // console.log(cpf[tamanho])
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
        
    }
    // console.log(soma)
    soma = (soma * 10) % 11;
    console.log('validaSegundoDigito - modulo' + soma)
    if(soma == 10 || soma == 11){
        soma = 0
    }
    console.log('validaSegundoDigito' + soma)
    return soma 

}