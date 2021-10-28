let visorText = document.getElementById("visorText");

const addText = function(calc_input){
    visorText.innerText = visorText.innerText.trimEnd().concat(calc_input);
}

const clearAll = function(){
    //window.alert('funciona!')
    visorText.innerText = '';
}

//visor.innerText = "Wow!"
// visor.append("What?!")

/* 
Execução das operações.
Etapas:
1- Encontrar e fazer multiplicações
*/

let teste = '1+2*2+2*3';
let multiplicacoes = teste.match(/\d+\*\d+/g);
console.log( 
    multiplicacoes.map(i => i .split('*')). // array de arrays com conjuntos de numeros
    map(n => n.flatMap(nn => parseFloat(nn))). // transformar strings em numeros
    map(m => m.reduce((mm1, mm2) => mm1*mm2)) // fazer as multiplicações de cada bloco
    )
