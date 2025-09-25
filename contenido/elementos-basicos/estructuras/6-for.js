/**
 * 
 *      CICLO FOR ->
 * 
 */

/**
 * for (let i = 0; i < array.length; i++) {
    const element = array[i];
}*/ 


let lista = ["comer", "dormir", "code", "repetir"];

/**for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}*/

//FOR-OF -------------------------> FOR EACH

let canasta = ["manzanas", "mangos", "uvas"];

for (const fruta of canasta) {
    console.log(fruta);
}

// FOR-IN
// -> itera sobre las propiedades de un objeto

const canastaDeFrutas = {
    nombre: "manzana",
    precio: 5.0,
    tipo: "verde",
    marca: "Chanita's Apples"
};

/**for (fruta in canastaDeFrutas) {
    console.log(fruta);
}*/

for (fruta in canastaDeFrutas) {
    console.log(`${fruta}: ${canastaDeFrutas[fruta]}`);
}
