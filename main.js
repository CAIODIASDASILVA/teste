const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");


for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j <botoes.length;j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
                }
            botoes[i].classList.add("ativo");
            textos[i].classList.add("ativo");
    }
}

const contadores = document. querySelectorAll (".contador");
const tempoObjetivo1 = new Date ("2024-10-05T00:00:00")
  

contadores[0].textContent =  (tempoObjetivo1 - tempoAtual)/1000/60/24/60

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    return segundos;
  }