DesdeNumero = 1
HastaNumero = 10

const ImprimirNumeros = setInterval(() => {
  if (DesdeNumero <= HastaNumero) {
    console.log(`${DesdeNumero}`)
    DesdeNumero = 1 + DesdeNumero
  } else {
    clearInterval()
  }
}, 1000)


function imprimirNumero(DesdeNumero,HastaNumero) {
  if (DesdeNumero <= HastaNumero) {
    console.log(DesdeNumero);
    setTimeout(() => imprimirNumero(DesdeNumero + 1, HastaNumero), 1000);
  }
}
imprimirNumero(DesdeNumero, HastaNumero);
