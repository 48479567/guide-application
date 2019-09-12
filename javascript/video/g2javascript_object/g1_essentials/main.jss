"user strict"
//Protipo ~ Clase
//Ahora el uso de this es solo para el mismo objeto

const person = {
  name: 'person1',
  age: 38,
  gender: 'male',
  email: 'user1@user.com',
  password: 'pass1',
  sayName: () => { console.log(`my name is: ${person.name}`)}
  // Esto con this no funciona
  
}

person.sayName()
console.log(person)
console.log(person["name"])
console.log(person.name) //Autoejecutable

let 
name = 'person1',
age = 38,
gender = 'male',
email = 'user1@user.com',
password = 'pass1'

const table = {
  [name] : 'name1',
  [age] : 38,
  [gender] : 'male',
  [email] : 'usuario1@user.com',
  [password] : 'pass1',
  [`${name}H${gender}`]: 'nom1Mal'
}
//Esto como manejo de variables [nombreVariable] )):::  valor, esto para hacer de forma dinamica los indices de los objetos para la integracion.

console.log(table)