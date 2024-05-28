_get("#btnCalculaChar").addEventListener("click", function () { calculaChar("#texte", "#resultadoCalculaChar"); });
_get("#suma").addEventListener("click", suma);
_get("#btnMostraPasswd").addEventListener("click", () => mostraPassword("#contrasenya", "#btnMostraPasswd"));
_get("#btnCanviMode").onclick = canviMode;
_get("#btnAfegeixNom").onclick = afegeixNom;
_get("#clear").onclick = esborraLocalStorage;
document.body.onload = init;

const inputNom = _get("#nom");
const inputEdad = _get("#edad");
const divResulNom = _get("#resulNom");
const labelReloj = document.querySelector("#reloj");

function sum(a, b, ...parametros) {
    let resultado = a +b;
    for (const parametro of parametros) {
      resultado += parametro;
    }
    return resultado;
  }
  
  console.log(sum(1, 4, "2", 3, 9));
  // Expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // Expected output: 10
  

//función de alias al querySelector (acortar nombre)
function _get(elemento) {
    return document.querySelector(elemento);
}

//función que se ejecuta nada más cargar el body
function init() {
    refreshData();
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

/////// Funcionalidades para crear la tabla a partir de los datos 
/////// introducidos por el usuario y guardarlos en el .localStorage

function afegeixNom() {
    // en el localStorage almacenamos el índice (se podría recorrer el array tb)
    let indice = localStorage.getItem("indice");
    localStorage.setItem("indice", ++indice);

    //generamos el objeto con la información recabada 
    let informacion = {
        id: indice,
        nombre: inputNom.value,
        edad: inputEdad.value,
        esCompleto: function () {
            return this.id && this.nombre && this.edad;
        }
    };

    //Si el elemento está completo y no es duplicado, lo metemos en el array de elementos
    let trobat = false;
    if (informacion.esCompleto() && !trobat) {
        let elements = localStorage.getItem("elements");
        elements = elements ? JSON.parse(elements) : [];
        elements.push(informacion);
        localStorage.setItem("elements", JSON.stringify(elements));
    }

    //limpieza
    inputNom.value = "";
    inputEdad.value = "";
    inputNom.focus();

    //refrescamos datos
    refreshData();
}

function refreshData() {
    //leemos del localStorage y parseamos el JSON a objeto
    let elements = localStorage.getItem("elements");
    elements = elements ? JSON.parse(elements) : [];

    //si el array está vacío, ocultamos la tabla
    if (elements.length) divResulNom.classList.remove("dNone");
    else divResulNom.classList.add("dNone");

    //construimos el HTML de toda la tabla
    let resultado = "";
    for (let elemento of elements) {
        let botonElimina = `<input type="button" value="-" onclick="elimina(${elemento.id})">`;
        resultado += `<tr><td>${elemento.id}</td><td>${elemento.nombre}</td><td>${elemento.edad}</td><td>${botonElimina}</td></tr>`;
    }

    //actualizamos el DOM
    divResulNom.querySelector("tbody").innerHTML = resultado;
}

function elimina(id) {
    //leemos del localStorage y parseamos el JSON a objeto
    let elements = localStorage.getItem("elements");
    elements = elements ? JSON.parse(elements) : [];

    //buscar el elemento con id que nos pasan por parámetro
    const index = elements.findIndex((elemento) => elemento.id == id);

    let elementsEsborrats = elements.splice(index, 1);
    alert("Element esborrat: " + elementsEsborrats[0].nombre)

    //actualizamos localStorage
    localStorage.setItem("elements", JSON.stringify(elements));

    refreshData();
}

function esborraLocalStorage() {
    localStorage.clear();
    refreshData();
}

document.body.onload = reloj;

let intervalo;
function reloj() {
    let segundos = 50;
    let minutos = 0;
    intervalo = setInterval(function () {
        segundos++;
        if (segundos == 60) {
            segundos = 0;
            minutos++;
        }
        if (minutos == 2) {
            clearInterval(intervalo); //aturam
        }
        labelReloj.textContent = `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;

    }, 1000);
}


const obj = {propiedad: "valor"}
const original = [1, 2, 3, "hola", obj];
const duplicado = [...original];

original[2] = 4;
original[4].nuevapropiedad = "pepito";

console.log(original);
console.log(duplicado);


const CONSTANTE= [];
CONSTANTE.push("hola");

let mapa  = new Map();
mapa.set(1, "hola");
mapa.set(2, "adios");

console.log(mapa);

console.log(mapa.keys)