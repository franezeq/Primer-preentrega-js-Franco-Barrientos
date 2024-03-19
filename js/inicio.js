//ASINCRONIA PARA USUARIOS
let validacion;
let verificar;
const getUsuarios = async () => {
  const respuesta = await fetch("/usuarios.json");
  validacion = await respuesta.json();








window.addEventListener("load", function () {
    if (localStorage.getItem("logCorrecto")) {
        window.location.href = "/index.html";
    }
})


async function MostrarAlerta() {
    const { value: formValues } = await Swal.fire({
        title: "Iniciar sesion",
        html: `
      <input placeholder="Usuario" id="swal-input1" class="swal2-input">
      <input type="password" id="swal-input2" class="swal2-input" placeholder="Contraseña">
    `,
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById("swal-input1").value,
                document.getElementById("swal-input2").value
            ];
        }
    });
    if (formValues) {
        const verificar = validacion.some(persona => persona.usuario === formValues[0] && persona.contrasenia === formValues[1]); //VALIDAR DATOS DE INICIO
        if (verificar) {
            console.log("Bienvenido/a " + formValues[0]);
            localStorage.setItem("logCorrecto", true);
            window.location.href = "/index.html";
        } else {
            Swal.fire({ //CARTEL DE ERROR
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario y/o contraseña erróneos, por favor, reintente.'
            });
        }
    }
}
const INICIAR = document.getElementById("iniciar-sesion");
INICIAR.addEventListener("click", MostrarAlerta);
}
getUsuarios();