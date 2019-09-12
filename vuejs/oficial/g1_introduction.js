Vue.component('todo_item', {
  template: '<li>This is a todo</li>'
})

Vue.component('todo_item2', {
  //The todo_item2 component now accepts a "prop", which is like a custom attribute. This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}<li>'
})

const app = new Vue({
  el: "#app",
  data: {
    message: 'Inicio con Vue',
    dinamic_title: `You loaded this page on ${new Date().toLocaleString()}`,
    visible: true,
    no_visible: false,
    listado: [
      {id: 'uno', nombre: 'nom_uno'},
      {id: 'dos', nombre: 'nom_dos'},
      {id: 'tres', nombre: 'nom_tres'}
    ],
    groceryList: [
      { id: 0, text: 'Vegetable' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat'}
    ]
  },
  methods: {
    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('')
    }
  }
})