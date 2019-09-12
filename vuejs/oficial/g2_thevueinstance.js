//nuestro objeto datos
var data = {
  a: 1, 
//a:::::::
  newTodoText: '',
  visitCount: 0,
  todos: [],
  hideCompletedTodos: false,
  error: null
}

//b:::::::
var obj = {
  foo: 'bar'
}
//Con este comando este objeto no sera reactivo con la raiz vue
Object.freeze(obj)

/*  Esto es la continuacion para verificar el funcionamiento
new Vue({
  el: '#app',
  data: obj
}) ......(c)
*/

//The objeto es añadido a la instancia Vue
var vm = new Vue({
  //opciones
  el: '#example',
  data: data,
  created: function(){
    // Este marca al la instancia vm
    console.log(`a is: ${this.a}`)// =>"a is: 1"
  }
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true
vm.$watch('a', function(newValue, oldValue) {
  //Este callback sera llamado cuando vm.a cambia
})


//Comparando los campos (propiedades)
vm.a == data.a // => true

//Cambio la propiedad de la instancia tambien afecta al dato original
vm.a = 2
data.a // => 2

//... y viceversa
data.a = 3
vm.a // => 3

vm.b = 'h1' // esto no es reactivo, ya que no se inicializo en la raiz principal de vue, entonces para ello todas la variables a utilizar deben inicializarse  ......(a)

// La unica excepcion es el comando Object.freeze() esto hace que la reactividad para ese objeto no se cumpla ......(b)

