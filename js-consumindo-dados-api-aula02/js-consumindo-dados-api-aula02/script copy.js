var consultaCEP = fetch("https://viacep.com.br/ws/01001005/json/")
  .then(function (resposta) {
    resposta.json();
  })
  .then(function (r) {
    if (r.erro) {
      throw Error("Errei");
    } else console.log(r);
  })
  .catch(function (error) {
    console.log("Error aqui: ", error);
  })
  .finally(function (final) {
    console.log("terminei");
  });
// console.log(consultaCEP);





function newButton(text,funcao){
  const $body = document.querySelector("body")
  const $button = document.createElement("button")
  $button.textContent = text
  funcao($button)
  $body.insertAdjacentElement("afterbegin",$button)
  return $button
}

newButton("Butão 1", (button)=>{
  button.style.cssText = `
  font-size : 100px`

  button.addEventListener("click", ()=>{
    console.log("Oi!")
  })
})
// newButton("Butão 2")