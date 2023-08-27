const cardsPast = document.getElementById("cardsPast")
const mesActual = new Date().getMonth()
console.log(mesActual + 1)
const anioActual = new Date().getFullYear()
console.log(anioActual)

var tarjetas = ""
var anio = ""
var mes = ""
var fechaEvento = ""

for (elementoU of Object.values(data.events)) {
    fechaEvento = elementoU.date;
    mes= fechaEvento.slice(5, 7);
    anio= fechaEvento.slice(0, 4);
    if ((anio>= anioActual)&&(mes>mesActual+1)) {
    }
    else
    {
         tarjetas += `<div class="card cardStyle" style="width: 18rem">
    <img src="${elementoU.image}" class="card-img-top px-3 pt-4" height=170px alt="card2">
    <div class="card-body">
        <h5 class="card-title text-center fw-bold">
            ${elementoU.name}
        </h5>
        <p class="card-text"> ${elementoU.description}</p>
        <div class="row m-0 pb-4 align-items-center">
            <div class="col-12 p-0 mb-1">
                <p class="m-0 fw-bold fs-6">Categorie: <span class="fw-normal">${elementoU.category}</span></p>
            </div>
            <div class="col-12 p-0 mb-1">
                <p class="m-0 fw-bold fs-6">Place: <span class="fw-normal">${elementoU.place}</span></p>
            </div>
            <div class="col-12 p-0 mb-1">
                <p class="m-0 fw-bold fs-6">Price: <span>$ ${elementoU.price}</span></p>
            </div>
        </div>
        
    </div>
</div>`
    }
}
cardsPast.innerHTML = tarjetas