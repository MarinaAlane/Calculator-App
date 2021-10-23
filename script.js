let visorText = document.getElementById("visor");

const addText = function(calc_input){
    visorText.innerHTML = visorText.innerHTML.trimEnd().concat(calc_input);
}

const clearAll = function(){
    //window.alert('funciona!')
    visorText.innerHTML = '&nbsp;';
}

//visor.innerText = "Wow!"
// visor.append("What?!")
