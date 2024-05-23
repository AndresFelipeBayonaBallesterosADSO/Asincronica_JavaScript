// Creación de una promesa que se rechazará después de 2 segundos
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise rechazada"); // Rechazar la promesa con el mensaje "Promise rechazada" después de 2 segundos
  }, 2000) // Espera 2000 milisegundos (2 segundos)
})

// Captura el error cuando la promesa se rechaza
myPromise.catch(error => {
  console.error("Error:", error) // Imprimir el error en la consola
})