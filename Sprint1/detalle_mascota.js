import mascotasPerroBD from './mascotasPerroBD.js'
import mascotasGatoBD from './mascotasGatoBD.js'

let id = localStorage.getItem("mascotaId");
mostrarDetalle(id)

function mostrarDetalle(id) {
    let imagenDetalle = document.querySelector(".imagen_mascota")
    let nombreMascota = document.querySelector(".nombre-mascota")
    let personalidades = document.querySelector(".personalidades")
    let historiaMascota = document.querySelector(".historia-mascota")
    let nombreContacto = document.querySelector(".nombre-contacto")
    let razaMascota = document.querySelector(".raza-mascota")
    let lugarMascota = document.querySelector(".lugar-mascota")
    let imgContacto = document.querySelector(".img-usuario")

    let tipo_mascota = localStorage.getItem("tipoMascota")
    if (tipo_mascota == "perro") {
        var mascotaId = mascotasPerroBD[id]
    } else {
        var mascotaId = mascotasGatoBD[id]
    }

    imgContacto.innerHTML = ''
    imagenDetalle.innerHTML = ''
    nombreMascota.innerHTML = ''
    personalidades.innerHTML = ''
    historiaMascota.innerHTML = ''
    nombreContacto.innerHTML = ''
    lugarMascota.innerHTML = ''
    razaMascota.innerHTML = ''

    imagenDetalle.innerHTML += `
        <img src="${mascotaId.imagen}">
    `
    nombreMascota.innerHTML += `
    <p class="Headline1">${mascotaId.nombre}
        <img src="imagenes/Component 5.png">
    </p>
    <a class='flotante-favorito' href='#' ><img src="imagenes/Property 1=No guardado.png" onClick="favorito()"/></a>
    `

    razaMascota.innerHTML += `
        <div class="row">
            <div class="col-6">
                <div class="row">
                    <div class="col-2">
                        <img src="imagenes/Component 1.png">
                    </div>
                    <div class="col-10">
                        <p class=" body2Regular">${mascotaId.raza}</p>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="row">
                    <div class="col-2">
                        <img src="imagenes/edad.png">
                    </div>
                    <div class="col-10">
                        <p class="body2Regular">${mascotaId.edad}</p>
                    </div>
                </div>
            </div>
        </div>
    `

    lugarMascota.innerHTML += `
        <div class="row">
            <div class="col-1">
                <img src="imagenes/Property 1=map-pin.png">
            </div>
            <div class="col-8">
                <p class="body2Regular">${mascotaId.ubicacion}</p>
            </div>
        </div>
    `
    //console.log(mascotaId.personalidad[0])

    for (let i = 0; i < 3; i++) {
        if (mascotaId.personalidad[i] == "Cariñoso") {
            personalidades.innerHTML += `
            <div class="col cards carinoso me-4">
                <div class="col-4">
                    <img class= "imagen-personalidad ps-2" src="imagenes/Property 1=Cariñoso.png">
                </div>
                <div class="col-4">
                    <p class="body1Regular">Cariñoso</p>
                </div>
            </div>`
        } else if (mascotaId.personalidad[i] == "Inquieto") {
            personalidades.innerHTML += `
            <div class="col cards inquieto me-4">
                <div class="col-4">
                    <img class= "imagen-personalidad ps-3" src="imagenes/Property 1=Inquieto.png">
                </div>
                <div class="col-4">
                    <p class="body1Regular ms-2">Inquieto</p>
                </div>
            </div>`
        } else if (mascotaId.personalidad[i] == "Juguetón") {
            personalidades.innerHTML += `
            <div class="col cards jugueton">
                <div class="col-4">
                    <img class= "imagen-personalidad ps-3" src="imagenes/Property 1=Jugueton.png">
                </div>
                <div class="col-4">
                    <p class="body1Regular ms-1">Jugueton</p>
                </div>
            </div>`
        } else if (mascotaId.personalidad[i] == "Tierno") {
            personalidades.innerHTML += `
            <div class="col cards tierno">
                <div class="col-4">
                    <img class= "imagen-personalidad ps-3" src="imagenes/Property 1=Tierno.png">
                </div>
                <div class="col-4">
                    <p class="body1Regular ms-1">Tierno</p>
                </div>
            </div>`
        }
    }

    historiaMascota.innerHTML += `
    <div class="row">
        <div class="col-12 Headline2">
            <p class="Headline2">Historia de ${mascotaId.nombre}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <p class="body1Regular">${mascotaId.historia}</p>
        </div>
    </div>
    `

    nombreContacto.innerHTML += `
    <p class="body2Bold">${mascotaId.usuario}</p>
    `
    imgContacto += `
    <img id="imagen-contacto" src="${mascotaId.imgusuario}">
    `
    //console.log(id)

}

function favorito(event) {
    let tipo_mascota = localStorage.getItem("tipoMascota")
    if (tipo_mascota == "perro") {
        var mascotaId2 = []
        if (localStorage.getItem('mascotaFavorita')) {
            var existe
            mascotaId2 = JSON.parse(localStorage.getItem("mascotaFavorita"))

            existe = mascotaId2.filter((item2) => item2.nombre == mascotasPerroBD[id].nombre)
            console.log(existe)
            if (existe.length > 0) {
                console.log("Existe")
                let listaUnica = [...new Set(mascotaId2)];
                localStorage.removeItem("mascotaFavorita", JSON.stringify(mascotaId2));
                localStorage.setItem("mascotaFavorita", JSON.stringify(listaUnica))
            } else {
                mascotaId2.push(mascotasPerroBD[id])
                localStorage.setItem("mascotaFavorita", JSON.stringify(mascotaId2))
            }
        } else {
            mascotaId2.push(mascotasPerroBD[id])
            localStorage.setItem("mascotaFavorita", JSON.stringify(mascotaId2))
        }

    } else {
        var mascotaId2 = []
        if (localStorage.getItem('mascotaFavorita')) {
            var existe
            mascotaId2 = JSON.parse(localStorage.getItem("mascotaFavorita"))

            existe = mascotaId2.filter((item2) => item2.nombre == mascotasGatoBD[id].nombre)

            if (existe.length > 0) {
                console.log("Existe")
                let listaUnica = [...new Set(mascotaId2)];
                localStorage.removeItem("mascotaFavorita", JSON.stringify(mascotaId2));
                localStorage.setItem("mascotaFavorita", JSON.stringify(listaUnica))
            } else {
                mascotaId2.push(mascotasGatoBD[id])
                localStorage.setItem("mascotaFavorita", JSON.stringify(mascotaId2))
            }
        } else {
            mascotaId2.push(mascotasGatoBD[id])
            localStorage.setItem("mascotaFavorita", JSON.stringify(mascotaId2))
        }
    }


    //localStorage.setItem("mascotaFavorita", id)
}
document.querySelector(".flotante-favorito").onclick = favorito;
