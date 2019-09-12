const singleThread = () => { 
  const c = console.log,
    p = process

    p.argv[2] = 'Estamos aprendiendo Node.js'
    p.argv[3] = 19
    p.argv[4] = null
    p.argv[5] = true

  // c(p.argv)

    // Esto son los procesos mas importantes de node
    // Por ejemplo el id, cuando se va a trabajar todo el dia disponible, el monitor de control como nodemon, supervisor son los que emplean vistas de manejo de lo que esta circulando por el servidor, y eellos usan el p.id para ver el arquitectura que es p.version y todo lo demas para que sea compaible
    c('---------------------------------------------')
    c('         EL PROCESO DE NODE.JS         ')
    c(`Id del proceso ........... ${p.pid}`)
    c(`Título.................... ${p.title}`)
    c(`Directorio de Node........ ${p.execPath}`)
    c(`Directorio Actual......... ${p.cwd()}`)
    c(`Versión de Node........... ${p.version}`)
    c(`Versiones Dependencias.... ${p.versions}`)
    c(`Plataforma (S.O.)......... ${p.platform}`)
    c(`Arquitectura (S.O.)....... ${p.arch}`)
    c(`Tiempo activo de Node..... ${p.uptime()}`)
    c(`Argumentos del proceso.... ${p.argv}`)
    c('---------------------------------------------')
  // yargs trabaja con esta lista de argumentos

}

export default singleThread

// ::::))) npm start
// [ 'node',
//   'D:\\io\\inf\\aplicacion_guia\\node_js\\classroom\\g7_to_do_cli\\app.js',
//   'Estamos aprendiendo Node.js',
//   19,
//   null,
//   true ]

// Esto nos permite manejar el contenedor ejecutable de node