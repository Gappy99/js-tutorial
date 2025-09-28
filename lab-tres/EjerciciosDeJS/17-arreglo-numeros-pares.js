/**
 *      17. Escribe un programa que cuente cuántos números pares hay en un
                                                                arreglo dado.
 *      hecho por Kevin Estuardo Ramirez Aguirre - 2024399
 * 
 */


function contarNumerosPares(arreglo) {
  let contador = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
      contador++;
    }
  }
  return contador;
}
const numeros = [1, 2, 5, 8, 10];
console.log("cantidad de numeros pares:", contarNumerosPares(numeros));