import mascotasPerroBD from "./mascotasPerroBD.js"
import mascotasGatoBD from "./mascotasGatoBD.js"

let idFavorito = localStorage.getItem("mascotaFavorita");
mostrarFavoritos(idFavorito)

function mostrarFavoritos(id){
    let columna1 = document.querySelector(".columna1")
    let columna2 = document.querySelector(".columna2")
    var mascotasPerro = mascotasPerroBD[id]
    var mascotasGato = mascotasGatoBD[id]
    columna1.innerHTML = ''
    columna2.innerHTML = ''

    columna1.innerHTML += `
            <a href="detalle_mascota.html" class="enlace-detalle-mascota">
                <div class="card bg-dark text-white gradiente" id="mascota${mascotasPerro.id}" data-mascota=${mascotasPerro.id}>                
                    <img src="${mascotasPerro.imagen}" class="card-img" alt="...">
                    <div class="card-img-overlay">
                            <h5 class="card-title body2Bold">${mascotasPerro.nombre}</h5>
                            <p class="card-text body2Regular">${mascotasPerro.raza}</p>
                    </div>
                </div>
            </a>`
    /*mascotasPerro.forEach(item => {
        if (item.id < 2) {
            
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
        }
    });
    mascotasGato.forEach(item => {
        if (item.id < 2) {
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
        }
    });*/
}

