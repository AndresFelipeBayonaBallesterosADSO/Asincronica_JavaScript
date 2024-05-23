const takeWhile = (array, callback) => {
  let result = [] // Inicializamos un nuevo array para almacenar los elementos
  let index = 0 // Inicializamos una variable para rastrear la posición actual en el array

  // Recorremos el array mientras el callback devuelva true y no se alcance el final del array
  while (index < array.length && callback(array[index])) {
    // Concatenamos el elemento actual al array de resultado
    result = [...result, array[index]] // Agregamos el elemento actual al array de resultado
    index++ // Incrementamos el índice para pasar al siguiente elemento del array
  }

  return result // Devolvemos el array con los elementos hasta el primer false
}

// Ejemplo de uso
const Verificar = (x) => x > 10 // Callback que verifica si un número es menor que 10
const Numero = [1, 25, 16, 58, 95, 11, 19] // Array de ejemplo

// Imprime el resultado de aplicar takeWhile al array Numero con el callback Verificar
console.log(takeWhile(Numero, Verificar)) // Salida esperada: [1, 5, 6, 8, 9]
