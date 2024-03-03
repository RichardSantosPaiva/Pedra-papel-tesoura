const resultado1 = document.getElementById("resultado1");
const resultado2 = document.getElementById("resultado2");
const imagens = document.querySelectorAll("img");

const Arrayimagens = ["img/pedra.png", "img/papel.png", "img/tesoura.png"];

//verificando qual imagem foi selecionada
imagens.forEach((imagem) => {
    imagem.addEventListener("click", () => {
        verificacaoConteudo(imagem);
    })
})

function adicionarImagem(imgSelecionada)
{
    const img = document.createElement("img");

    let src = imgSelecionada.src;
    let startIndex = src.indexOf("img/"); // Encontra o índice onde "img/" começa
    let caminho = src.substring(startIndex); // Extrai o restante da string a partir do índice encontrado

    img.setAttribute("src", caminho);   
    resultado1.appendChild(img);

    ia(resultado1)
}

function verificacaoConteudo(imagem) 
{
    if (resultado1.childElementCount === 0) {
        adicionarImagem(imagem);
    }

}

function ia(resultado1) 
{
    if (resultado2.childElementCount === 0) {
        const index=  parseInt(Math.random()*3)
        const img = document.createElement("img");
        img.setAttribute("src", Arrayimagens[index]);
        resultado2.appendChild(img);
    }
}

function resetar()
{
    resultado1.innerHTML ="";
    resultado2.innerHTML="";
}

