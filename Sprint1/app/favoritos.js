import mascotasPerroBD from "./mascotasPerroBD.js"
import mascotasGatoBD from "./mascotasGatoBD.js"

let mascota_favorita = []
mascota_favorita = JSON.parse(localStorage.getItem("mascotaFavorita"))
mostrarFavoritos(mascota_favorita)

function mostrarFavoritos(fav) {
    let columna1 = document.querySelector(".columna1")
    let columna2 = document.querySelector(".columna2")
    //var mascotasPerro = mascotasPerroBD[id]
    //var mascotasGato = mascotasGatoBD[id]
    columna1.innerHTML = ''
    columna2.innerHTML = ''
    var numCol = 1
    fav.forEach(item => {
        
        if (numCol == 1) {
            columna1.innerHTML += `
            <a href="detalle_mascota.html" class="enlace-detalle-mascota">
                <div class="card bg-dark text-white gradiente" id="mascota${item.id}" data-mascota=${item.id}>                
                    <img src="${item.imagen}" class="card-img" alt="...">
                    <div class="card-img-overlay">
                            <h5 class="card-title body2Bold">${item.nombre}</h5>
                            <p class="card-text body2Regular">${item.raza}</p>
                    </div>
                </div>
            </a>`
            numCol = 2
        }
        else {
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
            numCol = 1
        }
    });
}

window.addEventListener('load', e => {
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
})