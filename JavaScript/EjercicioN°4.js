const Celulares = ['xiaomi', 'samsung', 'iphone', 'huawei']

console.log(Celulares)

// const resultado = Celulares.filter((Celulares) => Celulares.length > 6)

function Operacion (x){
  return x , Celulares.length  > 3
}

let Resultado = Celulares.filter(Operacion)

console.table(Resultado)