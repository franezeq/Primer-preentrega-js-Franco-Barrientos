
//ARRAY de USUARIOS (AGREGADO PARA LA SEGUNDA ENTREGA)
/*class Usuarios {
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
//INICIAR SESION, VERIFICAR ARRAY Y RETORNAR TRUE or FALSE (AGREGADO PARA LA SEGUNDA ENTREGA)


*/
/*let user;
let pw;
let verificar;
const SESION = document.getElementById("iniciar-sesion");
SESION.addEventListener('click', function IniciarSesion() {

  while (true) {
    user = prompt("ingrese su usuario");
    pw = prompt("ingrese su contraseña");
    verificar = !!USUARIOS.find(persona => persona.usuario === user && persona.contrasenia === pw);
    if (verificar) {
      console.log("Bienvenido/a" + " " + user);
      SESION.textContent= "Bienvenido/a "+user;
      localStorage.setItem("logCorrecto", true);
      return user;
    }
    else {
      console.log("usuario y/o contraseña erroneos, ingrese nuevamente")
      continue;
    }
  }
}
)
window.addEventListener("load", function(){
  if(localStorage.getItem("logCorrecto")){
  window.location.href = "index.html"
}
})
/*

//CALCULAR IVA CON LA CANTIDAD DE PRODUCTOS QUE DESEA EL CLIENTE

let cantProductos = 0;
while (true) {
  cantProductos = prompt("¿Cuantos productos encargó?");
  if (cantProductos > 0) {
    break;
  }
  else {
    console.log("el dato no es valido");
    continue;
  }
}
let precioProductos = 1530.3;
const ivaAgregado = 1.21;

function productosIva(cantProductos) {
  if (cantProductos > 0) {
    return (precioProductos * ivaAgregado) * cantProductos;
  }
  else {
    console.log("Usted no cargo ningun producto");
  }
}

let total = (productosIva(cantProductos));

//Agregar mas productos
let agregar = prompt("Desea agregar mas productos? si o no");
function conMas() {
  if (agregar == "si" || agregar == "SI") {
    let cuantos = prompt("Cuanto desea?");
    return (total + ((precioProductos * ivaAgregado) * cuantos));
  }

  else {
    return (total);
  }

}
let final = conMas();
console.log("el precio final a pagar es de $" + parseInt(final));

//TARJETA DE CREDITO


while (true) {
  let tarjeta = prompt("ingrese que tarjeta usaria (VISA O MASTERCARD)");
  if (tarjeta == "visa" || tarjeta == "mastercard") {
    break;
  }
  else {
    console.log("el dato no es valido");
    continue;
  }
}
let cuotas = 0;
function tarjetas() {
  cuotas = prompt("en cuantas cuotas? solo 1, 3 y 6");
  switch (cuotas) {
    case "1":
      console.log("el precio a pagar es de $" + final + "" + "sin intereses");
      break;
    case "3":
      console.log("el precio a pagar es de $" + (parseInt(+final * 1.10)) + "(10% de interes con el medio de pago seleccionado)");
      break;
    case "6":
      console.log("el precio a pagar es de $" + (parseInt(+final * 1.25)) + "(25% de interes con el medio de pago seleccionado)");
      break;
    default:
      console.log("numero de cuotas invalido, vuelva a intentar");
      tarjetas();
      break;
  }
}
tarjetas();
if (cuotas == false) {
  tarjetas();
}

*/
//SEGUNDA PRE ENTREGA
let conIva;
let precioConIva = 0;
class Productos {
  constructor(id, imagen, titulo, descripcion, precio, stock, alt, conIva) {
    this.id = id;
    this.imagen = imagen;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.precio = parseFloat(precio);
    this.stock = stock;
    this.alt = alt;
    this.precioConIva = function () {
      return parseInt(this.precio * 1.21);

    }
  }
  vender() {
    this.stock--;
  }
}


//Ingreso de objetos en un Array
const PRODUCTOS = [
  mateRojo = new Productos(1, src = "../img/MateRojo.jpg", "Mate Rojo", "Mate color rojo con bombilla saca yerba.", 2040, 3, "Mate color rojo con bombilla saca yerba."),
  billeteraMarron = new Productos(2, src = "../img/Billetera1.jpg", "Billetera Marron", "Billetera marron de cuero.", 4000, 7, "Billetera marron de cuero."),
  billeteraNegra = new Productos(3, "../img/Billetera2.jpg", "Billetera Negra", "Billetera de cuero negra.", 3000, 9, "Billetera de cuero negra."),
  camionJuguete = new Productos(4, "../img/camion.webp", "Camion", "Camion de juguete", 2550, 10, "Camion de juguete"),
  carteraChimola = new Productos(5, "../img/CarteraVerdeCuero.jpg", "Chimola", "Cartera color verde de cuero, marca Chimola", 6200, 3, "Cartera color verde de cuero, marca Chimola"),
  dinosaurio = new Productos(6, "../img/dino.webp", "Dinosaurio", "Dinosaurio de juguete", 2000, 11, "Dinosaurio de juguete"),
  cartucheraFooty = new Productos(7, "../img/CartucheraFooty1Piso.jpg", "Footy", "Cartuchera infantil de 1 piso", 4000, 20, "Cartuchera infantil de 1 piso"),
  esmalteAurora = new Productos(8, "../img/esmalteaurora.png", "Esmalte Disney", "Esmalte de aurora", 1340, 3, "Esmalte de aurora"),
  cartucheraGamer = new Productos(9, "../img/CartucheraGamer2cierres.png", "Cartuchera Gamer", "Cartuchera infantil", 3240, 11, "Cartuchera infantil"),
  luncheraMickey = new Productos(10, "../img/LuncheraMickeypng.jpg", "Lunchera de Mickey Mouse", "Lunchera infantil de Mickey Mouse.", 5120, 2, "Lunchera infantil de Mickey Mouse."),
  pawPatrol = new Productos(11, "../img/jabonpawpatrol.jpg", "Jabon de Paw Patrol", "Jabon liquido de Paw Patrol", 2100, 5, "Jabon liquido de Paw Patrol"),
  setComida = new Productos(12, "../img/JuegoComidax5.jpg", "Set de comida", "Set de Comida infantil para jugar", 3310, 5, "Set de Comida infantil para jugar")
]




