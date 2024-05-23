// Definición de las variables DesdeNumero y HastaNumero con valores iniciales
const DesdeNumero = 1
const HastaNumero = 10

// Creación de un intervalo para imprimir números cada 1 segundo
const ImprimirNumeros = setInterval(() => {
  // Si el número actual es menor o igual al número final
  if (DesdeNumero <= HastaNumero) {
    // Imprimir el número actual
    console.log(`${DesdeNumero}`)
    // Incrementar el número actual en 1 para la siguiente iteración
    DesdeNumero++
  } else {
    // Si el número actual es mayor que el número final, limpiar el intervalo
    clearInterval(ImprimirNumeros)
  }
}, 1000)

// Definición de una función recursiva para imprimir números de manera recursiva
function imprimirNumero(DesdeNumero, HastaNumero) {
  // Si el número actual es menor o igual al número final
  if (DesdeNumero <= HastaNumero) {
    // Imprimir el número actual
    console.log(DesdeNumero)
    // Llamar recursivamente a la función imprimirNumero con el siguiente número y el mismo número final después de 1 segundo
    setTimeout(() => imprimirNumero(DesdeNumero + 1, HastaNumero), 1000)
  }
}

// Llamar a la función imprimirNumero con los valores iniciales DesdeNumero y HastaNumero
imprimirNumero(DesdeNumero, HastaNumero)
