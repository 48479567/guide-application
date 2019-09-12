const calculadora = require('./calculator'),
  c = console.log

c(`Suma: ${calculadora.sumar(12, 3)}`)
c(`Resta: ${calculadora.restar(12, 3)}`)
c(`Multiplicacion: ${calculadora.multiplicar(12, 3)}`)
c(`Division: ${calculadora.dividir(12, 3)}`)


// modulos de ecmascripts no esta habilitado en node todavia por ello se utiliza el transpilador de babel, esto quiere decir que a diferencia de un compilador que genera programas ejecutables a traves de una maquina tanto fisica como virtual (ejm: Java), esto es generar programas ejecutables con otro programa