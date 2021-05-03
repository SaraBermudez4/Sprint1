import usuariosBD from './usuariosBD.js'

function registrarse() {

}
function iniciarSesion() {
    //let datos = document.querySelector(".datos")
    let usuarios = usuariosBD
    //datos.innerHTML = ''
    localStorage.setItem("Usuario", JSON.stringify(usuarios));
    var usuarios2 = []

    usuarios2 = JSON.parse(localStorage.getItem("Usuario"))

    var user = document.getElementById("user");
    var pass = document.getElementById("password");
    var botonEnviar = document.getElementById("formUsuarioInicio");

    botonEnviar.addEventListener('submit', (e) => {
        var usuario = {
            user: user.value,
            pass: pass.value,
        }
        console.log(usuario);
        //e.preventDefault()
        if (usuario.user == usuarios2.usuario && usuario.pass == usuarios2.contrasenia) {
            alert("Inicio exitoso")
        } else {
            alert("Inicio fallido")
        }

    })

    function receptor() {


        //localStorage.setItem("Usuario",JSON.stringify(usuario));
    }
}


function iniciar(event) {
    iniciarSesion()
}
function registro(event) {
    registrarse()
}
document.querySelector(".btn-iniciarSesion").onclick = iniciar;
document.querySelector(".btn-registrarse").onclick = registro;

/*function mostrasDatosUser() {

    let datos = document.querySelector(".datos")
    let usuarios = usuariosBD
    datos.innerHTML = ''
    localStorage.setItem("Usuario",JSON.stringify(usuarios));

    var user = JSON.parse(localStorage.getItem("Usuario"))

    user.forEach(item => {
        datos.innerHTML += `
        <p class="body1Regular nombre">${item.nombre + ' ' + item.apellido}</p>
        <p class="buttom btn-editar">Editar Cuenta</p>
        `
        document.querySelector("#name").value = item.nombre
        document.querySelector("#lastName").value = item.apellido
        document.querySelector("#email").value = item.correo
    });
}

var name = document.getElementById("name");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var botonEnviar = document.getElementById("formUsuario");

botonEnviar.addEventListener('submit', (e) => {
    receptor()
    console.log("dddddd");
    e.preventDefault()
})
function receptor() {
    var usuario = {
        name: name.value,
        lastName: lastName.value,
        email: email.value,
    }

    //localStorage.setItem("Usuario",JSON.stringify(usuario));
}
mostrasDatosUser()*/