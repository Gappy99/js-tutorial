/**
 * 
 * 
 * 
 * 
 * 
 *              FUNCIONES -> js -> tipos de datos
 * 
 * 
 * 
 *      
 */

//Como duenos de una empresa necesitamos calcular el descuento de productos

function calcularDescuento(precio, porcentajeDescuento) {
    const descuento = (precio * porcentajeDescuento)/100;
    const precioConDescuento = precio - descuento;
    return precioConDescuento;
}

const precioOriginal = 1000;
const precioConDescuento = 15;
const precioFinal = calcularDescuento(precioOriginal, precioConDescuento);

console.log("Precio Original Q." + precioOriginal);
console.log("Descuento Q." + precioConDescuento + "%");
console.log("Precio con descuento Q." + precioFinal);