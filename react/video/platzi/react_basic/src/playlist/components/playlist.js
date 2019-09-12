import React, { Component } from 'react';
import Media from './media.js';
import './playlist.css'

class Playlist extends Component {
  render() {
    //En esta parte puedo hacer lo que desee por que esto no esta relacionado con el ciclo de vida de componente
    const playlist = this.props.data.categories[0].playlist,
      playlist2 = this.props.data.categories[1].playlist

    console.log(this.props.data);
    return (
      <div className="Playlist">
        {
          playlist.map((item) => {
          // return <Media title={item.title} key={item.id}/>
          //ES6: Spritoperator descomponer el objeto y enviar todo
          return <Media {... item} key={item.id} />
          })
        }
      </div>
    )
  }
}

export default Playlist;