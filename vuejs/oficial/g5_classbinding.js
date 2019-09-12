Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})

var vm = new Vue({
  el: "#clase",
  data: {
    isActive: true,
    error: null,
    hasError: false,
    classObject: {
      active: true,
      'text-danger': false
    },
    activeClass: 'active',
    errorClass: 'text-danger'
  },
  computed: {
    classObject1: function () {
      return {
        active: this.isActive && !this.error, 'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
})