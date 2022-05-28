// Ingresa el nombre
let nombreBoleto = prompt("Escriba su nombre a continuación: ");
// Comprobación
if (nombreBoleto == " ") {
  alert("No se ingresó ningún dato válido. Vuelva a intentarlo.");
} else {
  alert("Nombre de usuario ingresado: " + nombreBoleto);
}

// Ingresa el número de boleto
let numeroBoleto = prompt("Escriba los 6 números del boleto sin guiones.");
// Comprobación
while (numeroBoleto.length != 6) {
  alert(
    "No se ingresó ningún número o es un formato inválido. Vuelva a intentarlo."
  );
  numeroBoleto = prompt("Vuelva a ingresar los 6 números del boleto:");
}
alert("Número de boleto introducido: " + numeroBoleto);

// Salida
let boletoGanador = 159753;
if ((numeroBoleto == boletoGanador)) {
  alert(
    "El usuario " +
      nombreBoleto +
      " con número de boleto " +
      numeroBoleto +
      " es ganador del pozo acumulado de la fecha."
  );
} else {
  alert(
    "Usted no ha obtenido ningún premio. Vuelva a intentarlo la semana próxima."
  );
}