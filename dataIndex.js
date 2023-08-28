let datos = [];
const cardContainer = document.getElementById("cardsContainer")

traerDatos();
crearTarjetas(datos, cardContainer);

function traerDatos() {
    datos = data.events;
}

function crearTarjetas(datosEventos, contenedor) {
    let tarjetas = ""
    for (elementoEvento of Object.values(datosEventos)) {
        tarjetas += contenidoTarjetas(elementoEvento)
    }
    contenedor.innerHTML = tarjetas
}

function contenidoTarjetas(elemento) {
    return `<div class="card cardStyle" style="width: 18rem">
    <img src="${elemento.image}" class="card-img-top px-3 pt-4" height=170px alt="card2">
    <div class="card-body">
        <h5 class="card-title text-center fw-bold">
            ${elemento.name}
        </h5>
        <p class="card-text"> ${elemento.description}</p>
        <div class="row m-0 pb-4 align-items-center">
            <div class="col-12 p-0 mb-1">
                <p class="m-0 fw-bold fs-6">Categorie: <span class="fw-normal">${elemento.category}</span></p>
            </div>
            <div class="col-12 p-0 mb-1">
                <p class="m-0 fw-bold fs-6">Place: <span class="fw-normal">${elemento.place}</span></p>
            </div>
            <div class="col-12 p-0 mb-1">
                <p class="m-0 fw-bold fs-6">Price: <span>$ ${elemento.price}</span></p>
            </div>
        </div>
        <div class="row m-0 align-items-center">
            <div class="col-12 p-0 text-end">
                <a href="./assets/pages/details.html" class="btn btn-primary">Details</a>
            </div>
        </div>
    </div>
</div>`
}

//Para mi: PARTE DE LA RESOLUCION SIN FUNCIONES- VER BRANCH SPRINT2- COMMIT DINAMIC CARDS 
// for (elemento of Object.values(data.events)) {
//     tarjetas += `<div class="card cardStyle" style="width: 18rem">
//     <img src="${elemento.image}" class="card-img-top px-3 pt-4" height=170px alt="card2">
//     <div class="card-body">
//         <h5 class="card-title text-center fw-bold">
//             ${elemento.name}
//         </h5>
//         <p class="card-text"> ${elemento.description}</p>
//         <div class="row m-0 pb-4 align-items-center">
//             <div class="col-12 p-0 mb-1">
//                 <p class="m-0 fw-bold fs-6">Categorie: <span class="fw-normal">${elemento.category}</span></p>
//             </div>
//             <div class="col-12 p-0 mb-1">
//                 <p class="m-0 fw-bold fs-6">Place: <span class="fw-normal">${elemento.place}</span></p>
//             </div>
//             <div class="col-12 p-0 mb-1">
//                 <p class="m-0 fw-bold fs-6">Price: <span>$ ${elemento.price}</span></p>
//             </div>
//         </div>
//         <div class="row m-0 align-items-center">
//             <div class="col-12 p-0 text-end">
//                 <a href="./assets/pages/details.html" class="btn btn-primary">Details</a>
//             </div>
//         </div>
//     </div>
// </div>`
// }
