let visor = document.getElementById("visor");

const addText = function(calc_input){
    visor.innerText = visor.innerText.trimEnd().concat(calc_input);
}

const clearAll = function(){
    //window.alert('funciona!')
    visor.innerText = null;
}

//visor.innerText = "Wow!"
// visor.append("What?!")
