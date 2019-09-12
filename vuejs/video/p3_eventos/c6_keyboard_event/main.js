new Vue({
  el: '#eventos',
  data: {
    x: 0,
    y: 0,
    contador: 0
  },
  methods: {
    mostrarCoordenadas: function (evento) {
      this.x = evento.clientX
      this.y = evento.clientY
    },
    sumar: function (cantidad) {
      this.contador += cantidad
    }
  }
})