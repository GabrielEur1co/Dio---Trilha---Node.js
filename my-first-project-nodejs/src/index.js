
function lançarDado(){
    return Math.floor(Math.random()*6)+1


}

const velocidade = 4;
const Dado = lançarDado()

function somarVelocidade(){
    return velocidade + Dado
}

/* console.log(somarVelocidade()) */


function selecionarDesafio(){
    return Math.floor(Math.random () *3  ) + 1
}

const seletorDesafio = selecionarDesafio();

if(seletorDesafio === 1){
    console.log('Desafio 1')
}else if(seletorDesafio === 2 ){
    console.log('Desafio 2')

}else {
    console.log('Desafio 3')
}
