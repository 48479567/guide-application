var vm = new Vue({
  el: '#input',
  data: {
    codigo: ''
  },
  methods: {
    mostrar: function () {
      return vm2.muestra = this.codigo
    }
  }
})

var vm2 = new Vue({
  el: '#muestra',
  data: {
    muestra: ''
  },
  methods: {
  }
})