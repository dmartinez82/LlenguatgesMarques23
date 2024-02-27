const nom = document.getElementById("nom");
const edad = document.getElementById("edad");
const username = document.getElementById("username");
const limpiar = document.getElementById("limpiar");

const form = document.querySelector("form");
const selDades = document.querySelector("#selDades");

form.onsubmit = function (event) {
    event.preventDefault();

    let objetosRecuperados = obteArraySessionStorage("datos");

    const nuevoObjeto = creaObjeto();

    let encontrado = false;
    objetosRecuperados.forEach(element => {
        if (element.username == nuevoObjeto.username) {
            encontrado = true;
            return;
        }
    });

    if (encontrado) {
        alert("Este usuario ya existe!");
    } else {
        objetosRecuperados.push(nuevoObjeto);
        sessionStorage.setItem("datos", JSON.stringify(objetosRecuperados));

        actualizaSelect(objetosRecuperados);

        this.reset();
    }

}

function actualizaSelect(objetos) {
    selDades.innerHTML = "";

    let resultado = "";
    for (const objeto of objetos) {
        resultado += `<option value="${objeto.username}">${objeto.nombre} (Edad: ${objeto.edad})</option>`;
    }

    selDades.innerHTML = resultado;
}

function creaObjeto() {
    return {
        nombre: nom.value,
        edad: edad.value,
        username: username.value
    }
}

selDades.onchange = function () {

    const datosElegidos = selDades.value;

    let objetosRecuperados = obteArraySessionStorage("datos");

    let objetoEncontrado = null;
    for (const objeto of objetosRecuperados) {
        if (objeto.username == datosElegidos) {
            objetoEncontrado = objeto;
            break;
        }
    }

    if (objetoEncontrado) {
        nom.value = objetoEncontrado.nombre;
        edad.value = objetoEncontrado.edad;
        username.value = objetoEncontrado.username;
    }
}

limpiar.onclick = () => {
    sessionStorage.clear();
    actualizaSelect([]);
}

document.body.onload = () => {
    actualizaSelect(obteArraySessionStorage("datos"));
}

function obteArraySessionStorage(param) {
    let objetosRecuperados = [];
    let datosRecuperados = sessionStorage.getItem(param);

    if (datosRecuperados != null) {
        objetosRecuperados = JSON.parse(datosRecuperados);
    }

    return objetosRecuperados;
}