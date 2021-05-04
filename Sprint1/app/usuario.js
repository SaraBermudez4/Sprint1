import usuariosBD from './usuariosBD.js'

/*function registrarse() {

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
*/
function mostrasDatosUser() {

    if (localStorage.getItem('Usuario')) {
        var user = JSON.parse(localStorage.getItem("Usuario"))
        let datos = document.querySelector(".datos")
        datos.innerHTML = ''
        datos.innerHTML += `
            <p class="body1Regular nombre">${user[0].nombre + ' ' + user[0].apellido}</p>
            <p class="buttom btn-editar">Editar Cuenta</p>
            `
        document.querySelector("#name").value = user[0].nombre
        document.querySelector("#lastName").value = user[0].apellido
        document.querySelector("#email").value = user[0].correo

        var name = document.getElementById("name");
        var lastName = document.getElementById("lastName");
        var email = document.getElementById("email");
        var botonEnviar = document.getElementById("formUsuario");

        botonEnviar.addEventListener('submit', (e) => {

            e.preventDefault()
            var usuario = []
            usuario[0] = {
                nombre: name.value,
                apellido: lastName.value,
                correo: email.value,
            }
            localStorage.setItem("Usuario", JSON.stringify(usuario));
        })
    } else {
        let datos = document.querySelector(".datos")
        let usuarios = usuariosBD
        datos.innerHTML = ''
        datos.innerHTML += `
            <p class="body1Regular nombre">${usuarios[0].nombre + ' ' + usuarios[0].apellido}</p>
            <p class="buttom btn-editar">Editar Cuenta</p>
            `
        document.querySelector("#name").value = usuarios[0].nombre
        document.querySelector("#lastName").value = usuarios[0].apellido
        document.querySelector("#email").value = usuarios[0].correo

        var name = document.getElementById("name");
        var lastName = document.getElementById("lastName");
        var email = document.getElementById("email");
        var botonEnviar = document.getElementById("formUsuario");

        localStorage.setItem("Usuario", JSON.stringify(usuarios));

        botonEnviar.addEventListener('submit', (e) => {

            e.preventDefault()
            var usuario = []
            usuario[0] = {
                nombre: name.value,
                apellido: lastName.value,
                correo: email.value,
            }
            localStorage.setItem("Usuario", JSON.stringify(usuario));
        })
    }
}
mostrasDatosUser()