// Generador del boleto
let max = 999;
let min = 1;
let boletoGanador = Math.random() * (max - min) + min;
boletoGanador = parseInt(boletoGanador);

// Ingresa el nombre
let nombreBoleto = prompt("Escriba su nombre a continuación: ");
// Comprobación
if (nombreBoleto == " ") {
  alert("No se ingresó ningún dato válido. Vuelva a intentarlo.");
} else {
  alert("Nombre de usuario ingresado: " + nombreBoleto);
}

// Ingresa el número de boleto
while (true) {
  let numeroBoleto = prompt("Escriba su número de la suerte de 3 dígitos: ");
  if (numeroBoleto == boletoGanador) {
    alert("Felicitaciones "+nombreBoleto+". Ganaste!"+"\nNos comunicaremos contigo en el transcurso del día."+"\nHasta pronto!");
    break;
  } else if (numeroBoleto == 0) {
    alert("Has salido correctamente. Hasta pronto!");
    break;
  } else if (numeroBoleto < boletoGanador) {
    alert(
      "El número que has ingresado es menor que el del boleto ganador. Vuelve a intentarlo o presiona 0 para salir:"
    );
  } else if (numeroBoleto > boletoGanador) {
    alert(
      "El número que has ingresado es mayor que el del boleto ganador. Vuelve a intentarlo o presiona 0 para salir:"
    );
  }
}

alert("Número de boleto introducido: " + numeroBoleto);
