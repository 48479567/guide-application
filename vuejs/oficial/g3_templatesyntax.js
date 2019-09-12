var vm = new Vue({
  el: '#example',
  data: {
    msg: 'esta es la tercera parte',
    rawHtml: '<span style="color:blue">Texto de prueba</span>', // esta forma dinamica solo debe usarse cuando no hay de por medio datos sensibles, ya que esto es muy suceptible a ser atacado por XSS
    isButtonDisabled: true,
    number: 5,
    ok: true,
    message: 'Esta es la prueba del mensaje para revertirlo',
    id: 'hola',
    seen: true,
    url: 'https://www.google.com/'
  },
  methods: {
    hacerAlgo: function() {
      return alert('hola')
    }
  }
})