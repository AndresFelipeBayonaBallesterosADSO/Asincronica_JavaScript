// Definición de la primera promesa que se resolverá después de 2 segundos
const promise1 = new Promise(resolve => {
  setTimeout(() => {
    resolve('Primera promesa resuelta');
  }, 2000); // Se resuelve después de 2 segundos
});

// Definición de la segunda promesa que se resolverá después de 3 segundos
const promise2 = new Promise(resolve => {
  setTimeout(() => {
    resolve('Segunda promesa resuelta');
  }, 3000); // Se resuelve después de 3 segundos
});

// Definición de la tercera promesa que se resolverá después de 4 segundos
const promise3 = new Promise(resolve => {
  setTimeout(() => {
    resolve('Tercera promesa resuelta');
  }, 4000); // Se resuelve después de 4 segundos
});

// Utiliza Promise.all() para esperar a que todas las promesas se resuelvan
Promise.all([promise1, promise2, promise3])
  .then(resultados => {
    // Cuando todas las promesas se resuelven, se muestra un mensaje con los resultados en la consola
    console.log('Todas las promesas se han resuelto:', resultados);
  })
  .catch(error => {
    // Si alguna de las promesas es rechazada, se maneja el error con el método catch()
    console.error('Alguna de las promesas fue rechazada:', error);
  });
