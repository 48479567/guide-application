// Para sobreescribir

const fs = require('fs'),
  path = require('path'),
  todoData = path.join(__dirname, 'todo_data.json') // en un solo path valido y te forma la ruta completa del archivo

let todos = []

const loadData = () => { 
  try {
    todos = require(todoData)
  } catch (err) {
    todos = []
  }
}

const saveData = () => { 
  let data = JSON.stringify(todos)

  fs.writeFile(todoData, data, err => {
    if (err) throw new Error('No se pudo guardar la tarea', err)
  })
}

const create = description => {
  loadData()
  let toDo = {
    description,
    completed: false
  }

  todos.push(toDo)
  saveData()
  return 'Tarea Creada'
}

const read = () => { 
  loadData()
  return todos
}



const update = (description, completed = true) => { 
  loadData()
  let index = todos.findIndex(todo => todo.description === description)
  if (index >= 0) {
    // para windows JSON.parse(completed)
    todos[index].completed = completed
    saveData()
    return true
  } else {
    return false
  }
}

//Cuidado delete es una operacion en javascript, eliminar un objeto de un array
const del = (description) => { 
  loadData()
/*
  let newTodos = todos.filter(todo => todo.description !== description)

  if (todos.length == newTodos.length) {
    return 'No existe Tarea'
  } else {
    todos = newTodos
    saveData()
    return 'Tarea Eliminada'
  }*/

  let index = todos.findIndex(todo => todo.description === description)
  if (index >= 0) {
    todos.splice(index, 1)
    saveData()
    return true
  } else {
    return false
  }

}

module.exports = {
  create,
  read,
  update,
  del
}