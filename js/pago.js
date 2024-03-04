function RecuperarCarro() {
    return JSON.parse(localStorage.getItem("carrostring")) || [];
}

// Función para mostrar el carrito y calcular el total
function mostrarDetallesCarro() {
    const miCarrito = RecuperarCarro();
    const contenedorDetalles = document.getElementById('detalles-carrito');
    let total = 0;

    miCarrito.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto-en-carrito');
        // Crear elemento de imagen y establecer su src y alt
        const imagen = document.createElement('img');
        imagen.src = producto.imagen;
        imagen.alt = producto.alt;
        imagen.classList.add('imagen-producto-en-carrito');

        const detalles = document.createElement('p');
        detalles.textContent = `${producto.titulo} - Cantidad: ${producto.cantidad} - Precio: $${producto.precioConIva}`;

        // Agregar imagen y la lista del carro
        productoDiv.appendChild(imagen);
        productoDiv.appendChild(detalles);

        contenedorDetalles.appendChild(productoDiv);

        total += producto.precioConIva * producto.cantidad;
    });

    document.getElementById('total-a-pagar').textContent = total.toFixed(2);
}

// Llamar a la función al cargar la página
document.addEventListener('DOMContentLoaded', mostrarDetallesCarro());

//Finalizar compra (sweetAlert2)
const FINALIZARSWAL = Swal.mixin({
    title: "¿Estás seguro de que queres finalizar la compra?",
    toast: true,
    position: "center",
    showConfirmButton: true,
    showCancelButton: true,

});
const REVISATUSDATOS = Swal.mixin({
    title: "Datos incorrectos",
    toast: true,
    position: "center",
    showConfirmButton: true,

});
//CERRAR SESION
document.getElementById("cerrar-sesion").addEventListener("click", function CerrarSesion() {
    localStorage.removeItem("logCorrecto");

    window.location.href = "/html/inicio.html";
});



//VALIDAR FORMULARIO ANTES DE ENVIAR

document.getElementById('formulario-pago').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que se mande automaticamente

    // llamar a los formularios
    let nombre = document.getElementById('datos-nombre').value;
    let direccion = document.getElementById('datos-direccion').value;
    let telefono = document.getElementById('datos-telefono').value;
    let tarjeta = document.getElementById("num-tarjeta").value;


    // VALIDAR
    var formularioEsValido = validarFormato(nombre, direccion, telefono, tarjeta);


    // si es true muestra alerta para confirmar compra
    if (formularioEsValido) {
        const FINALIZAR = document.getElementById("finalizar");
        FINALIZAR.addEventListener("click", () => {
            FINALIZARSWAL.fire();
            const OK = document.querySelector(".swal2-confirm");

            OK.addEventListener("click", () => {
                window.location.href = "/index.html";
                localStorage.setItem("CompraRealizada", "si");
            })
        })

    } else //si es false
    {
        const FINALIZAR = document.getElementById("finalizar");
        FINALIZAR.addEventListener("click", () => {
            REVISATUSDATOS.fire();
        })
    };
});
function validarFormato(nombre, direccion, telefono, tarjeta) {
//revisar las condiciones
    if (nombre.length < 4 || tarjeta.length != 16 || direccion.length < 4 || telefono.length < 5 ) {
        return false; // devuelve false si no se cumple
    } else {
        return true;
        // devuelve true
    }
};
