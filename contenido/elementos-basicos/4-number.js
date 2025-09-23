/*
        TIPO DE DATO number
*/

//1. Number entero y decimal
const enter = 42
const decimal = 3.14

//2. Notacion cientifica
const cientifica = 5e4

//3. Infinito y NaN(no es un numero)
const infinito = Infinity
const noEsNumero = NaN

//4. OPERACIONES ARITMETICAS
//1. suma, resta, multiplicacion y division
const suma = 5 + 6
const resta = 10 - 10
const multiplicacion = 3 * 4
const division = 16/4

//2. modulo y exponenciacion
const modulo = 16 % 8 //0
const exponenciacion = 2**4 //16

// LA PRESICION EN JAVASCRIPT
const resultado = 0.1 + 0.2 //0.3
console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado.toFixed(1) == 0.3) //true