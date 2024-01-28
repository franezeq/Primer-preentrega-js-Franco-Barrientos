//INICIAR SESION
let usuario = "franco"
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
  cuotas = prompt("en cuantas cuotas? solo 3 y 6");
  if (cuotas == "3" || cuotas == "6" || cuotas == "1") {
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
  console.log("el precio a pagar es de $" + final+""+"sin intereses");
}
else { console.log("numero de cuotas invalido"); }

