var vm = new Vue({
  el: '#estilos',
  data: {
    activeColor: 'red',
    fontSize: 80,
    styleObject: {
      color: 'yellow',
      fontSize: '13px'
    },
    baseStyles: {
      color: 'blue'
    },
    overridingStyles: {
      fontSize: '48px'
    }
  }
})