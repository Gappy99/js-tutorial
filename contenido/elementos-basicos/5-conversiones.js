/*
    CONVERSIONES -> EXPLICITAS e IMPLICITAS
*/

// Conversion Explicit Type Casting
const string = '54'
const integer = parseInt(string)
//console.log(typeof string)
//console.log(typeof integer)


const float = parseFloat("3.14")
//console.log(typeof float)//number

const binario = '1010'
const decimal = parseInt(binario, 2)
console.log(decimal)

const hexa = 'CAFE'
const decimalhex = parseInt(hexa, 16)
console.log(decimalhex)

//Conversino Implicit Type Casting
const resultado = '5' + 3 //8
console.log(resultado)

const sumaConBoolean = '3' + true
console.log(sumaConBoolean)

const sumaConNumero = 2 + true
console.log(sumaConNumero) //3

const valorString = '20'
const valorNumber = 10
const valorBoolean = true
console.log('----------------------------')
console.log(valorString + valorString)
console.log(valorString + valorNumber)
console.log(valorString + valorBoolean) 
console.log('----------------------------')
console.log(valorNumber + valorString)
console.log(valorNumber + valorNumber)
console.log(valorNumber + valorBoolean)
console.log('----------------------------')
console.log(valorBoolean + valorString)
console.log(valorBoolean + valorNumber)
console.log(valorBoolean + valorBoolean)