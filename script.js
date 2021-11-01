let visorText = document.getElementById("visorText");

const addText = function(calc_input){
    visorText.innerText = visorText.innerText.trimEnd().concat(calc_input);
}

const clearAll = function(){
    //window.alert('funciona!')
    visorText.innerText = '';
}

/* 
Execução das operações.
Etapas:
1- Encontrar e fazer multiplicações
*/

let teste = '1+2*2+2*3/2-1';
let multiplicacoes = teste.match(/\d+\*\d+/g);
 
multiplicacoes = 
    multiplicacoes.map(i => i.split('*')). // array de arrays com conjuntos de numeros
    map(n => n.flatMap(nn => parseFloat(nn))). // transformar strings em numeros
    map(m => m.reduce((mm1, mm2) => mm1*mm2)); // fazer as multiplicações de cada bloco
console.log(multiplicacoes);

//2- Remontar expressão substituindo resultados das multiplicações
teste = multiplicacoes.reduce((c,m) => c.replace(/\d+\*\d+/,m),teste);
console.log(teste)

//3 -Repetir processo para divisões
let divisoes = teste.match(/\d+\/\d+/g);
divisoes =
    divisoes.map(i => i.split('/')). 
        map(n => n.flatMap(nn => parseFloat(nn))). 
        map(m => m.reduce((mm1, mm2) => mm1/mm2));
teste = divisoes.reduce((c,m) => c.replace(/\d+\/\d+/,m),teste);
console.log(teste)

//4- Somas e subtrações
let somasSubtr = teste.match(/\+\d+|^\d+|\-\d+/g);
console.log(
    somasSubtr.map(a => parseFloat(a.replace("+",""))).
    reduce((b,c) => b+c)
    );
