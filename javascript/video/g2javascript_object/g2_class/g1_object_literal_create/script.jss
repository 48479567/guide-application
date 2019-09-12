"use_strict"

// let usuario1 = {
//   nombre: 'Beto Quiroga',
//   email: 'beto@ed.team',
//   edad: 28
// }

// let nombreUsuario1 = usuario1.nombre
// let usuario2 = {
//   nombre: 'Juan',
//   apellido: 'Perez',
//   correo: 'juan@gmail.com',
//   edad: 15
// }

class Usuario {
  constructor(nombre, apellido, correo, edad) {
    this.nombre = nombre
    this.apellido = apellido    
    this.correo = correo    
    this.edad = edad    
  }
  saludar() {
    return document.write(`
      <div>
        <p>
          Hola mi nombre es ${this.nombre}
        </p>  
      </div>
    `)
  }
  cambiarEdad(nuevaEdad) {
    this.edad = nuevaEdad
  }
}

let beto = new Usuario('Beto', 'Quiroga', 'beto@ed.team', 28)

console.log(beto)

let alexys = new Usuario('Alexys', 'Lozada', 'alexys@ed.team', 25)

console.log(alexys)

//Ahora hay diversos tipos de usuarios pero que tienen caracteristicas adicionales, para ellos se hace uso de las herencias

class Profesor extends Usuario {
  constructor(nombre, apellido, correo, edad, experiencia, lenguaje) {
    super(nombre, apellido, correo, edad)
    this.experiencia = experiencia
    this.lenguaje = lenguaje
  }
}

class Estudiante extends Usuario {
  constructor(nombre, apellido, correo, edad, activado) {
    super(nombre, apellido, correo, edad)
    this.activado = activado
  }
}

let alvaro = new Profesor(
  'Alvaro',
  'Felipe',
  'alvaro@ed.team',
  28,
  5,
  'javascript'
)

console.log(alvaro)

let alejandro = new Estudiante (
  'Alejandro',
  'Rodriguez',
  'alejandro@ed.team',
  23,
  true
)

console.log(alejandro)