// import singleThread from './my_modules/single_thread'
// singleThread()

// Lista de tareas que no se hizo en rojo, los que ya se hizo en verde, ect.

const colors = require('colors'),
  c = console.log
  todoCli = require('./my_modules/todo_commands').argv,
  todoList = require('./my_modules/todo_list')

   // esta es lo fomra de llamar al parametro de la unidad segun la documentacion
   let toDoCommand = todoCli._[0]

   switch (toDoCommand) {
     case 'create':
       let todo = todoList.create(todoCli.description)
       c(todo.blue)
       break
     case 'read':
       let todos = todoList.read()    
       for (let todo of todos) {
         if (todo.completed) {
           c(colors.green('✔️', todo.description))
         } else {
           c(colors.red('❌', todo.description))
         }
       }
       c('Comando Read')
       break
     case 'update':
       let updated = todoList.update(todoCli.description, todoCli.completed)
       if (updated) {
         c(`${todoCli.description} Terminada`.blue)
       } else {
         c(`No se halló ${todoCli.description}`.red)
       }
       break
     case 'delete':
       let deleted = todoList.del(todoCli.description)
       if (deleted) {
         c(`${todoCli.description} Borrada`.yellow)
       } else {
        c(`No se halló ${todoCli.description}`.red)
       }
       break
     default:
     c('Este comando no existe, ejecuta la opcion --help para mostrar la ayuda'.rainbow)
       break
   }