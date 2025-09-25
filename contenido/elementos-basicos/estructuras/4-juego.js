/** 
 * Se solicite un numero a usuario para adivinar un numero secreto
 * que sera generado aleatoriamente entre el rango de 1 y 10
 */

const numeroSecreto = Math.floor(Math.random() * 11 - 1)
const numeroJugador = parseInt(prompt('Adivina el número secreto (entre 1 y 10): '))

console.log(`el número que ingresaste fue: ${numeroJugador}`);

if (numeroJugador === numeroSecreto) {
    console.log('¡Felicidades ganaste, adivinaste el numero secreto');
} else if (numeroJugador < numeroSecreto) {
    console.log('El número secreto es mayor');
} else {
    console.log('El número secreto es menor');
}
