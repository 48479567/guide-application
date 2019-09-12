var vm = new Vue({
  el: '#condicional',
  data: {
    ok: true,
    okShow: false,
    type: 'A',
    loginType: 'username'
  },
  methods: {
    cambioTipoDeInicio: function () {
      if(this.loginType == 'username') {
        this.loginType = 'email'
      } else {
        this.loginType = 'username'
      } 
    }
  }
})
// Existe otra directiva que es el v-show es casi lo mismo que v-if la diferencia se denota con la analogia display si es falso es none, quiere decir a pesar de que v-show no cumple renderiza en la web a diferencia de v-if que rompe desde el comienzo, este ultimo es un tanto mas estricto y forzoso para cambiarlo mientras que v-show lo hace de forma facilitada, entonces el uso para v-show como recomendacion es para cambios constantes y v-if para renderizaciones iniciales con condiciones. v-show es mas dinamico con css
/*
No usar v-if con v-for segun los formatos y recomendaciones, ademas todo ello tiene formato inicial
*/