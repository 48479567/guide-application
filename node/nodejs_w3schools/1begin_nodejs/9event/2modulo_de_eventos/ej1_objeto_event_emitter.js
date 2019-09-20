/*
Módulo de eventos
Node.js tiene un módulo incorporado, llamado "Eventos", donde puedes crear, disparar y escuchar tus propios eventos.
Para incluir el módulo de eventos incorporado, use el require() método. Además, todas las propiedades y métodos de eventos son una instancia de un objeto EventEmitter. Para poder acceder a estas propiedades y métodos, crea un objeto EventEmitter:

var events = require('events');
var eventEmitter = new events.EventEmitter();

El objeto EventEmitter
Puede asignar manejadores de eventos a sus propios eventos con el objeto EventEmitter.

En el siguiente ejemplo, hemos creado una función que se ejecutará cuando se active un evento de "grito".

Para disparar un evento, use el emit()método.

*/

var events = require('events');
var eventEmitter = new events.EventEmitter();

//Crear un controlador de eventos:
var myEventHandler = function(){
  console.log("I Hear a Scream");
}

// Asigna el manejador de eventos a un evento:
eventEmitter.on('scream', myEventHandler);

//Dispara el evento 'scream':
eventEmitter.emit('scream');

//C:\Users\ASUS\nodejs_w3schools\9event\2modulo_de_eventos>node ej1_objeto_event_emitter.js
