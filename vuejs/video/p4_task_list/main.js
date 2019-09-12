var app = new Vue({
  el: '#app',
  data: {
    titulo: 'Lista de Tareas',
    tareas: [ 
      { texto: 'Aprender Vue.js', terminada: false }, 
      { texto: 'Aprender Angular 2', terminada: false },
      { texto: 'Aprender Ionic 3', terminada: false }
    ],
    nuevaTarea: ''
  },
  methods: {
    agregarTarea: function () {
      var texto = this.nuevaTarea.trim() // Este comando se asegura que el texto no tenga vacios
      if (texto) {
        this.tareas.push({
          texto: texto,
          terminada: false
        })
      }
      this.nuevaTarea = ''
    },
    borrar: function (indice) {
      this.tareas.splice(indice, 1) //Este metodo solo borrar uno solo por ello el argumento"
    }
  }
})