/**
 *      EJERCICIO 26
 *      Crea una función que reciba una cadena de texto y cuente la cantidad de vocales que contiene.
 *      hecho por Kevin Estuardo Ramirez Aguirre - 2024399
 * 
 */
function contarVocales(cadena) {
  let contador = 0;
  const texto = cadena.toLowerCase();

  for (let vocal = 0; vocal < texto.length; vocal++) {
    if (
      texto[vocal] === "a" ||
      texto[vocal] === "e" ||
      texto[vocal] === "i" ||
      texto[vocal] === "o" ||
      texto[vocal] === "u"
    ) {
      contador++;
    }
  }

  return contador;
}

// Ejemplo de uso:
console.log(contarVocales("Hola"))