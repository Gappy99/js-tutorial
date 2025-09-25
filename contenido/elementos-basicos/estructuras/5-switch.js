/**
 * 
 * estructura switch
 */

let comprar = "Uvas";

switch (comprar) {
    case "Naranjas":
        console.log('las naranjas estan a Q10 la mano');
        break;
    case "Manzanas":
        console.log('las manzanas estan a Q5 la unidad');
        break;
    case "Platanos":
        console.log('los platanos estan a Q12 la docena');
        break;
    default:
        console.log(`lo sentimos, no contamos con ${comprar}`) 
        break;
}