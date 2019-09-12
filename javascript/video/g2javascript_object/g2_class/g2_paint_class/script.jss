class Forma {
  constructor(alto, ancho, color) {
    this.alto = alto
    this.ancho = ancho
    this.color = color
  }
  dibujar() {
    return document.body.innerHTML = `
      <div 
        style="
          height:${this.alto}px;
          width:${this.ancho}px;
          background-color:${this.color}">
      </div>`
  }
}

class Cuadrado extends Forma {
  constructor(lado, color) {
    super(lado, lado, color)
  }
}

class Rectangulo extends Forma {
  constructor(lado, color) {
    super(lado, lado*2, color)
  }
}

class Circulo extends Forma {
  constructor(radio, color) {
    super(radio, radio, color)
  }
  dibujarCirculo() {
    return document.body.innerHTML = `
      <div 
        style="
          height:${this.alto}px;
          width:${this.ancho}px;
          background-color:${this.color};
          border-radius:${this.ancho}px">
      </div>`
  }
}

let forma1 = new Forma(220, 400, 'red')
let cuadrado1 = new Cuadrado(20, 'yellow')
let rectangulo1 = new Rectangulo(50, 'green')
let circulo1 = new Circulo(40, 'black')