// src/components/Fantasma.js

class Fantasma {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.estado = "vivo"; // "vivo" o "muerto"
    }
  
    // Método para generar una posición aleatoria dentro de la cuadrícula
    generaPosicionAleatoria(tamañoCuadricula) {
      this.x = Math.floor(Math.random() * tamañoCuadricula.length);
      this.y = Math.floor(Math.random() * tamañoCuadricula[0].length);
    }
  }
  
  export default Fantasma;
  