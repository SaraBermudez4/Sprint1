import mascotasPerroBD from './mascotasPerroBD.js'
import mascotasGatoBD from './mascotasGatoBD.js'

let id = localStorage.getItem("mascotaId");
mostrarDetalle(id)

function mostrarDetalle(id) {
    let contacto = document.querySelector(".imagen-contacto")

    let tipo_mascota = localStorage.getItem("tipoMascota")
    if (tipo_mascota == "perro") {
        var mascotaId = mascotasPerroBD[id]
    } else {
        var mascotaId = mascotasGatoBD[id]
    }

    contacto.innerHTML = ''

    contacto.innerHTML += `
    <img src="${mascotaId.imgusuario}">
    <div class="col mt-1">
        <p class="body1Bold">${mascotaId.usuario}</p>
    </div>
    <a class='flotante-atras' href='detalle_mascota.html' ><img src="https://i.ibb.co/gwWm0MX/back.png"/></a>
    `

}