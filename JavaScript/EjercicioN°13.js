// Creación de una promesa que se resolverá después de 3 segundos
const myPromise = new Promise(resolve => {
  setTimeout(() => {
    resolve("Promise resuelta"); // Resolviendo la promesa con el mensaje "Promise resuelta"
  }, 3000); // Espera 3000 milisegundos (3 segundos)
})

// Cuando la promesa se resuelve, se ejecuta esta función de flecha
myPromise.then(message => {
  console.log(message) // Imprime el mensaje "Promise resuelta" en la consola
})
