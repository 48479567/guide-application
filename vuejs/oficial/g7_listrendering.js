var vm = new Vue({
  el: '#example-1',
  data: {
    parentMessage: 'Parent',
    items: [
      {message: 'Foo'},
      {message: 'Bar'}
    ],
    object: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    },
// ....(a)
    itemsDePrueba1: ['a', 'b', 'c']
    /* Estos metodos no son reactivos
    vm.itemsDePruba1[1] = 'x'
    vm.itemsDePrueba.length = 2
    */
  },
  methods: {
    //Este metodo filta el array con 
    filterItem: function () {
      this.items = this.items.filter(function (item) {
        return item.message.match(/Foo/)
      })
    },
    //Este metodo genera valores con su clave de un objeto uno por uno
    newItemObject: function (cantidad) {
      if(cantidad == 'uno') {
        return vm.$set(this.object, 'gender', 'masculino')
      } // Este no actualiza
      else if (cantidad == 'masDespues') {
        return this.object = Object.assign(this.object, {
          direccion: 'Calle',
          colorFavorito: 'Yellow'
        })
      } else { // este actualiza
        return this.object = Object.assign({}, this.object, {
          edad: 38,
          Hobby: 'nadar'
        })
      }
    }
  }
})

/*Por las limitaciones de Javascript hacia los arryas, Vue no puede realizar directamente las siguientes funciiones, ya que no son reactivas 
:::  vm.items[indexOfItem] = newValue
:::  vm.items.legth = newLength  
Es por ello que Vue desarrollo metodos de cambio de datos con respecto a los anteriores:
:::  Vue.set(vm.items, indexOfItem, newValue) de este ulti con su alias:
:::  vm.$set(vm.items, indexOfItem, newValue)
:::  vm.items.splice(indexOfItem, 1 , newValue) 

:::  vm.items.splice(newLength)   .....(a)
Estos anteriores tambien pueden crear nuevos valores en un array

de la misma forma funciona con los valores de los objetos que no se inicializaron como: 
vm.OtroObjecto = 'Valor del Nuevo Objeto' para ello vue implementa su metodo:
:::  Vue.set(object, key, value)  esto para un solo valor para mas valor usar   Object.assign() o _.extend()  ....(c)
 */