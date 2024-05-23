// Definición de tres promesas
const promise1 = new Promise((resolve, reject) => {
  // Esta promesa se resuelve después de 2 segundos
  setTimeout(() => {
    resolve('Promesa 1 resuelta');
  }, 2000)
})

const promise2 = new Promise((resolve, reject) => {
  // Esta promesa se rechaza después de 3 segundos
  setTimeout(() => {
    reject('Promesa 2 rechazada');
  }, 3000)
})

const promise3 = new Promise((resolve, reject) => {
  // Esta promesa se resuelve después de 4 segundos
  setTimeout(() => {
    resolve('Promesa 3 resuelta');
  }, 4000)
})

// Utiliza Promise.allSettled() para obtener información sobre el estado de todas las promesas
Promise.allSettled([promise1, promise2, promise3])
  .then(resultados => {
    // Muestra información sobre el estado de cada promesa en la consola
    resultados.forEach(resultado => {
      if (resultado.status === 'fulfilled') {
        console.log('Promesa resuelta:', resultado.value);
      } else if (resultado.status === 'rejected') {
        console.log('Promesa rechazada:', resultado.reason);
      }
    });
  });
