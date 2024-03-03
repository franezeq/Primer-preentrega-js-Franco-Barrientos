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

        total +=  producto.precioConIva * producto.cantidad;
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
const FINALIZAR= document.getElementById("finalizar");
FINALIZAR.addEventListener("click",()=>{
    FINALIZARSWAL.fire();
    const OK= document.querySelector(".swal2-confirm");

    OK.addEventListener("click",()=>{
        window.location.href = "/index.html";
        localStorage.setItem("CompraRealizada", "si");
    })
})
//CERRAR SESION
document.getElementById("cerrar-sesion").addEventListener("click", function CerrarSesion() {
    localStorage.removeItem("logCorrecto");
  
    window.location.href = "/html/inicio.html";
  });
