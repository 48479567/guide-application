var contenidos = {
  basicUsage: {
    text: {
      campCod1: `HTML

        <input v-model="message" placeholder="editame">
        <span>El mensaje es: {{ message }}</span>`
    },
    multilineText: {
      campCod1: `HTML
      
        <span>El mensaje multilinea es:</span>
        <p>
          {{ message }}
        </p>
        <textarea 
          v-model="message" 
          placeholder="añadir multiples lineas"
          ></textarea>`,
      text1: '<textarea>{{ text }}</textarea>'
    },
    checkBox: {
      campCod1: `
        ::::::::::::::::::
        HTML
        ::::::::::::::::::
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>
        
        ::::::::::::::::::
        JS
        ::::::::::::::::::
        var data = {
          .....
          checked: 'true'
        }
        new Vue({
          .....
          data: data,
          .....
        })`,
      campCod2: `
        ::::::::::::::::::
        HTML
        ::::::::::::::::::
        <div>
          <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
          <label for="jack">Jack</label>
          <input type="checkbox" id="john" value="John" v-model="checkedNames">
          <label for="john">John</label>
          <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
          <label for="mike">Mike</label>
          <br>
          <span>Nombres Seleccionados: {{ checkedNames }}</span>
        </div>

        ::::::::::::::::::
        JS
        ::::::::::::::::::
        var data = {
          .....
          checkedNames: []
        }
        new Vue({
          .....
          data: data,
          .....
        })`
    },
    radio: {
      campCod1: `
      ::::::::::::::::::
      HTML
      ::::::::::::::::::
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label><br>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label><br>
      <span>Seleccionado: {{ picked }}</span>
      
      ::::::::::::::::::
      JS
      ::::::::::::::::::
      var data = {
        .....
        picked: ''
      }
      new Vue({
        .....
        data: data,
        .....
      })`
    },
    select: {
      text1: '<select>',
      campCod1: {
        html: `HTML
          
          <select v-model="selected">
            <option disabled value="">Seleccionar una Opcion</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
          <span>Seleccionado: {{ selected }}</span>`,
        js: `JS

          var data = {
            .....
            selected: '' // Si esta vacio sale la parte desabilitada
          }
          new Vue({
            .....
            data: data,
            .....
          })`
      },
      campCod2: {
        html: `HTML

          <div>
            <select v-model="selected_mult" multiple>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
            <br>
            <span>Seleccionado(s): {{ selected_mult }}</span>
          </div>`,
        js: `JS

          var data = {
            .....
            selected_mult: [] //con '' tiene el mismo funcionamiento
          }
          new Vue({
            .....
            data: data,
            .....
          })`
      },
      list1: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
      campCod3: {
        html: `HTML

          <div>
            <select v-model="sel_mul_din">
              <option v-for="option in cnt.basicUsage.select.list1" :value="option.value">
                {{ option.text }}
              </option>
            </select>
            <span>Selecionado(s): {{ sel_mul_din }}</span>
          </div>`,
        js: `JS

          var contenidos = {
            basicUsage: {
              .........
              select: {
                ......
                list1: [
                  { text: 'One', value: 'A' },
                  { text: 'Two', value: 'B' },
                  { text: 'Three', value: 'C' }
                ],
                ......
                }
              }
            }
          }..........
          var data = {
            .....
            sel_mul_din: 'A'
          }
          new Vue({
            .....
            data: data,
            .....
          })`
      }
    }
  },
  valueBinding: {
    begin: {
      campCod1: {
        html: `HTML

          <!-- cuando se selecciona, 'picked' es 'a' -->
          <input type="radio" v-model="picked" value="a"/>
          
          <!-- 'toggle' puede ser verdadero o falso -->
          <input type="checkbox" v-model="toggle"/>
          
          <!-- Cuando la primera opcion esta seleccionada 'selected' es 'abc'. -->
          <select v-model="selected">
            <option value="abc">ABC</option>
          </select>`
      }
    },
    checkBox: {
      campCod1: {
        html: `HTML
          
          <div>
            <input type="checkbox" v-model="toggle" true-value="yes" false-value="no">
            <span>{{ toggle }}</span>
          </div>`,
        js: `JS

          var data = {
            .....
            toggle: ''
          }
          new Vue({
            .....
            data: data,
            .....
          })
          /*
          Cuando esta seleccionado
          vm.toggle === 'yes'
          Cuando esta deseleccionado
          vm.toggle === 'no'  
          */`
      }
    },
    radio: {
      campCod1: {
        html: `HTML

          <input type="radio" v-model="pick" :value="a">
          <span>{{ a }}</span>
          <input v-model="pick">`,
        js: `JS

          var data = {
            .....
            pick: 'valor',
            a: 'valor'
          }
          new Vue({
            .....
            data: data,
            .....
          })
          /*
          Cuando esta seleccionado
          vm.pick === vm.a  
          */`
      }
    },
    select: {
      campCod1: {
        html: `HTML

          <div>
            <select v-model="selected2">
            <!-- objeto lineal en texto -->
            <option :value="{ number: 123 }">123</option>
            </select>
            <span>{{ selected2.number }}</span>
          </div>`,
        js: `JS
                  
          var data = {
            .....
            selected2: ''
          }
          new Vue({
            .....
            data: data,
            .....
          })
          /*
          Cuando esta seleccionado
          typeof vm.selected2 // => 'object'
          vm.selected2.number // =>123 
          */`
      }
    }
  },
  modifiers: {
    lazy: {
      campCod1: {
        html: `HTML

          <div>
            <!-- Sincronizando después de "input" en lugar de "change", cuando se da enter o se envÍa-->
            <input v-model.lazy="msg">
            <span>{{ msg }}</span>
          </div>`,
        js: `JS
            var data = {
              .....
              msg: ''
            }`
      }
    },
    number: {
      campCod1: {
        html: `HTML

          <div>
            <input v-model.number="age" type="number">
            <!-- Esto es para que Vue lo interprete como numero y no como texto-->
            <span>{{ age + 20 }}</span>        
          </div>`,
        js: `JS

          var data = {
                .....
                age: ''
              }`
      }
    },
    trim: {
      campCod1: {
        html: `HTML

          <div>
            <input v-model.trim="msg2">
            <span>{{ msg2 }}</span>
          </div>`,
        js: `JS

          var data = {
            .....
            msg2: ''
          }`
      }
    }
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
  cnt: contenidos,
  etl: estilos,
  nombre: 'Usuario',
  message: '',
  checked: 'true',
  checkedNames: [],
  picked: '',
  selected: '', // Si esta vacio sale la parte desabilitada
  selected_mult: [], //con '' tiene el mismo funcionamiento
  sel_mul_din: 'A',
  toggle: '',
  pick: 'valor',
  a: 'valor',
  selected2: '',
  msg: '',
  age: '',
  msg2: ''
}

var vm = new Vue({
  el: '#input',
  data: data,
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
    }
  }
})