class Usuario {
  constructor(nombre, apellido, correo, contraseña) {
    this.nombre = nombre
    this.apellido = apellido
    this.correo = correo
    this.contraseña = contraseña
  }
}

let form1 = document.getElementById('formulario1')

form1.addEventListener('submit', e => {
  //para prevenir el envio de valor y la recarga de la pagina
  e.preventDefault()
  // capturamos el evento para mostrarlo
  // e es un prototipo no necesariamente una clase pero que se comporta igual, pertenece al sistema 
  console.log(e)
  // entonces los demas son sus atributos y metodos, por eso podemos acceder a sus atributos como target
  console.log(e.target.nombre)
  console.log(e.target.nombre.value)
  //Ahora guardamos en variable
  let nombre = e.target.nombre.value
  let apellido = e.target.apellido.value
  let correo = e.target.correo.value
  let contraseña = e.target.contraseña.value
  //Enviando en en servidor con res o estado global con redux (como gestor)

  // let usuario = {
  //   nombre: nombre,
  //   apellido: apellido,
  //   correo: correo,
  //   contraseña, contraseña
  // }
  // Esto para las variables con los mismos valores en nombres
  let usuario = new Usuario (    
    nombre,
    apellido,
    correo,
    contraseña)

  console.log(usuario)
})