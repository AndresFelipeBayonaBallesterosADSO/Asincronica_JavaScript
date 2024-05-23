async function delayedOperation() {
  // Espera 1 segundo usando await dentro de una función asincrónica
  await new Promise(resolve => setTimeout(resolve, 1000));
  // Después de esperar 1 segundo, devuelve la cadena "Operación completada"
  return "Operación completada"
}

// Llamada a la función asincrónica
delayedOperation().then(console.log) // Imprime el resultado en la consola cuando se resuelve la promesa
