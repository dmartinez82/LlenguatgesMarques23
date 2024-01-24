_get("#btnCalculaChar").addEventListener("click", function(){calculaChar("#texte", "#resultadoCalculaChar");});
_get("#btnCalculaChar2").addEventListener("click", function(){calculaChar("#texte2", "#resultadoCalculaChar2");});
_get("#suma").addEventListener("click", suma);

function _get(elemento){
    return document.querySelector(elemento);
}

function calculaChar(inputID, outputID) {
    var texte = _get(inputID).value;
    texte = texte.trim();
    _get(outputID).value = texte.length;
}

function suma(){
    var primer = parseInt(_get("#primer").value);
    var segon = parseInt(_get("#segon").value);

    _get("#resultadoSuma").value = primer + segon;
}