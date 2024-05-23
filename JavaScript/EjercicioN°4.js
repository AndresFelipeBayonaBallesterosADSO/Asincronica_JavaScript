// Definición del array 'Celulares' que contiene nombres de marcas de teléfonos celulares
const Celulares = ['xiaomi', 'samsung', 'iphone', 'huawei'];

// Imprimir el array 'Celulares' en la consola
console.log(Celulares);

// Definición de la función 'Operacion' que será utilizada como criterio de filtrado para el array
function Operacion(x) {
  // Retorna true si la longitud del array 'Celulares' es mayor que 3, de lo contrario, retorna false
  return x, Celulares.length > 3;
}

// Filtrar los elementos del array 'Celulares' utilizando la función 'Operacion' como criterio de filtrado
let Resultado = Celulares.filter(Operacion);

// Imprimir el resultado del filtro en forma de tabla en la consola
console.table(Resultado);