function encontrarIndice(arreglo, callback) {
    // Recorremos cada elemento del arreglo usando un bucle for
    for (let i = 0; i < arreglo.length; i++) {
        // Llamamos al callback con el elemento actual del arreglo
        if (callback(arreglo[i])) {
            // Si el callback devuelve true, devolvemos el índice actual
            return i;
        }
    }
    // Si ningún callback devuelve true, devolvemos undefined
    return undefined;
}

// Ejemplo de uso:

// Definimos un arreglo de ejemplo
const numeros = [1, 2, 3, 4, 5];

// Definimos un callback que verifica si un número es mayor que 3
const esMayorQueTres = (num) => num > 3;

// Llamamos a la función encontrarIndice con el arreglo y el callback
const indice = encontrarIndice(numeros, esMayorQueTres);

// Imprimimos el resultado
console.log(indice); // Esto debería imprimir 3, ya que 4 (en el índice 3) es el primer número mayor que 3
