import React, { useState, useEffect } from 'react';
import modelo from '../components/cuadricula';
import Cuadricula from '../components/Cuadricula';
import ComeCocos from '../components/ComeCocos';

class Fantasma {
  constructor() {
    this.x;
    this.y;
    this.estado = "vivo";
    this.generaPosicionAleatoria();
  }

  generaPosicionAleatoria() {
    const filas = modelo.matrizCuadricula.length;
    const columnas = modelo.matrizCuadricula[0].length;
    this.x = Math.floor(Math.random() * filas);
    this.y = Math.floor(Math.random() * columnas);
  }
}

const Juego = () => {
  const filas = modelo.matrizCuadricula.length;
  const columnas = modelo.matrizCuadricula[0].length;

  const filaCentro = Math.floor(filas / 2);
  const columnaCentro = Math.floor(columnas / 2);

  const [cuadriculaCC, setCuadriculaCC] = useState(modelo.matrizCuadricula);
  const [posicionIconoCC, setPosicionIconoCC] = useState([filaCentro, columnaCentro]);
  const [iconoCC, setIconoCC] = useState(modelo.matrizComecocos);
  const [fantasmas, setFantasmas] = useState([]);

  useEffect(() => {
    const nuevosFantasmas = [];
    for (let i = 0; i < 5; i++) {
      const fantasma = new Fantasma();
      nuevosFantasmas.push(fantasma);
    }
    setFantasmas(nuevosFantasmas);
  }, []);

  const moverCC = (evento) => {
    let [fila, columna] = posicionIconoCC;

    switch (evento.key) {
      case 'ArrowUp':
        if (fila > 0) fila--;
        break;
      case 'ArrowDown':
        if (fila < filas - 1) fila++;
        break;
      case 'ArrowLeft':
        if (columna > 0) columna--;
        break;
      case 'ArrowRight':
        if (columna < columnas - 1) columna++;
        break;
      default:
        return;
    }
    setPosicionIconoCC([fila, columna]);
  };

  useEffect(() => {
    window.addEventListener('keydown', moverCC);
    return () => {
      window.removeEventListener('keydown', moverCC);
    };
  }, [posicionIconoCC]);

  return (
    <div>
      <ComeCocos iconoCC={iconoCC} />
      <Cuadricula cuadriculaCC={cuadriculaCC} iconoCC={iconoCC} posicionIconoCC={posicionIconoCC} fantasmas={fantasmas} />
    </div>
  );
};

export default Juego;