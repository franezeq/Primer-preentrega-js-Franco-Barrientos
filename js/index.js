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
  constructor(titulo, precio, stock) {
    this.titulo = titulo;
    this.precio = parseFloat(precio);
    this.stock = stock;
    this.precioConIva = function () {
      let final = this.precio * 1.21;
      return "$" + final;
    }
  }
  vender() {
    this.stock--;
  }
}
const mateRojo = new Productos("Mate Rojo", 2040, 3);
const billeteraMarron = new Productos("Billetera Marron", 4000, 7);
const billeteraNegra = new Productos("Billetera Negra", 3000, 9);
const camionJuguete = new Productos("Camion", 2550, 10);
const carteraChimola = new Productos("Chimola", 6200, 3);
const dinosaurio = new Productos("Dinosaurio", 2000, 11);
const cartucheraFooty = new Productos("Footy", 4000, 20);
const esmalteAurora = new Productos("Esmalte Disney", 2040, 3);
const cartucheraGamer = new Productos("Cartuchera Gamer", 3240, 11);
const luncheraMickey = new Productos("Lunchera de Mickey Mouse", 5120, 2);
const pawPatrol = new Productos("Jabon de Paw Patrol", 2100, 5);





//ARRAY que contiene los Objetos
const PRODUCTOS = [mateRojo,
  billeteraMarron,
  billeteraNegra,
  camionJuguete,
  carteraChimola,
  dinosaurio,
  cartucheraFooty,
  esmalteAurora,
  cartucheraGamer,
  luncheraMickey,
  pawPatrol];

console.log(billeteraMarron);
billeteraMarron.vender();
billeteraMarron.precioConIva();
console.log(billeteraMarron);  //Stock billetera con 1 unidad vendida

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
PRODUCTOS.sort(function (a, b) {
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


