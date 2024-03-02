class Usuarios {
    constructor(usuario, contrasenia) {
        this.usuario = usuario;
        this.contrasenia = contrasenia;
    }
}

const USUARIOS = [
    franco = new Usuarios("franco", "entrar"),
    mica = new Usuarios("mica", "mika")
]
console.log(USUARIOS);
/*
let user;
let pw;
*/
let verificar;

const USER = document.getElementById("inicio-usuario");
const PW = document.getElementById("inicio-pw")
document.getElementById("validar").addEventListener('click', function IniciarSesion(event) {
    event.preventDefault();
let user = USER.value;
let pw = PW.value;
    verificar = !!USUARIOS.find(persona => persona.usuario === user && persona.contrasenia === pw);
    if (verificar) {
        console.log("Bienvenido/a" + " " + user);
        localStorage.setItem("logCorrecto", true);
        window.location.href = "/index.html";
    }
    else {
        const ERROR=document.getElementById("error");
        ERROR.textContent= "Usuario y/o contraseña erroneos, por favor, reintente"

    }

}
)
window.addEventListener("load", function () {
    if (localStorage.getItem("logCorrecto")) {
        window.location.href = "/index.html";
    }
})

const Swal = require('sweetalert2')