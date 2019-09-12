/*El proceso de manejo (ciclo de vida) de la instacia de vue esta conformado por varias estapas, y para acceder a ciertos metodos se puede hacer:
°°beforeCreate(): Justo antes de crear la instancia.
°°created(): Al instante de crear.
°°beforeMount(): Cuando vue va a renderizar informacion (antes) esto mas con las plantillas.
°°mounted(): Al momento de renderizar en el DOM (despues).
°°beforeUpdate(): Antes de actualizar, cambiar algunas de las propiedades.
°°updated(): Al momento actualizado.
°°beforeDestroy(): Justo antes de destruir la instancia.
°°destroyed(): Cuando ya se destruyo la instancia
*/

new Vue({
  el: '#vm',
  data: {
    mensaje: 'Este es el mensaje'
  },
  // Sigue el orden de la Instancia, ciclo de vida, entonces esto si lo desordenamos tendra el mismo orden de ejecucion y muestra
  beforeCreate: function () {
    console.log('Llamando a beforeCreate')
  },
  created: function () {
    console.log('Llamando Created');     
  },
  beforeMount: function () {
    console.log('Llamdo beforeMounted')
  },
  mounted: function () {
    console.log('Llamando mounted')
  },
  //Vue se da cuenta cuando en realidad suceden cambios y cuando no.
  beforeUpdate: function () {
    console.log('Llamando Before Updated')
  },
  updated: function () {
    console.log('Llamando Updated')
  },
  //Solo cuando se sale de la pagina
  beforeDestroy: function () {
    console.log('Llamando a BeforeDestroy')
  },
  destroyed: function () {
    console.log('Llamando a Destroyed')
  },
  methods: {
    destruir: function () {
      //Algo no creado que es parte de vue (($)), esto desconecta la instancia de vue
      this.$destroy()
    }
  }
})     