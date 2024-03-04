const caixa1 = document.getElementById("caixa1");
const caixa2 = document.getElementById("caixa2");
const imagens = document.querySelectorAll("img");
let player1 = "";
let player2 = "";


//verificando qual imagem foi selecionada
imagens.forEach((imagem) => {
    imagem.addEventListener("click", () => {
        verificacaoConteudo(imagem);
    })
})

function adicionarImagem(imgSelecionada) {
    const img = document.createElement("img");

    let src = imgSelecionada.src;
    let startIndex = src.indexOf("img/"); //Encontra o índice onde "img/" começa
    let imagem = src.substring(startIndex); //Extrai o restante da string a partir do índice encontrado

    img.setAttribute("src", imagem);
    caixa1.appendChild(img);

    let startIndex2 = src.indexOf("img/") + 4;
    let extensionIndex = imagem.lastIndexOf(".");
    let nomeImg = imagem.substring(4, extensionIndex);

    player1 = nomeImg;

    ia();

    return analise(player1, player2);
}

function verificacaoConteudo(imagem) {
    if (caixa1.childElementCount === 0) {
        adicionarImagem(imagem);
    }

}

function ia() {
    let opt = ['pedra', 'papel', 'tesoura'];

    if (caixa2.childElementCount === 0) {
        const num = parseInt(Math.random() * 3)
        const img = document.createElement("img");
        player2 = opt[num];
        img.setAttribute("src", `img/${player2}.png`);
        caixa2.appendChild(img);
    }

    return analise(player1, player2);
}

function tentarNovamente() {
    caixa1.innerHTML = "";
    caixa2.innerHTML = "";
}
function analise(player1, player2) {
    let ganhar = 0;

    if (player1 === player2) {
        // Empate, nenhum ponto é adicionado
    }
    else if ((player1 === 'pedra' && player2 === 'tesoura') ||
        (player1 === 'papel' && player2 === 'pedra') ||
        (player1 === 'tesoura' && player2 === 'papel')) {
        ganhar = 1; // Jogador venceu
    }
    else {
        ganhar = -1; // Robô venceu
    }

    // Atualiza a pontuação dos jogadores, verificando o limite de 10 pontos
    if (ganhar === 1) {
        let jogador = document.getElementById("player1");
        if (parseInt(jogador.textContent) < 10) {
            jogador.textContent = parseInt(jogador.textContent) + 1;
        }
        if (parseInt(jogador.textContent) === 10) {
            alert("Jogador"+ nomeJogador+ "venceu")
            resetar();
        }
    }
    else if (ganhar === -1) {
        let ia = document.getElementById("ia");
        if (parseInt(ia.textContent) < 10) {
            ia.textContent = parseInt(ia.textContent) + 1;
        }
        if (parseInt(ia.textContent) === 10) {
            alert("IA venceu")
            resetar();
        }
    }
}

function resetar(){
    document.getElementById("player1").innerHTML = "0";
    document.getElementById("ia").innerHTML = "0";
    caixa1.innerHTML = "";
    caixa2.innerHTML = "";
}