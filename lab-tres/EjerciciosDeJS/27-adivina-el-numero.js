/**
 *      EJERCICIO 27
 * Escribe un programa que genere un número aleatorio entre 1 y 100, y pida al usuario que lo adivine, dándole pistas de si su intento es mayor o menor.
 *      hecho por Kevin Estuardo Ramirez Aguirre - 2024399
 * 
 */
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const numeroJugador = parseInt(prompt('Adivina el numero secreto (entre 1 y 100): '));

console.log(`El numero que ingresaste fue: ${numeroJugador}`);

if (numeroJugador === numeroSecreto) {
    console.log('¡Felicidades ganaste, adivinaste el numero');
} else if (numeroJugador < numeroSecreto) {
    console.log('El numero secreto es mayor');
} else {
    console.log('El numero secreto es menor');
}