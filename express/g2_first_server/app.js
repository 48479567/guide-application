const express = require('express');
const path = require('path'); 
const app = express();
const bodyParser = require('body-parser'); 

const routes = require('./routes/index');

// setting
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




//middle ware
app.use((req, res, next) => { 
  console.log(`${req.url} - ${req.method}`);
  next();
});
app.use(bodyParser.json());//formato json
app.use(bodyParser.urlencoded({extended : false}));



// routes
app.use(routes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//start the server
app.listen(app.get('port'), () => { 
  console.log("3000 -x ", app.get('port'));
});
//coloca puerto local o 3000

