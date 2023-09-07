let datos = [];
const cardContainer = document.getElementById("cardsContainer")
const categoriaContenedor = document.getElementById("categorias")
const buscadorContenedor = document.getElementById("buscador")


////////////////////TARJETAS////////////////////
traerDatos();
crearTarjetas(datos, cardContainer);

////////////////////CHECKBOX////////////////////
let categorias = traerCategorias(datos)
crearChecks(categorias, categoriaContenedor)

////////////////////EVENTOS////////////////////
categoriaContenedor.addEventListener("change", filtrarTodo)
buscadorContenedor.addEventListener("input", filtrarTodo)

/*
categoriaContenedor.addEventListener("change", () =>{
    let filtroCategorias= filtrarPorCategoria(datos)
    crearTarjetas(filtroCategorias, cardContainer)
})

buscadorContenedor.addEventListener("input", ()=>{
    let filtroBuscar= filtrarPorTexto(datos,buscadorContenedor.value)
    crearTarjetas(filtroBuscar, cardContainer)
})*/


//****************FUNCIONES****************//

////////////////////DATOS////////////////////
function traerDatos() {
    datos = data.events;
}

////////////////////TARJETAS////////////////////

//este es como PintarTarjetas(arreglo, contenedor)
// function crearTarjetas(datosEventos, contenedor) {
//     let tarjetas = ""
//     for (elementoEvento of Object.values(datosEventos)) {
//         tarjetas += contenidoTarjetas(elementoEvento)
//     }
//     contenedor.innerHTML = tarjetas
// }


function crearTarjetas(datosEventos, contenedor) {
    if(datosEventos.length==0){
        contenedor.innerHTML=`<div class="sinResultados px-md-4 align-content-center">
        <div class="row">
            <div class="col-12 px-0">
                <p class="fw-bold fs-3">Lo sentimos, no hemos podido encontrar ningún resultado...<img class="imgSinResultados px-lg-3" src="./assets/images/no_results.png" alt="no results"> </p>
            </div>
        </div>
        <div class="row fs-5">
            <p class="px-0">Pruebe buscando otro término</p>
        </div>
    </div>`
    return
    }

    let tarjetas = ""
    datosEventos.forEach(element => {
        tarjetas += contenidoTarjetas(element)
    });
    contenedor.innerHTML = tarjetas
}

//es como CrearTarjeta
function contenidoTarjetas(elemento) {
    return `<div class="card cardStyle" style="width: 18rem">
    <img src="${elemento.image}" class="card-img-top px-3 pt-4" height=170px alt="${elemento.name}">
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
                <a href="./assets/pages/details.html?id=${elemento._id}" class="btn btn-primary">Details</a>
            </div>
        </div>
    </div>
</div>`
}
/////////////////////////////////////////////

////////////////////CHECKBOX////////////////////

// Crear Switch
function contenidoChecks(elemento) {
    return `<div class="form-check col-12 col-md-3 col-lg-3 py-md-1">
            <input class="form-check-input" type="checkbox" value="${elemento}" id="${elemento}">
            <label class="form-check-label" for="${elemento}">
                ${elemento}
            </label>
        </div>`
}
// es igual a PintaSiwtches
function crearChecks(arreglo, contenedor){
    let html = ""
    arreglo.forEach(element => {
        html += contenidoChecks(element)
    });
    contenedor.innerHTML= html
}

function traerCategorias(arreglo)
{
    return arreglo.map(elemento => elemento.category).filter((categoria, indice, categorias) => categorias.indexOf(categoria) === indice)
    //tengo un arreglo con todas las categorias, pero puede que esten repetidas
    //entonces con filter saco los repetidos
}
/////////////////////////////////////////////


////////////////////FILTROS////////////////////
//filtrar por texto
function filtrarPorTexto(arreglo, texto)
{
    return arregloFiltrado = arreglo.filter(elemento => elemento.name.toLowerCase().includes(texto.trim().toLowerCase()))
}

function filtrarPorCategoria(arreglo)
{
    let checkBoxs= Array.from(document.getElementsByClassName("form-check-input"))
    let checkSelect = checkBoxs.filter(check => check.checked)
    if(checkSelect.length==0){
        return arreglo
    }
    let valoresCheck = checkSelect.map(chSelect => chSelect.value)
    let arregloFiltrado= arreglo.filter(element => valoresCheck.includes(element.category))
    return arregloFiltrado
}

function filtrarTodo()
{
    let filtroCategorias= filtrarPorCategoria(datos)
    let filtroBuscar= filtrarPorTexto(filtroCategorias, buscadorContenedor.value)
    crearTarjetas(filtroBuscar, cardContainer)
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