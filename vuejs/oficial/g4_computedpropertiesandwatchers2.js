var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!',
    answerNo: {
      answer:'no',forced:true,image:"file:///D:/io/web/guia_web/vue_js/official/g4_answerno.gif"
    }
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
      var vm = this
      axios.get('https://yesno.wtf/api') 
    /*Esto es su contenido 
    */
     /*Cuando la carga denota por la metodologia json esto es de forma predeterminada cuando esto es asi entonces, cuando un objeto se desea trabajar no va a cumplir con los requisitos que se esperaba en la denoatacion primaria, entonces simplemente manda error :___( */
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = `Error! Could not reach the API. ${error}`
        })
    }
  }
})
/*El funcionamiento de este programa es algo extranño por que cuando pones una cantidad de caracteres especificos esto lo denota en la memoria cache y el funcionamiento es inusual*/