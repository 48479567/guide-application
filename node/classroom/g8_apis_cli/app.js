const places = require('./api/places'),
  weather = require('./api/weather'),
  argv = require('yargs').options({
    address: {
      alias: 'a',
      desc: 'Direccion del lugar o la ciudad para obtener el clima',
      demand: true
    }
  }).argv

  // La direccion va a ser variable por eso let
let getTemp = async address => { 
  // Aqui si se requiere la carga de la peticion, ya no va a ser con settimeout
  try {
    //funcion que ejecuta la sincronia con await

    // tanto coords como temp tienen que esperar que address y coords(con sus atributos) se terminen de ejecutar o aparezca el valor (esto con await, controlador funcional asincrono)
    let coords = await places.getPlace(address),
      temp = await weather.getWeather(coords.lat, coords.lng)
    return `El clima en ${coords.address} es de ${temp}°C` 
  } catch (e) {
    return `No se pudo determinar el clima en ${address}`  
  }
}

getTemp(argv.address)
  .then(message => console.log(message))
  .catch(err => console.log(err))

