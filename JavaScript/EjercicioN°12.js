// La función incorporada setTimeout utiliza callbacks.Crea una alternativa basada en
// promesas.
// La función delay(ms) debería devolver una promesa.Esa promesa debería resolverse
// después de ms milisegundos, para que podamos agregarle.then, así:

// Definición de una función llamada delay que toma un parámetro 'ms' (milisegundos)
function delay(ms) {
  // Retorna una nueva promesa
  return new Promise(resolve => {
    // Dentro de la promesa, establece un temporizador usando setTimeout
    // Cuando el temporizador se complete después de 'ms' milisegundos, resuelve la promesa
    setTimeout(resolve, ms);
  });
}

// Llama a la función delay con un argumento de 3000 milisegundos (3 segundos)
// Encadena el método then a la promesa devuelta por delay
// Cuando la promesa se resuelve después de 3 segundos, se ejecuta la función de flecha dentro de then
// Esta función de flecha muestra una alerta que dice "Se ejecuta después de 3 segundos"
delay(3000).then(() => alert("Se ejecuta después de 3 segundos"));

