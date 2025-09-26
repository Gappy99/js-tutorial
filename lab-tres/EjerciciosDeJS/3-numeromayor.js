/**
 *      EJERCICIO 3
 *      Función que recibe dos números y retorna el mayor.
 *     
 */








function numeroMayor(numero1, numero2) {
  if (numero1 > numero2) {
    console.log("El número mayor es: " + numero1);
    return numero1;
  } else if (numero2 > numero1) {
    console.log("El número mayor es: " + numero2);
    return numero2;
  } else {
    return "los numeros son iguales";
  }
}
console.log(numeroMayor(50, 10))