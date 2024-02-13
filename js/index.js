//INICIAR SESION
/*let usuario = "franco"
let contrasenia = "entrar"
while (true) {
  usuario = prompt("ingrese su usuario");
  contrasenia = prompt("ingrese su contraseña");
  if (usuario == "franco" && contrasenia == "entrar") {
    break;
  }
  else {
    console.log("usuario y/o contraseña erroneos, ingrese nuevamente")
    continue;
  }
}
console.log(alert("Bienvenido franco"))
*/
//ARRAY de productos



//CALCULAR IVA CON LA CANTIDAD DE PRODUCTOS QUE DESEA EL CLIENTE
/*
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

let cuotas = 0;
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


while (true) {
  cuotas = prompt("en cuantas cuotas? solo 1, 3 y 6");
  if (cuotas === "3" || cuotas === "6" || cuotas === "1") {
    break;
  }
  else {
    console.log("el dato no es valido");
    continue;
  }
}


if (cuotas == "3") {
  console.log("el precio a pagar es de $" + (parseInt(+final * 1.10)) + "(10% de interes con el medio de pago seleccionado)");
}
else if (cuotas == "6") {
  console.log("el precio a pagar es de $" + (parseInt(+final * 1.25)) + "(25% de interes con el medio de pago seleccionado)");
}
else if (cuotas == "1") {
  console.log("el precio a pagar es de $" + final + "" + "sin intereses");
}
else { console.log("numero de cuotas invalido"); }
*/

//SEGUNDA PRE ENTREGA
class Productos {
  constructor(imagen, titulo, descripcion, precio, stock, alt) {
    this.imagen = imagen;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.precio = parseFloat(precio);
    this.stock = stock;
    this.alt = alt;
    this.precioConIva = function () {
      let final = this.precio * 1.21;
      return "$" + final;
    }
  }
  vender() {
    this.stock--;
  }
}


//Ingreso de objetos en un Array
const PRODUCTOS = [
  mateRojo = new Productos(src = "../img/MateRojo.jpg", "Mate Rojo", "Mate color rojo con bombilla saca yerba.", 2040, 3, "Mate color rojo con bombilla saca yerba."),
  billeteraMarron = new Productos("../img/Billetera1.jpg", "Billetera Marron", "Billetera marron de cuero.", 4000, 7, "Billetera marron de cuero."),
  billeteraNegra = new Productos("../img/Billetera2.jpg", "Billetera Negra", "Billetera de cuero negra.", 3000, 9, "Billetera de cuero negra."),
  camionJuguete = new Productos("../img/camion.webp", "Camion", "Camion de juguete", 2550, 10, "Camion de juguete"),
  carteraChimola = new Productos("../img/CarteraVerdeCuero.jpg", "Chimola", "Cartera color verde de cuero, marca Chimola", 6200, 3, "Cartera color verde de cuero, marca Chimola"),
  dinosaurio = new Productos("../img/dino.webp", "Dinosaurio", "Dinosaurio de juguete", 2000, 11, "Dinosaurio de juguete"),
  cartucheraFooty = new Productos("../img/CartucheraFooty1Piso.jpg", "Footy", "Cartuchera infantil de 1 piso", 4000, 20, "Cartuchera infantil de 1 piso"),
  esmalteAurora = new Productos("../img/esmalteaurora.png", "Esmalte Disney", "Esmalte de aurora", 1340, 3, "Esmalte de aurora"),
  cartucheraGamer = new Productos("../img/CartucheraGamer2cierres.png", "Cartuchera Gamer", "Cartuchera infantil", 3240, 11, "Cartuchera infantil"),
  luncheraMickey = new Productos("../img/LuncheraMickeypng.jpg", "Lunchera de Mickey Mouse", "Lunchera infantil de Mickey Mouse.", 5120, 2, "Lunchera infantil de Mickey Mouse."),
  pawPatrol = new Productos("../img/jabonpawpatrol.jpg", "Jabon de Paw Patrol", "Jabon liquido de Paw Patrol", 2100, 5, "Jabon liquido de Paw Patrol"),
  setComida = new Productos("../img/JuegoComidax5.jpg", "Set de comida", "Set de Comida infantil para jugar", 3310, 5, "Set de Comida infantil para jugar")
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
    return item.titulo.includes(letra)
  })
}

console.log(search("Lunchera"));

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
                        <h3 class="card-precio-desc">$ ${PRODUCTOS.precio}</h3>
                    </div>
                    <button type="button" class="card-boton">
                        Comprar
                    </button>
                </div>
    `
    contenedorCards.appendChild(card);
  });
}

agregarCards(PRODUCTOS);






