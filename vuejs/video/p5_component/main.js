var data = {
  titulo: 'Lista de Tareas',
  tareas: [ 
    { texto: 'Aprender Vue.js', terminada: false }, 
    { texto: 'Aprender Angular 2', terminada: false },
    { texto: 'Aprender Ionic 3', terminada: false }
  ],
  nuevaTarea: ''
}

//Esto es sumamente Importate, absolute todos las etiquetas no deben tener mayusculas
Vue.component('titulo', {
  template: '<h2>{{ titulo }}</h2>',
  //Ojo::: Aca no solo se debe definir sino botar el valor con return para que funcione en la parte de uso superior
  data: function () {
    return { titulo: '- Lista de Tareas -' }
  }
})

Vue.component('nueva-tarea', {
  template: `
            <div class="input-group">
              <input type="text" 
                placeholder="Escribe una Nueva Tarea" 
                v-model="nuevaTarea"
                class="form-control"
                @keyup.enter="agregarTarea">
              <span class="input-group-btn">
                <button type="button" 
                  class="btn btn-primary" 
                  @click="agregarTarea">Agregar</button>
              </span>
            </div>
            `,
  data: function () {
    return data
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
    }
  }
})

Vue.component('lista-de-tareas', {
  template: `
            <ul class="list-group">
              <li v-for="(tarea, indice) of tareas" class="list-group-item" :class="{terminada: tarea.terminada}">
                {{ tarea.texto }}
                <span class="estiloBoton">
                  <button type="button" class="btn btn-success btn-xs" 
                    @click="tarea.terminada = !tarea.terminada">»</button>
                  <button type="button" class="btn btn-danger" @click="borrar(indice)">x</button>
                </span>
              </li>
            </ul>   
            `,
  data: function () {
    return data
  },
  methods: {
    borrar: function (indice) {
      this.tareas.splice(indice, 1) //Este metodo solo borrar uno solo por ello el argumento"
    }
  }
})

new Vue({
  el: '#app',
  data: data
})