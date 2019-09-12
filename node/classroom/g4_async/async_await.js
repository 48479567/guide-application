const c = console.log

c('********Programacion Asincrona*********')

c('*****Async - Await Functions (Funciones Asincronas)******')

//Las funciones asincronas utilizan promesas 

const cuadrado = value => { 
  return new Promise((resolve, reject) => { 
    setTimeout(() => { 
      resolve({value: value, result: value * value})
    },0 | Math.random() * 1000)
  })
}

console.log('\nFormaSincrona\n')
async function cuadrados() {
  // Esto tiene que hacerlo de foma asincrona, la impresion de los cuadrados
  c('Inicio Functions')
  let obj = cuadrado(0)
  c(`Function: ${obj.value}, ${obj.result}`)
  obj = cuadrado(1)
  c(`Function: ${obj.value}, ${obj.result}`)
  obj = cuadrado(2)
  c(`Function: ${obj.value}, ${obj.result}`)
  c('Fin Functions')
}
// manda undefines porque esto no es lo que se esperaba por que esto se da de largo y no ejecuta el setTimeOut, esto se resuelve con await
cuadrados()

async function cuadradosWithAwait() {
  // Esto tiene que hacerlo de foma asincrona, la impresion de los cuadrados
  c('Inicio Functions')
  let obj = await cuadrado(0)
  c(`Function: ${obj.value}, ${obj.result}`)
  obj = await cuadrado(1)
  c(`Function: ${obj.value}, ${obj.result}`)
  obj = await cuadrado(2)
  c(`Function: ${obj.value}, ${obj.result}`)
  obj = await cuadrado(3)
  c(`Function: ${obj.value}, ${obj.result}`)
  obj = await cuadrado(4)
  c(`Function: ${obj.value}, ${obj.result}`)
  obj = await cuadrado(5)
  c(`Function: ${obj.value}, ${obj.result}`)
  obj = await cuadrado(6)
  c(`Function: ${obj.value}, ${obj.result}`)
  obj = await cuadrado(7)
  c(`Function: ${obj.value}, ${obj.result}`)
  obj = await cuadrado(8)
  c(`Function: ${obj.value}, ${obj.result}`)
  obj = await cuadrado(9)
  c(`Function: ${obj.value}, ${obj.result}`)
  obj = await cuadrado(10)
  c(`Function: ${obj.value}, ${obj.result}`)
  c('Fin Functions')
  
}

cuadradosWithAwait()

console.log('\nFormaAsyncrona\n')