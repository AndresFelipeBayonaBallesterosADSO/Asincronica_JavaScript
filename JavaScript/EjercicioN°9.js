// Definición de la función dropWhile que acepta un array y un callback
const dropWhile = (array, callback) => {
  let index = 0 // Inicializa una variable para rastrear la posición actual en el array

  // Recorre el array mientras el callback devuelva true y no se alcance el final del array
  while (index < array.length && callback(array[index])) {
    index++ // Incrementa el índice para pasar al siguiente elemento del array
  }

  const result = [] // Inicializa un nuevo array para almacenar los elementos filtrados

  // Recorre el array desde la posición donde el callback devuelve false hasta el final
  for (let i = index; i < array.length; i++) {
    result[result.length] = array[i] // Agrega el elemento actual al nuevo array
  }

  return result // Devuelve el nuevo array resultante
}

// Ejemplo de uso
const Verificar = (x) => x < 10 // Callback que verifica si un número es menor que 10
const Numero = [1, 5, 6, 8, 9, 10, 18] // Array de ejemplo

// Imprime el resultado de aplicar dropWhile al array Numero con el callback Verificar
console.log(dropWhile(Numero, Verificar)) // Salida esperada: [10, 18]
