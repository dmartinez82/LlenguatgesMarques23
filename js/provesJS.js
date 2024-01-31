_get("#btnCalculaChar").addEventListener("click", function(){calculaChar("#texte", "#resultadoCalculaChar");});
_get("#btnCalculaChar2").addEventListener("click", function(){calculaChar("#texte2", "#resultadoCalculaChar2");});
_get("#suma").addEventListener("click", suma);
_get("#btnMostraPasswd").addEventListener("click", () => mostraPassword("#contrasenya", "#btnMostraPasswd"));
_get("#btnCanviMode").onclick = canviMode;

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


function mostraPassword(inputID, btnID){
    var contrasenya = _get(inputID);
    var btnMostraPasswd = _get(btnID);
    var valorAtrib = contrasenya.getAttribute("type");
    if (valorAtrib=="text"){
        contrasenya.setAttribute("type", "password");
        btnMostraPasswd.value="👁️";
        btnMostraPasswd.classList.add("vermell");
        btnMostraPasswd.classList.remove("verd"); 
    } else if (valorAtrib=="password"){
        contrasenya.setAttribute("type", "text");
        btnMostraPasswd.value="⚔️";
        btnMostraPasswd.classList.add("verd");
        btnMostraPasswd.classList.remove("vermell"); 
    }
}

function canviMode(){

    const body = _get("body");
    const icona = _get("#btnCanviMode i");
    if(body.classList.contains("modoDia")) {
        body.classList.remove("modoDia");
        body.classList.add("modoNoche");
        icona.classList.remove("fa-sun");
        icona.classList.add("fa-moon");
    } else if(body.classList.contains("modoNoche")) {
        body.classList.remove("modoNoche");
        body.classList.add("modoDia");
        icona.classList.remove("fa-moon");
        icona.classList.add("fa-sun");
    }
}

function afegeixEventInputs (){
    
}