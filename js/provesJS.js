_get("#btnCalculaChar").addEventListener("click", function () { calculaChar("#texte", "#resultadoCalculaChar"); });
_get("#btnCalculaChar2").addEventListener("click", function () { calculaChar("#texte2", "#resultadoCalculaChar2"); });
_get("#suma").addEventListener("click", suma);
_get("#btnMostraPasswd").addEventListener("click", () => mostraPassword("#contrasenya", "#btnMostraPasswd"));
_get("#btnCanviMode").onclick = canviMode;
_get("#btnAfegeixNom").onclick = afegeixNom;
_get("#btnMostraResultatNom").onclick = mostraResNom;

const inputNom = _get("#nom");
const inputEdad = _get("#edad");
const divResulNom = _get("#resulNom");

var elementos = [];

function _get(elemento) {
    return document.querySelector(elemento);
}

function calculaChar(inputID, outputID) {
    var texte = _get(inputID).value;
    texte = texte.trim();
    _get(outputID).value = texte.length;
}

function suma() {
    var primer = parseInt(_get("#primer").value);
    var segon = parseInt(_get("#segon").value);

    _get("#resultadoSuma").value = primer + segon;
}


function mostraPassword(inputID, btnID) {
    var contrasenya = _get(inputID);
    var btnMostraPasswd = _get(btnID);
    var valorAtrib = contrasenya.getAttribute("type");
    if (valorAtrib == "text") {
        contrasenya.setAttribute("type", "password");
        btnMostraPasswd.value = "👁️";
        btnMostraPasswd.classList.add("vermell");
        btnMostraPasswd.classList.remove("verd");
    } else if (valorAtrib == "password") {
        contrasenya.setAttribute("type", "text");
        btnMostraPasswd.value = "⚔️";
        btnMostraPasswd.classList.add("verd");
        btnMostraPasswd.classList.remove("vermell");
    }
}

function canviMode() {

    const body = _get("body");
    const icona = _get("#btnCanviMode i");
    const spanModo = _get("#titol span");
    if (body.classList.contains("modoDia")) {
        body.classList.remove("modoDia");
        body.classList.add("modoNoche");
        icona.classList.remove("fa-sun");
        icona.classList.add("fa-moon");
        spanModo.textContent = "(modo noche)";
    } else if (body.classList.contains("modoNoche")) {
        body.classList.remove("modoNoche");
        body.classList.add("modoDia");
        icona.classList.remove("fa-moon");
        icona.classList.add("fa-sun");
        spanModo.textContent = "(modo dia)";
    }
}

let indice = 0;

function afegeixNom() {
    let informacion = {
        id: indice++,
        nombre: inputNom.value,
        edad: inputEdad.value
    };

    var trobat = false;
    elementos.forEach(function(elemento){
        if (elemento.nombre ==   informacion.nombre) trobat = true;
    });

    if (informacion.nombre.length != 0 && informacion.edad.length != 0 && !trobat){
        elementos.push(informacion);
    }
        
    inputNom.value = ""; //limpiamos el input
    inputEdad.value = ""; //limpiamos el input

    mostraResNom();
}

function mostraResNom() {
    let resultado = "";

    elementos.forEach(function(elemento, indice){

    });


    for (let elemento of elementos) {
        resultado += `<tr><td>${elemento.id}</td><td>${elemento.nombre}</td><td>${elemento.edad}</td></tr>`;
    }

    divResulNom.querySelector("tbody").innerHTML = resultado;
}