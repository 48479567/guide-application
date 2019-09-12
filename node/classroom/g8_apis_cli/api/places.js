// con google.maps conexion del api de google.maps
const axios = require('axios'),
  getPlace = async address => {
    // esto para caracteres ajenos al ingles
    let encodedUrl = encodeURI(address),
      res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`)

    if(res.data.status === 'ZERO_RESULT') {
      throw new Error(`No hay resultados para el lugar ${address}`)
    }
    // Esto para el completado de nombres por que hay algunos lugar que tienen nombres diferentes a lo que solemos llamarle. Result es un arreglo en el formato humano, esto lo que haces es coincidir, es por eso el arreglo 
    let location = res.data.results[0],
    // Geometry: Este objeto trae la longitud y latitud de forma independiente
      coords = location.geometry.location

      return {
        address: location.formatted_address,
        lat: coords.lat,
        lng: coords.lng
      }
  }

module.exports = {getPlace}