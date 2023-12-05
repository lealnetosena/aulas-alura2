const botaoIniciarCamera = document.querySelector("[data-video-botao]")
// const botaoIniciarCamera = document.querySelector("[data-botao]")
const campoCamera = document.querySelector("[data-camera]")
const video = document.querySelector("[data-video]")
const botaoTirarFoto = document.querySelector("[data-tirar-foto]")
const canvas = document.querySelector("[data-video-canvas]")
const mensagem = document.querySelector("[data-mensagem]")

let imagemUrl;

botaoIniciarCamera.addEventListener("click", async function(){
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio:false})

    botaoIniciarCamera.style.display = "none";
    campoCamera.style.display = "block";

    video.srcObject = iniciarVideo
})

botaoTirarFoto.addEventListener("click",() =>{
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)

    imagemUrl = canvas.toDataURL("image/jpeg")

    campoCamera.style.display = "none"
    mensagem.style.display = "block"
})