// habilitar `v-on: keyup.f1`
Vue.config.keyCodes.f1 = 115

var contenidos = {
  event_modifiers: {
    l4_1: [
      { nombre: '.prevent' },
      { nombre: '.stop' },
      { nombre: '.capture' },
      { nombre: '.self' },
      { nombre: '.once' },
      { nombre: '.passive' }
    ],
    c4_1: `HTML
          
      <!-- the click event's propagation will be stopped -->
      <a v-on:click.stop="doThis"></a>
      
      <!-- the submit event will no longer reload the page -->
      <form v-on:submit.prevent="onSubmit"></form>
      
      <!-- modifiers can be chained -->
      <a v-on:click.stop.prevent="doThat"></a>
      
      <!-- just the modifier -->
      <form v-on:submit.prevent></form>
      
      <!-- use capture mode when adding the event listener -->
      <!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
      <div v-on:click.capture="doThis">...</div>
      
      <!-- only trigger handler if event.target is the element itself -->
      <!-- i.e. not from a child element -->
      <div v-on:click.self="doThat">...</div>`,
    C4_2: `HTML

      <!--El evento click se activara una vez como maximo-->
      <a @click.once="hacer algo"></a>`,
    c4_3: `HTML

      <!-- the scroll event's default behavior (scrolling) will happen -->
      <!-- immediately, instead of waiting for onScroll to complete    -->
      <!-- in case it contains event.preventDefault()                  -->
      <div v-on:scroll.passive="onScroll">...</div>`
  },
  event_key: {
    l5_1: [
      { name: '.enter' },
      { name: '.tab' },
      { name: '.delete (tanto para "delete"y "retroceso")' },
      { name: '.esc' },
      { name: '.space' },
      { name: '.up' },
      { name: '.down' },
      { name: '.left' },
      { name: '.right' }      
    ],
    c5_1: `HTML

      <!-- only call 'vm.submit()' when the 'keyCode' is 13 -->
      <input v-on:keyup.13="submit">`,
    c5_2: `HTML
    
      <!-- same as above -->
      <input v-on:keyup.enter="submit">
      
      <!-- also works for shorthand -->
      <input @keyup.enter="submit">`,
      c5_3: `JS

      // enable 'v-on:keyup.f1'
      Vue.config.keyCodes.f1 = 112`
  },
  automatic_key_modifiers: {
    c6_1: `HTML

      <input @keyup.page-down="onPageDown">`
  },
  system_modifier_keys: {
    l7_1: [
      { name: '.ctrl' },
      { name: '.alt' },
      { name: '.shift' },
      { name: '.meta' }
    ],
    c7_1: `HTML

      <!-- Atl + C -->
      <input @keyup.alt.67="clear">
      
      <!-- Ctrl + Click -->
      <div @click.ctrl="doSomething">Do Something</div>`
  },
  exact_modifier: {
    c8_1: `HTML

      <!-- This will fire even if Alt or Shift is alse pressed -->
      <button @click.ctrl="onClick">A</button>
      
      <!-- This will only fire when Ctrl and no other keys are pressed -->
      <button @click.ctrl.exact="onCtrlClick">A</button>
      
      <!-- This will only fire when no system modifiers are pressed -->
      <button @click.exact="onClick>A</button>`
  },
  mouse_button_modifiers: {
    l9_1: [
      { name: '.left' },
      { name: '.right' },
      { name: '.middle' }
    ]
  },
  listener_html: {
    l10_1: [
      { name: 'Es mas facil ubicar las implementaciones de la funciona de controlador dentro de su codigo JS mediante la eliminacion de la plantilla HTML.' },
      { name: 'Como no tiene que adjuntar manualmente escuchas de eventos de JS, su codigo de ViewModel puede ser logico y sin DOM. Esto hace que sea mas facil de probar.' },
      { name: 'Cuando se destruye un ViewModel, todos los escuchas de eventos se eliminan automaticamente. No tienes que preocuparte por limpiarlo tu mismo.' }
    ]
  }
}

var estilos = {
  divEst: 'divOff',
  btnEst: 'btnOff',
  divEsp: 'divEsp',
  btnEsp: 'btnEsp',
  linea: 'linea',
  fixRight: 'fixRight',
  codResal: 'codResal',
  cmpCod: 'cmpCod',
  wngText: 'wngText',
  ctrl: {
    btnPrs: false
  }
}

var data = {
  contador: 0,
  contenidos: contenidos,
  etl: estilos,
  nombre: 'Usuario',
}

var vm = new Vue({
  el: '#eventos',
  data: data,
  // computed solo enlaza no funcionara con condicionales y se anota como variables
  methods: {
    cambioDeColor: function () {
      if (this.etl.ctrl.btnPrs == true) {
        this.etl.ctrl.btnPrs = false
        this.etl.btnEst = 'btnOn'
        this.etl.divEst = 'divOn'
      } else {
        this.etl.ctrl.btnPrs = true
        this.etl.btnEst = 'btnOff'
        this.etl.divEst = 'divOff'
      }
    },
    mostrarAlert: function (event) {
      alert(`Hola ${this.nombre}!`)
      if (event) {
        alert(event.target.tagName)
      }
    },
    decir: function (mensaje) {
      alert(mensaje)
    },
    advertir: function (mensaje, event) {
      // ahora tenemos acceso al evento nativo
      if (event) event.preventDefault()
      alert(mensaje)
    }
  }
})