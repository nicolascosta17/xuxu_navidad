let imagens = [
    "/img/1.jpg",
    "/img/2.jpg",
    "/img/3.jpg",
    "/img/4.jpg",
    "/img/5.jpg",
    "/img/6.jpg",
    "/img/7.jpg",
    "/img/8.jpeg",
    "/img/9.jpeg",
    "/img/10.jpeg",
    "/img/11.jpeg",
    "/img/12.jpeg",
    "/img/13.jpeg"
];

let indice = 0;
let img = document.getElementById("imagem");
let intervalo;

// ======== FUNÇÕES ========

function atualizarImagem() {
    img.classList.add("saindo");

    setTimeout(() => {
        img.src = imagens[indice];
        img.classList.remove("saindo");
        atualizarPontos();
    }, 300);
}

function proxima() {
    indice++;
    if (indice >= imagens.length) indice = 0;
    atualizarImagem();
    reiniciarAutoSlide();
}

function anterior() {
    indice--;
    if (indice < 0) indice = imagens.length - 1;
    atualizarImagem();
    reiniciarAutoSlide();
}

function irPara(posicao) {
    indice = posicao;
    atualizarImagem();
    reiniciarAutoSlide();
}

function atualizarPontos() {
    let pontos = document.querySelectorAll(".ponto");
    pontos.forEach((ponto, i) => {
        ponto.classList.toggle("ativo", i === indice);
    });
}

// ======== SLIDE AUTOMÁTICO ========

function iniciarAutoSlide() {
    intervalo = setInterval(() => {
        proxima();
    }, 7500); // 10 segundos
}

function reiniciarAutoSlide() {
    clearInterval(intervalo);
    iniciarAutoSlide();
}

// ======== MÚSICA ========

function tocarMusica() {
    const audio = document.getElementById("musica");
    audio.play();
}

// ======== INICIAR AO CARREGAR ========
iniciarAutoSlide();
