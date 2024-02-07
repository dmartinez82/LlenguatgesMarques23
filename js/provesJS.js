_get("#btnCalculaChar").addEventListener("click", function () { calculaChar("#texte", "#resultadoCalculaChar"); });
_get("#btnCalculaChar2").addEventListener("click", function () { calculaChar("#texte2", "#resultadoCalculaChar2"); });
_get("#suma").addEventListener("click", suma);
_get("#btnMostraPasswd").addEventListener("click", () => mostraPassword("#contrasenya", "#btnMostraPasswd"));
_get("#btnCanviMode").onclick = canviMode;
_get("#btnAfegeixNom").onclick = afegeixNom;
_get("#proves").onclick = proves;

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
        id: ++indice,
        nombre: inputNom.value,
        edad: inputEdad.value,
        esCompleto: function(){
            return this.id && this.nombre && this.edad;
        }
    };

    var trobat = false;
    elementos.forEach(function(elemento){
        if (elemento.nombre ==   informacion.nombre) trobat = true;
    });

    if (informacion.esCompleto() && !trobat){
        elementos.push(informacion);
    }
        
    inputNom.value = ""; //limpiamos el input
    inputEdad.value = ""; //limpiamos el input

    refreshData();
    
    inputNom.focus();

}

function refreshData() {

    if (elementos.length) divResulNom.classList.remove("dNone");
    else divResulNom.classList.add("dNone");

    let resultado = "";

    for (let elemento of elementos) {
        let botonElimina = `<input type="button" value="-" onclick="elimina(${elemento.id})">`;
        resultado += `<tr><td>${elemento.id}</td><td>${elemento.nombre}</td><td>${elemento.edad}</td><td>${botonElimina}</td></tr>`;
    }

    divResulNom.querySelector("tbody").innerHTML = resultado;
}

function proves(){

}


function elimina(id){

    //buscar el elemento con id que nos pasan por parámetro
    const index = elementos.findIndex(function(elemento){
        return elemento.id == id;
    });

    let elementsEsborrats = elementos.splice(index, 1);
    alert("Element esborrat: " + elementsEsborrats[0].nombre)

    refreshData();
}