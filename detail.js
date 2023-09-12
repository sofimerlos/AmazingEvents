let parametro = new URLSearchParams(window.location.search)
let id = parametro.get("id")
const cardContainer = document.getElementById("cardsContainer")

let url = "https://mindhub-xj03.onrender.com/api/amazing"
let evento = null

traerDatosUrl(url);


function traerDatosUrl(url) {
    fetch(url)
        .then(response => response.json())
        .then(dataApi => {
            datos = dataApi.events
            //evento = buscarEvento(id)
            evento = datos.find(elemento => elemento._id == id)
            crearTarjeta(evento, cardContainer);
        })
        .catch(error => console.log(error))
}

// function buscarEvento(id) {
//     return datos.find(evento => evento._id == id)
// }

function contenidoTarjetas(elemento) {
    return `<div class="card py-4 px-4 cardStyle" style="max-width: 1000px;">
    <div class="row no-gutters">
        <div class="col-md-6 ">
            <img src="${elemento.image}" class="card-img py-1 py-lg-3 px-1 px-lg-3 " alt="${elemento.name}">
        </div>
        <div class="col-md-6">
            <div class="card-body py-0">
                <h5 class="card-title fw-bold fs-3 py-1 py-lg-3 pb-2">${elemento.name}
                </h5>
                <p class="card-text fs-5">${elemento.description}</p>
                <p class="fw-bold">Date: <span class="fw-normal">${elemento.date}</span></p>
                <p class="fw-bold">Place: <span class="fw-normal">${elemento.place}</span></p>
                <p class="fw-bold text-end fs-2"> <img style="vertical-align:text-top; max-width: 40px" src="../images/price.png" alt="$"> ${elemento.price} </span></p>
                </div>
        </div>
    </div>
</div>`
}

function crearTarjeta(elemento, contenedor) {
    contenedor.innerHTML = contenidoTarjetas(elemento)
}

