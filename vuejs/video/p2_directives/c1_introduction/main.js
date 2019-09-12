/*Las directivas entran como atributo de cada etiqueta de html
°°v-if="myVar", v-if="myVar==5"
°°v-on:keyup.enter="enviar"
*/
new Vue({
  el: '#vm',
  data: {
    imagen: '../../../hell_vue!/emojis/incendio.png',
    texto: 'Bienvenido',
    html: '<strong>Otro</strong>',
    mostrar: true,
    noMostrar: false,
    parrafo: 2,
    paises: ['Mexico', 'España', 'Colombia'],
    ciudades: [
      {nombre: 'Acapulco'},
      {nombre: 'Buenos Aires'},
      {nombre: 'Lima'}
    ],
    empleado: {
      nombre: 'Sergio Espinoza',
      edad: '58 años',
      nacionalidad: 'Peruano',
      profesion: 'programador',
      empresa: 'IBM',
      telefono: '2551155'
    }
  }
})