console.log("Que es un objeto?")

const Usuario = {
  Nombre: "",
  Apellido: "",
  Edad: 0
}


const headler = {
  set:function(objeto, propiedad, valor) {
    if (propiedad === "age") {
      console.log("Estamos modificando la edad")
    }
  }
}

// Proxy
const proxy = new Proxy(Usuario, headler)


// Su codigo
Usuario.Nombre = "Andres"
Usuario.Apellido = "Bayona"
Usuario.Edad = 19

console.log(Usuario)