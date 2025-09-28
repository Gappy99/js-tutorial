/**
 *      EJERCICIO 6
 *      Escribe una función que reciba un número del 1 al 7 y retorne el día de la semana correspondiente (ej. 1 = "Lunes").
 *      hecho por Kevin Estuardo Ramirez Aguirre - 2024399
 * 
 */
function diaDeLaSemana(numero) {
  if (numero === 1) {
    return "lunes";
  } else if (numero === 2) {
    return "martes";
  } else if (numero === 3) {
    return "miercoles";
  } else if (numero === 4) {
    return "jueves";
  } else if (numero === 5) {
    return "viernes";
  } else if (numero === 6) {
    return "sabado";
  } else if (numero === 7) {
    return "domingo";
  } else {
    return "no existe ese dia de la semana";
  }
}
console.log(diaDeLaSemana(1))