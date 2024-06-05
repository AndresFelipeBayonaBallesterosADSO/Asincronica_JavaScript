// // console.log("¿Qué es un objeto?")

// const Usuario = {
//   Nombre: "",
//   Apellido: "",
//   Edad: 0,
// }

// let soloLetras = /^[a-zA-Z]+$/

// const handler = {
//   set: function (objeto, propiedad, valor) {
//     if (propiedad === "Edad" && typeof valor === "number") {
//       if (valor >= 18) {
//         objeto[propiedad] = valor
//       }
//     }
//     if ((propiedad === "Nombre" || propiedad === "Apellido") && (soloLetras.test(valor))) {
//       objeto[propiedad] = valor
//     }
//   },
//   get: function (objeto, propiedad) {
//     if (propiedad === "Nombre" || propiedad === "Apellido") {
//       return objeto[propiedad].toUpperCase(); // Convertir nombres a mayúsculas
//     } else {
//       return objeto[propiedad];
//     }
//   }
// }

// // Proxy
// const proxy = new Proxy(Usuario, handler)

// // Código original
// // Usuario.Nombre = "Andres"
// // Usuario.Apellido = "Bayona"
// // Usuario.Edad = 19

// proxy.Edad = 25
// // console.log(Usuario)

// // Modificado para utilizar el proxy
// console.log(proxy.Nombre);
// console.log(proxy.Apellido);
// // console.log(proxy.Edad);



// // LEER JSON
// fetch('datos.json')
//   .then(response => response.json())
//   .then(data => )