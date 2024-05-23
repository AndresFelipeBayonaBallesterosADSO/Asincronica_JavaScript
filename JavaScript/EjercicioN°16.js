// Creamos tres promesas consecutivas
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10) // La primera promesa devuelve el número 10
  }, 1000) // Se resuelve después de 1 segundo
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20) // La segunda promesa devuelve el número 20
  }, 1000) // Se resuelve después de 1 segundo
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30) // La tercera promesa devuelve el número 30
  }, 1000) // Se resuelve después de 1 segundo
})

// Encadenamos las tres promesas para sumar los resultados
Promise.all([promise1, promise2, promise3])
  .then(values => {
    // Sumamos los resultados de las tres promesas
    const sum = values.reduce((acc, curr) => acc + curr, 0);
    // Mostramos el resultado final
    console.log("Resultado final:", sum)
  })
  .catch(error => {
    // Manejo de errores si alguna de las promesas es rechazada
    console.error("Error:", error)
  })
