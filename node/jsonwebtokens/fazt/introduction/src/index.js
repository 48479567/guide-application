const app = require('./app')

require('./database')

function init() {
  app.listen(3000, () => console.log(`Server on Port 3000`))
}

init();