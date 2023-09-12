const tabla1 = document.querySelector("#table1")
const tabla2 = document.querySelector("#table2")
const tabla3 = document.querySelector("#table3")

let url = "https://mindhub-xj03.onrender.com/api/amazing"
let datos = null
let datos2 = null
let fecha

let datosTabla2 = []
let datosTabla3 = []

let mayorCapacidadEvento = []
let mayorAsistenciaEvento = []
let menorAsistenciaEvento = []

traerDatosUrl(url)
traerDatosUrl2(url)
traerDatosUrl3(url)

/******************* FUNCIONES ********************/
function traerDatosUrl(url) {
    fetch(url)
        .then(response => response.json())
        .then(dataApi => {

            datos = dataApi.events
            extraerValoresTabla1(datos)
            console.log(datos)
            tablaEventStatistc()

        })
        .catch(error => console.log(error))
}

function traerDatosUrl2(url) {
    fetch(url)
        .then(response => response.json())
        .then(dataApi => {
            fecha = dataApi.currentDate
            datos3 = dataApi.events.filter(element => element.date < fecha)
            extraerValoresTabla2(datos3)
            tablaPastEvents()

        })
        .catch(error => console.log(error))
}

function traerDatosUrl3(url) {
    fetch(url)
        .then(response => response.json())
        .then(dataApi => {
            fecha = dataApi.currentDate
            datos2 = dataApi.events.filter(element => element.date > fecha)
            extraerValoresTabla3(datos2)
            tablaUpcomingEvents()

        })
        .catch(error => console.log(error))
}



function extraerValoresTabla1(datos) {

    datos.sort((a, b) => (((b.assistance) * 100 / b.capacity) - ((a.assistance) * 100 / a.capacity)))
    mayorAsistenciaEvento.push(datos[0])

    datos.sort((a, b) => (((a.assistance) * 100) / a.capacity) - (((b.assistance) * 100) / b.capacity))
    menorAsistenciaEvento.push(datos[0])

    datos.sort((a, b) => b.capacity - a.capacity)
    mayorCapacidadEvento.push(datos[0])

}

function tablaEventStatistc() {
    let html = ""
    for (let i = 0; i < mayorCapacidadEvento.length; i++) {

        html += `<tr>
                    <td class="filaBotones"> 
                        <a href="./details.html?id=${mayorAsistenciaEvento[i]._id}" class="btn btn-tabla">${mayorAsistenciaEvento[i].name}</a>
                    </td>

                    <td class="filaBotones"> 
                        <a href="./details.html?id=${menorAsistenciaEvento[i]._id}" class="btn btn-tabla">${menorAsistenciaEvento[i].name}</a>
                    </td>

                    <td class="filaBotones"> 
                        <a href="./details.html?id=${mayorCapacidadEvento[i]._id}" class="btn btn-tabla">${mayorCapacidadEvento[i].name}</a>
                    </td>
                </tr>`

        // `<tr>
        //     <td>${mayorAsistenciaEvento[i].name}</td>
        //     <td>${(((mayorAsistenciaEvento[i].assistance) * 100) / mayorAsistenciaEvento[i].capacity).toFixed(2)} %</td>

        //     <td>${menorAsistenciaEvento[i].name}</td>
        //     <td>${(((menorAsistenciaEvento[i].assistance) * 100) / menorAsistenciaEvento[i].capacity).toFixed(2)}%</td>

        //     <td>${mayorCapacidadEvento[i].name}</td>
        //     <td>Cap: ${mayorCapacidadEvento[i].capacity.toLocaleString()}</td>
        // </tr>`

    }
    tabla1.innerHTML = html


}



function extraerValoresTabla2(datos) {
    let categorias = [...new Set(datos.map(elemento => elemento.category))]
    console.log(categorias);
    categorias.forEach(categoria => {
        let fila = {
            categoria: categoria,
            revenue: 0,
            porcentajeAsistencia: 0,
        }

        let sumaRevenue = 0
        let datosCategoria = datos.filter(elemento => elemento.category == categoria)
        datosCategoria.forEach(elemento => sumaRevenue += (elemento.assistance || elemento.estimate) * elemento.price)
        fila.revenue = sumaRevenue


        let sumaAsistencias = 0
        datosCategoria.forEach(elemento => sumaAsistencias += +(elemento.assistance || elemento.estimate))


        let sumaCapacidad = 0
        datosCategoria.forEach(elemento => sumaCapacidad += +elemento.capacity)


        let porcentaje = 0
        porcentaje = sumaAsistencias * 100 / sumaCapacidad
        fila.porcentajeAsistencia = porcentaje


        datosTabla2.push(fila)
    })
}

function tablaPastEvents() {

    let html = ""
    datosTabla2.forEach(fila =>
        html +=
        `<tr>
                <td class="primerColumna">${fila.categoria}</td>
                <td>$ ${fila.revenue.toLocaleString()}</td>
                <td>${fila.porcentajeAsistencia.toFixed(2)} %</td>
            </tr>`

    )
    tabla2.innerHTML = html
}



function extraerValoresTabla3(datos) {
    let categorias = [...new Set(datos.map(elemento => elemento.category))]
    console.log(categorias);
    categorias.forEach(categoria => {
        let fila = {
            categoria: categoria,
            revenue: 0,
            porcentajeAsistencia: 0,
        }

        let sumaRevenue = 0
        let datosCategoria = datos.filter(elemento => elemento.category == categoria)
        datosCategoria.forEach(elemento => sumaRevenue += (elemento.assistance || elemento.estimate) * elemento.price)
        fila.revenue = sumaRevenue


        let sumaAsistencias = 0
        datosCategoria.forEach(elemento => sumaAsistencias += (elemento.assistance || elemento.estimate))


        let sumaCapacidad = 0
        datosCategoria.forEach(elemento => sumaCapacidad += elemento.capacity)


        let porcentaje = 0
        porcentaje = sumaAsistencias * 100 / sumaCapacidad
        fila.porcentajeAsistencia = porcentaje


        datosTabla3.push(fila)
    })
}

function tablaUpcomingEvents() {

    let html = ""
    datosTabla3.forEach(fila =>
        html +=
        `<tr>
                <td>${fila.categoria}</td>
                <td>$ ${fila.revenue.toLocaleString()}</td>
                <td>${fila.porcentajeAsistencia.toFixed(2)} %</td>
            </tr>`

    )
    tabla3.innerHTML = html
}



