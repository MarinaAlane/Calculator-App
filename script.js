let visorText = document.getElementById("visorText");

const addText = function(calc_input){
    visorText.innerText = visorText.innerText.trimEnd().concat(calc_input);
}

const clearAll = function(){
    //window.alert('funciona!')
    visorText.innerText = '';
}

const showResult = function(result){
    visorText.innerText = result;
}

//Execução das operações.
const equal = function(){
    let expressao = visorText.innerText;
    //Se houver multiplicação, fazer
    if (expressao.match(/\*/)){
        multiplicacoes = expressao.match(/\d+\*\d+/g);
        multiplicacoes = 
            multiplicacoes.map(i => i.split('*')). // array de arrays com conjuntos de numeros
                map(n => n.flatMap(nn => parseFloat(nn))). // transformar strings em numeros
                map(m => m.reduce((mm1, mm2) => mm1*mm2)); // fazer as multiplicações de cada bloco
        // Remontar expressão substituindo resultados das multiplicações
        expressao = multiplicacoes.reduce((c,m) => c.replace(/\d+\*\d+/,m),expressao);
    }
    //Se houver divisão, fazer
    if (expressao.match('\/')){
        let divisoes = expressao.match(/\d+\/\d+/g);
        divisoes =
            divisoes.map(i => i.split('/')). 
                map(n => n.flatMap(nn => parseFloat(nn))). 
                map(m => m.reduce((mm1, mm2) => mm1/mm2));
        expressao = divisoes.reduce((c,m) => c.replace(/\d+\/\d+/,m), expressao);
    }
    // Somas e subtrações em uma tacada só.
    // Roda se houver pelo menos uma expressão completa de soma ou subtração
    if(expressao.match(/^\d+\+\d+|^\d+-\d+/)){
    let somasSubtr = expressao.match(/\+\d+|^\d+|\-\d+/g);
    // mostra resultado no visor com showResult
    showResult(somasSubtr.
        map(a => parseFloat(a.replace("+",""))).
        reduce((b,c) => b+c));
    } else {
        return expressao
    }
    
}


