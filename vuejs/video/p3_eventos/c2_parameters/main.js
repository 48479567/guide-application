new Vue({
  el: '#eventos',
  data: {
    contador: 0
  },
  methods: {
    alerta: function (mensaje) {
      alert(mensaje)
    }
  }
})