//Cliente Gym

const clienteGym = {
  nombre: 'Beto',
  edad: 28,
  peso: 85,
  altura: 175,
  fechaRegistro: '22/02/2018'
}

//Cliente Gym

const clienteGym2 = {
  nombre: 'Alberto',
  edad: 25,
  peso: 80,
  altura: 185,
  fechaRegistro: '22/02/2017'
}
const clienteGym3 = {
  nombreCompleto: 'Beto Quiroga',
  edad: 25,
  fechaDeRegistro: '22/05/2005'
}
console.log(clienteGym3)

const clientes = [clienteGym, clienteGym2, clienteGym3]
// Esto no puede ser posible por si queremos registrar a varios de ellos por que tienen diferentes atributos, para ello se crearon los constructores.
// Esto para poder settear a cada uno de ellos y hacer algo cuando se va a insertar otro que tiene diferentes atributos


