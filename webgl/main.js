var gl // Variable global para el contexto Webgl

var vm = new Vue({
  el: "#demo",
  data: {
    gl: gl
  },
  mounted: function () {
    this.start()
  },
  methods: {
    start: function () {
      var canvas = vm2
      this.gl = initWebGL(canvas)

      if (this.gl) {
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0) // Establecer el color base en negro, totalmente opaco
        this.gl.enable(this.gl.DEPTH_TEST) // Habilitar prueba de profundidad
        this.gl.depthFunc(this.gl.LEQUAL) // Objetos cercanos opacan objetos lejanos
        this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT) // Limpiar el buffer de color asi como el de profundidad
      }
      function initWebGL (canvas) {
        this.gl = null
        try {
          this.gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
        }
        catch (e) {}
        if (!this.gl) {
          alert('Imposible inicializar WebGl. Tu navegador puede no soportarlo')
          this.gl = null
        }
        return this.gl
      }
    }
  }
})

var vm2 = new Vue({
  el: '#glcanvas'
})