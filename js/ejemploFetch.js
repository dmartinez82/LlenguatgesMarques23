const header1 = document.querySelector("h1");
const llamada = document.getElementById("llamada");
const peliculas = document.getElementById("peliculas");

llamada.onclick = obtenerDatos;


function obtenerDatos() {
    fetch("/json/peliculas.json")
        .then(response => {
            if (response.ok)
                return response.json();

            throw new Error("Se ha producido un error inesperado en la aplicación");
        })
        .then(data => {
            procesarDatosJSON(data);
        })
        .catch(err => {
            alert(err.message);
        });
}

function procesarDatosJSON(datos){

    let resultados = "";

    for (const pelicula of datos.peliculas) {
        resultados += `<option>${pelicula.titulo} - ${pelicula.año}</option>`;
    }

    peliculas.innerHTML = resultados;

}