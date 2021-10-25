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
