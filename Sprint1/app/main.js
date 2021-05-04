import mascotasPerroBD from './mascotasPerroBD.js'
import mascotasGatoBD from './mascotasGatoBD.js'

function mostrarMascotas(mascotas) {
    let columna1 = document.querySelector(".grid-mascotas")
    //let columna2 = document.querySelector(".columna2")
    //let mascotas = mascotasPerroBD
    columna1.innerHTML = ''
    //columna2.innerHTML = ''
    mascotas.forEach(item => {
        if (item.id < 8) {
            columna1.innerHTML += `
            <div class="col mascotas">
                <a href="detalle_mascota.html" class="enlace-detalle-mascota">
                    <div class="card bg-dark text-white gradiente" id="mascota${item.id}" data-mascota=${item.id}>                
                        <img src="${item.imagen}" class="card-img" alt="...">
                        <div class="card-img-overlay">
                                <h5 class="card-title body2Bold">${item.nombre}</h5>
                                <p class="card-text body2Regular">${item.raza}</p>
                        </div>
                    </div>
                </a>
            </div>`
        }
        /*else {
            columna2.innerHTML += `
            <a href="detalle_mascota.html" class="enlace-detalle-mascota">
                <div class="card bg-dark text-white gradiente" id="mascota${item.id}" data-mascota=${item.id}>
                    <img src="${item.imagen}" class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <h5 class="card-title body2Bold">${item.nombre}</h5>
                        <p class="card-text body2Regular">${item.raza}</p>
                    </div>
                </div>
            </a>`
        }*/
    });

}

function perro(event) {
    let mascotasperro = mascotasPerroBD
    mostrarMascotas(mascotasperro)
    localStorage.setItem("tipoMascota", "perro")
    document.querySelector("#mascota0").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 0)
    })
    document.querySelector("#mascota1").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 1)
    })
    document.querySelector("#mascota2").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 2)
    })
    document.querySelector("#mascota3").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 3)
    })
    document.querySelector("#mascota4").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 4)
    })
    document.querySelector("#mascota5").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 5)
    })
    document.querySelector("#mascota6").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 6)
    })
    document.querySelector("#mascota7").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 7)
    })
}
function gato(event) {
    let mascotasgato = mascotasGatoBD
    mostrarMascotas(mascotasgato)
    localStorage.setItem("tipoMascota", "gato")
    document.querySelector("#mascota0").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 0)
    })
    document.querySelector("#mascota1").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 1)
    })
    document.querySelector("#mascota2").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 2)
    })
    document.querySelector("#mascota3").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 3)
    })
    document.querySelector("#mascota4").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 4)
    })
    document.querySelector("#mascota5").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 5)
    })
    document.querySelector("#mascota6").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 6)
    })
    document.querySelector("#mascota7").addEventListener('click', function () {
        localStorage.setItem("mascotaId", 7)
    })
}
document.querySelector(".btn-perro").onclick = perro;
document.querySelector(".btn-gato").onclick = gato;

window.addEventListener('load', e => {
    let tipo_mascota = localStorage.getItem("tipoMascota")
    if (tipo_mascota == "perro") {
        perro()
        
    } else {
        gato()
    }
    
})