import modelo from './cuadricula';

class Fantasma {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.estado = 'vivo';
    this.generaPosicionAleatoria();
  }

  generaPosicionAleatoria() {
    this.x = Math.floor(Math.random() * modelo.matrizCuadricula.length);
    this.y = Math.floor(Math.random() * modelo.matrizCuadricula.length);
  }
}

    const fantasmas = [];
    for (let i = 0; i < 5; i++) {
      const fantasma = new Fantasma();
      fantasmas.push(fantasma);
    }

export default FantasmaComponent;
  