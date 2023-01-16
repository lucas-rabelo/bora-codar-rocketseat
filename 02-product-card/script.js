const buttonView = document.querySelector("#view");
const buttonClose = document.querySelector("#close");

const img = document.querySelector("#product");

function openGif() {
    changeButton(); // troca a imagem do botão

    img.setAttribute("src", "./assets/sofa_girando.gif"); // troca a imagem para o gif
}

function closeGif() {
    changeButton(); // troca a imagem do botão

    img.setAttribute("src", "./assets/sofa.png"); // troca o gif para a imagem estática
}

function changeButton() {
    buttonClose.classList.toggle("hide");
    buttonView.classList.toggle("hide");
}

buttonView.addEventListener("click", openGif);
buttonClose.addEventListener("click", closeGif);