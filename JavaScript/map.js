const arreglo = [1, 2, 3, 4, 5]

console.log(arreglo)

function operacion (x) {
  return x * 2
}

let resultado = arreglo.map(operacion)

console.table(resultado)