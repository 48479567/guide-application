var app = new Vue({ // aca pasamos un objeto con el primer argumento ""el""
  el: '.vue',
  data: {
    mensaje: 'Aprende Vuejs Facilmente',
    src: '../../../hell_vue!/emojis/incendio.png'
  },
  methods: {
    mostrarMensaje: function () {
      return 'Aprende vuejs facilmente - MM'
      // o con this.mensaje
    }
  }
})