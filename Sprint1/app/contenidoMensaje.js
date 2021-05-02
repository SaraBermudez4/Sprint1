import mensajesBD from './mensajesBD.js'

let id = localStorage.getItem("contactoId")

mostrarMensajes(id)
function mostrarMensajes(id) {
    let datosContacto = document.querySelector(".contacto")
    let contenidoMensaje = document.querySelector(".contenido-mensaje")

    var mensajes = mensajesBD[id]
    console.log(mensajes)
    datosContacto.innerHTML = ''
    contenidoMensaje.innerHTML = ''

    datosContacto.innerHTML += `
        <div class="row">
            <div class="col mt-3 imagen-contacto mb-3">
                <img src="${mensajes.imagen}">
                <div class="col mt-1">
                    <p class="body1Bold">${mensajes.usuario}</p>
                </div>
                <a class='flotante-atras' href='mensajes.html'><img src="imagenes/back.png" /></a>  
            </div>
        </div>
        `
    for (let i = 0; i < mensajes.enviado.length; i++) {
        contenidoMensaje.innerHTML += `
            <p class="body2Regular hora-enviado">${mensajes.hora_enviado[i]}</p>
            <div class="mensaje-enviado row">
                <p class="cuerpo-mensaje">${mensajes.enviado[i]}</p>
            </div>
            <p class="body2Regular hora-recibido">${mensajes.hora_recibido[i]}</p>
            <div class="mensaje-recibido row">
                <p class="cuerpo-mensaje">${mensajes.recibido[i]}</p>
            </div>
        `
    }
}

var hoy = new Date()
var hora = hoy.getHours() + ':' + hoy.getMinutes()
console.log(hora)