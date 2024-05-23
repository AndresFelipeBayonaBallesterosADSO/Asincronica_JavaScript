// Definición del array 'numero'
const numero = [5, 8, 19, 22];

// Utilizando el método 'map' en el array 'numero' para duplicar cada elemento por 9
const duplipar = numero.map(x => x * 9);

// Imprimiendo el resultado en forma de tabla
console.table(duplipar);