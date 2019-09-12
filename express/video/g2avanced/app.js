const express = require('express'),
  // este modulo para el manejo de errores que te recomienda express
  createError = require('http-errors'),
  // Logger en la terminal
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  //manejor de session y favicon
  favicon = require('serve-favicon'),
  session = require('express-session'),
  sassMiddleware = require('node-sass-middleware'),
  browserify_express = require('babelify-express'),
  hbs = require('hbs'),
  hbsHelpers = require('./views/helpers'),
  routes = require('./routes/'),
  app = express()

hbs.registerPartials(`${__dirname}/views/partials`)
// Tres metodos, set para establecer parametros a usar, use para middlewares y get obtener alguna caracteristica de mi aplicacion
app
  .set('views', `${__dirname}/views`)
  .set('view engine', 'hbs')
  .set('port', process.env.PORT || 3000)
  .use(favicon(`${__dirname}/public/img/favicon.png`))
  .use(logger('dev'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(cookieParser())
  .use(session({
    secret: 'sshhhhh',
    saveUninitialized: true,
    resave: true
  }))
  .use(sassMiddleware({
    src: `${__dirname}/public`,
    dest: `${__dirname}/public`,
    indentedSyntax: false, // true = sass, false = scss
    sourceMap: true,
    outputStyle: 'compressed'
  }))
  .use(browserify_express({
    entry: `${__dirname}/public/js/`,
    // carpeta q va a viligar cuando se hace cambios
    watch: `${__dirname}/public/js/`,
    mount: '/js/script.js',
    verbose: true,
    minify: true,
    bundle_opts: {debug: true}
  }))
  //Esto es como el htdocs de apache
  .use(express.static(`${__dirname}/public`))
  .use(routes)
  .use((req, res, next) => next(createError(404)))
  .use((err, req, res, next) => {
    res.status(err.status || 500)
    res.render('error', {err})
  })

module.exports = app