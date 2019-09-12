
// Este es algo extraño, esto permite crear la lista de comandos, es un practica un poco rara en node, y aqui se defime todos los comandos para la lista de la aplicacion.

  //.command('etiquetaAccion', 'Descripcion', 'ListaDeArgumentos') , este ultimo da los argumentos para que la lista se cree, estos son propios de la lina de comando como demand:, tambien como sus alias, ejm: --global, y tambien podemos crear los nuestros

  // En read no se necesitara otra cosa que leer mas que es archivo json
const description = {
  // esto especifica si se requiere de commandos
  demand: true,
  alias: 'd',
  desc: `Descripcion de la tarea por hacer`
}, completed = {
  default: true,
  alias: 'c',
  desc: 'Cambia el estado de la tarea (completada o pendiente)'
}

const argv = require('yargs')
  .command('create', 'Crear una tarea por hacer', {description})
  .command('read', 'Lee todas las tareas por hacer') 
  .command('update', 'Actualiza el estado de una tarea', {description, completed})
  .command('delete', 'Borra una tarea de la Lista', {description})
  .help() // Ayuda de los paquetes yargs
  .argv // Internamente este atributo hace que todo esto que se ponga en agregacion a los parametros de node
 // Aqui directo se define los commandos

 module.exports = {argv}