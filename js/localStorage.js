const nom = document.getElementById("nom");
const edad = document.getElementById("edad");

const form = document.querySelector("form");
const selDades = document.querySelector("#selDades");

form.onsubmit = function(event){
    event.preventDefault();

    let datosRecuperados = sessionStorage.getItem("datos");
    let objetosRecuperados = [];
    if (datosRecuperados != null){
        objetosRecuperados = JSON.parse(datosRecuperados);
    }

    objetosRecuperados.push(creaObjeto());
    sessionStorage.setItem("datos", JSON.stringify(objetosRecuperados));

    actualizaSelect(objetosRecuperados);
}

function actualizaSelect(objetos){
    selDades.innerHTML = "";

    let resultado = "";
    for (const objeto of objetos) {
        resultado += `<option>${objeto.nombre} (Edad: ${objeto.edad})</option>`; 
    }

    selDades.innerHTML = resultado;

}

function creaObjeto(){
    return {
        nombre: nom.value,
        edad: edad.value
    }
}