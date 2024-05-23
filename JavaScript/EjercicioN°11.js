// ¿Cuál es el resultado del código a continuación ?

let i = 0

setTimeout(() => alert(i), 100) // ?

// asumimos que el tiempo para ejecutar esta funcion es > 100ms

for (let j = 0; j < 100000000; j++){
  i++;
}

// El código mostrará un cuadro de diálogo con el valor de i después de que el bucle for haya terminado de ejecutarse.Dado que el bucle incrementa i en 100,000,000 veces, tomará algún tiempo antes de que se ejecute el código dentro de setTimeout.