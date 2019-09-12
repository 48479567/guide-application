//Crea los componentes
import React from 'react';
//Posiciona esos componentes
import { render } from 'react-dom';
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json';
//Al final debemos crear otro componente que obtenga toda la playlist y obtenga a media

const c = console.log,
  app = document.getElementById('app')
  // holaMundo = <h1>Hola Estudiante!</h1>

// ReactDOM.render(que voy a renderizar, donde lo haré);

// ReactDOM.render(<Media/>, app) en vez de eso entonces se hace lo siguientes ver la lina superio de import

render(<Playlist data={data}/>, app)
