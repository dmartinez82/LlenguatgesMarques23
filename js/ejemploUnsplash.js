const contenedor = document.querySelector("main");
const btnCarregaAleatori = document.querySelector("#btnCarregaAleatori");
const consulta = document.querySelector("#query");
const footer = document.querySelector("footer");

btnCarregaAleatori.onclick = carrega; 

const MI_CLAVE = ""; //posau aquí la vostra clau. 

function carrega(){

    fetch(`https://api.unsplash.com/photos/random?client_id=${MI_CLAVE}&query=${consulta.value}`)
    .then(function(response){
        footer.textContent = `Te quedan ${response.headers.get("x-ratelimit-remaining")} peticiones.` 
        return response.json();
    })
    .then(function(data){
        contenedor.innerHTML = `<img src="${data.urls.thumb}" alt="${data.description}">`;
    });

}