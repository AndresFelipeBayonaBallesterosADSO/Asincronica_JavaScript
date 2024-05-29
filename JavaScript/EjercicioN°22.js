// Simula una llamada asincrónica que tarda 1 segundo en completarse
function llamadaAsincronica(elemento) {
  return new Promise(resolve => {
    // Utiliza setTimeout para simular una operación asincrónica
    setTimeout(() => {
      resolve(`Procesado: ${elemento}`); // La promesa se resuelve con un mensaje después de 1 segundo
    }, 1000);
  });
}

// Función asincrónica para procesar una lista de elementos
async function procesarLista(lista) {
  // Utiliza un bucle for...of para iterar sobre cada elemento de la lista
  for (const elemento of lista) {
    // Espera a que la llamada asincrónica se complete
    const resultado = await llamadaAsincronica(elemento);
    // Muestra el resultado en la consola
    console.log(resultado);
  }
}

// Lista de elementos a procesar
const elementos = ['Elemento1', 'Elemento2', 'Elemento3'];

// Llama a la función para procesar la lista
procesarLista(elementos);