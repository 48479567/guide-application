import React, { Component } from 'react';

//Esto sirve bastante para validar el tipo de dato que circula y se plasma en cada una de las renderizaciones
import PropTypes from 'prop-types';
import './media.css';

const c = console.log

class Media extends Component {
  // Esto es de ecmascrip7, en vez de hacer tanto rollo de la clase 
  state = {
    author: 'Sergio Espinoza'
  }

  // constructor(props) {
  //   // console.log(this.props.author), esto no funciona por que props no esta definido en este entorno para ello se llama a la propiedad de la clase que esta extendida
  //   super(props)
  //   this.state = {
  //     author: props.author
  //   }
  // //   // Esto es el enlace de la funciona con la clase
  // //   this.handleClick = this.handleClick.bind(this)
  // }

  // para no estar llamando en las propiedades de mi componente se hace lo siguiente
  handleClick = (event) => {
    // c(this.props.image)
    // this.state.author = 'Otro', esto no cambiara
    this.setState({
      author: 'Ricardo Celis'
    })
  }
  render() {
    return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img
            src= {this.props.cover}
            alt=""
            width={240}
            height={160}
            className="Media-image"
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  // Para el tipo de validaciones, cuando das un valor que haga tal cosa y si es otro que cambie su comportamiento
  type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;