var vm = new Vue({
  el: '#example',
  data: {
    message: 'Texto Tres',
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = `${val} ${this.lastName}`
    },
    lastName: function (val) {
      this.fullName = `${this.firstName} ${val}`
    }
  //Siendo algo imperativo y repetitivo comparar con la propiedad computarizada
  },
  // Esto a diferencia de los metodos no se tiene que cargar de nuevo, esto es con la prueba que ya esta insertada prieviamente antes de ejecutarla
  computed: {
    fullName: {
      get: function () {
      return `${this.firstName} ${this.lastName}`
      },
      //El anterior era de forma perdeterminada (get) ahora vamos a hacer con la metodo set
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    },
    //a computed getter
    c1reversedMessage: function () {
      return this.message.split('').reverse().join('')
    },
    c2now: function () {
      return Date.now()
    }
  },
  methods: {
    m1reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
})


var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    // whenever question changes, this function will run
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    // _.debounce is a function provided by lodash to limit how
    // often a particularly expensive operation can be run.
    // In this case, we want to limit how often we access
    // yesno.wtf/api, waiting until the user has completely
    // finished typing before making the ajax request. To learn
    // more about the _.debounce function (and its cousin
    // _.throttle), visit: https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer:  function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm2 = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm2.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm2.answer = `Error! Could not reach the API. ${error}`
        })
    }
  }
})