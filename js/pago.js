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
document.addEventListener('DOMContentLoaded', mostrarDetallesCarro);