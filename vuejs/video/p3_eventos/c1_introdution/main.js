new Vue({
  el: '#eventos',
  data: {
    contador: 0
  },
  methods: {
    sumarUno: function () {
      this.contador += 1
    },
    restarUno: function () {
      this.contador -= 1
    }
  }
})