//prueba de funcion Vender y funcion PrecioConIva


console.log(dinosaurio);
dinosaurio.vender();
console.log(dinosaurio.precioConIva());
console.log(dinosaurio);  //Stock billetera con 1 unidad vendida

console.log(billeteraMarron.precioConIva());
console.log(billeteraMarron);
console.log(mateRojo);
mateRojo.vender();
console.log(mateRojo); //Stock Mate Rojo con 1 unidad venidida



// FILTRO DE BUSQUEDA PARA INPUT

const search = (letra) => {
  return PRODUCTOS.filter(item => {
    return item.titulo.toLowerCase().includes(letra.toLowerCase())
  })


}

const buscadorFuncional = document.getElementById("buscar");
buscadorFuncional.addEventListener("input", () => console.log(search(buscadorFuncional.value)));

// ORDENAR DE MAYOR A MENOR PARA FILTRO DE BUSQUEDA
PRODUCTOS.sort(function (a, b) {
  return b.precio - a.precio;
})

console.log(PRODUCTOS);

//Ordenar alfabeticamente
/*PRODUCTOS.sort(function (a, b) {
  const nombreA = a.titulo.toLocaleLowerCase();
  const nombreB = b.titulo.toLowerCase();

  if (nombreA < nombreB) {
    return -1
  }
  if (nombreA > nombreB) {
    return 1
  }
  return 0;
})
console.log(PRODUCTOS);
*/




const miCarrito = [];
const contenedorElementosCarrito = document.getElementById('mi-carrito');
const totalSpan = document.getElementById('total');


//CARDS
const contenedorCards = document.getElementById("productos-container");
function agregarCards(products) {
  products.forEach(PRODUCTOS => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
 <img src="${PRODUCTOS.imagen}" class="card-img" alt="${PRODUCTOS.alt}">
                <div class="card-body">
                    <h4 class="card-title">${PRODUCTOS.titulo}</h4>
                    <p class="card-text">${PRODUCTOS.descripcion}</p>
                    <div class="card-desc">
                        <h3 class="card-precio-desc">$${PRODUCTOS.precioConIva()}</h3>
                    </div>
                    <button type="button" class="card-boton btn-comprar botones" data-id="${PRODUCTOS.id}">
                       Agregar
                    </button>
                </div>
    `

    contenedorCards.appendChild(card);
  });
}

//agregar al carro
function AgregarAlCarro(idProducto) {
  const itemExistente = miCarrito.find(item => item.id === idProducto);
  if (itemExistente) {
    itemExistente.cantidad++
  }
  else {
    const producto = PRODUCTOS.find(p => p.id === idProducto);
    if (producto) {
      miCarrito.push({ ...producto, cantidad: 1 })
    }
  }
  mostrarCarro();
}

//Eliminar del carro
function EliminarDelCarro(idProducto) {
  const indice = miCarrito.findIndex(item => item.id === idProducto);
  if (indice !== -1) {
    miCarrito.splice(indice, 1)
    mostrarCarro();
  }
}

function mostrarCarro() {
  contenedorElementosCarrito.innerHTML = '';
  let precioTotal = 0;

  const contenedorCarrito = document.getElementById('carrito');
  if (miCarrito.length === 0) {
    contenedorCarrito.style.display = 'none';
  } else {
    contenedorCarrito.style.display = "flex";
  }
  miCarrito.forEach(item => {
    const li = document.createElement('li');
    li.classList.add("texto-carro");
    li.textContent = `
    ${item.titulo} x ${item.cantidad} - $${item.precioConIva() * item.cantidad};
    `
    const btnEliminar = document.createElement('button');
    btnEliminar.classList.add("btn-eliminar");
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.addEventListener('click', () => EliminarDelCarro(item.id))
    li.appendChild(btnEliminar);
    contenedorElementosCarrito.appendChild(li);
    precioTotal += item.precioConIva() * item.cantidad;
  })
  totalSpan.textContent = precioTotal;
}

let confirmar;
function realizarCompra() {
  confirmar = confirm("Esta seguro de realizar una compra por $" + totalSpan.textContent + " ?");
  total = totalSpan.textContent;
  miCarrito.length = 0;
  mostrarCarro();
  //REDIRECCIONA A PAGINA DE PAGO
  if (confirmar == true && total > 0) {
    window.location.href = "/html/pago.html";
  }
}
agregarCards(PRODUCTOS);
document.getElementById('btn-comprar').addEventListener('click', realizarCompra);


contenedorCards.addEventListener('click', function (evento) {
  if (evento.target.classList.contains('btn-comprar')) {
    const idProducto = parseInt(evento.target.getAttribute('data-id'));
    AgregarAlCarro(idProducto);
  }

})

//Cerrar sesion
document.getElementById("cerrar-sesion").addEventListener("click", function CerrarSesion(){
  localStorage.removeItem("logCorrecto");
    
  window.location.href = "/html/inicio.html";
});