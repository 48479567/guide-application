Vue.component('lista_con_boton', {
  template: '<li>{{ nombre }}- {{id}}<button @click="$emit(\'remove\')">Borrar</button></li>',
  props: ['nombre', 'id']
  })

var vm = new Vue({
  el: '#prueba',
  data: {
    textoComponente: '',
    arrayPrueba: [
      { 
        id: 1,
        nombre: 'Nombre1'
      }, 
      {
        id: 2,
        nombre: 'Nombre2'
      }, 
      {
        id: 3,
        nombre: 'Nombre3'
      }
    ],
    contadorArray: 4
  },
  methods: {
    crearItem: function () {
      this.arrayPrueba.push({
        id: this.contadorArray++,
        nombre: this.textoComponente
      })
      this.textoComponente = ''
    }
  }
})