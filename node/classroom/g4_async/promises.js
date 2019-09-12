
const c = console.log

c('********Programacion Asincrona*********')

c('*****Promises******')

//Para tratar al codigo de cascada, piramide del infierno

// Las promesas devuelve dos objetos, el que resuelve el problema o el que la rechaza

const cuadrado = value => { 
  return new Promise((resolve, reject) => { 
    setTimeout(() => { 
      resolve({value: value, result: value * value})
    },0 | Math.random() * 1000)
  })
}

// then: metodo que se resuelve o si se resuelve la promesa esta es la siguiente ejecucion
cuadrado(0)
  .then(obj => { 
    c('Inicio Promise')
    c(`Promises: ${obj.value}, ${obj.result}`)
    return cuadrado(1)
  })
  .then(obj => { 
    c(`Promises: ${obj.value}, ${obj.result}`)
    return cuadrado(2)
  })
  .then(obj => { 
    c(`Promises: ${obj.value}, ${obj.result}`)
    return cuadrado(3)
  })
  .then(obj => { 
    c(`Promises: ${obj.value}, ${obj.result}`)
    return cuadrado(4)
  })
  .then(obj => { 
    c(`Promises: ${obj.value}, ${obj.result}`)
    return cuadrado(5)
  })
  .then(obj => { 
    c(`Promises: ${obj.value}, ${obj.result}`)
    return cuadrado(6)
  })
  .then(obj => { 
    c(`Promises: ${obj.value}, ${obj.result}`)
    return cuadrado(7)
  })
  .then(obj => { 
    c(`Promises: ${obj.value}, ${obj.result}`)
    return cuadrado(8)
  })
  .then(obj => { 
    c(`Promises: ${obj.value}, ${obj.result}`)
    return cuadrado(9)
  })
  .then(obj => { 
    c(`Promises: ${obj.value}, ${obj.result}`)
    return cuadrado(10)
  })
  .then(obj => {
    c(`Promises: ${obj.value}, ${obj.result}`)
    c('Fin Promise')
  })
  .catch(err => c(err))

  c('******Promises hell yeiii!!!*****')
  // En cada callback tienes que estar manipulando los errores en cada uno de ellos, en cambio en promesas no es asi ya que esto se maneja con catch al final de todo el flujo, ademas hay un mejor orden de trabajo