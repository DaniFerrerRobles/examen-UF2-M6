import React, { useState, useEffect } from 'react';
import modelo from '../components/cuadricula';
import Cuadricula from '../components/Cuadricula';
import ComeCocos from '../components/ComeCocos';

// Clase Fantasma
class Fantasma {
  constructor() {
    this.x
    this.y
    this.estado = "vivo";
    this.generaPosicionAleatoria();
  }

  generaPosicionAleatoria() {
    const filas = modelo.matrizCuadricula.length;
    const columnas = modelo.matrizCuadricula[0].length;
    this.x = Math.floor(Math.random() * filas);  // Asigna una fila aleatoria
    this.y = Math.floor(Math.random() * columnas);  // Asigna una columna aleatoria
  }
}

const Juego = () => {
  const filas = modelo.matrizCuadricula.length;
  const columnas = modelo.matrizCuadricula[0].length;

  const filaCentro = Math.floor(filas / 2);  // Encontrar la fila central
  const columnaCentro = Math.floor(columnas / 2);  // Encontrar la columna central

  // Estado para la cuadrícula, el ComeCocos y su posición
  const [cuadriculaCC, setCuadriculaCC] = useState(modelo.matrizCuadricula);
  const [posicionIconoCC, setPosicionIconoCC] = useState([filaCentro, columnaCentro]);  // Establecer la posición en el centro
  const [iconoCC, setIconoCC] = useState(modelo.matrizComecocos);

  // Estado para los fantasmas
  const [fantasmas, setFantasmas] = useState([]);

  // Generar los 5 fantasmas
  useEffect(() => {
    const nuevosFantasmas = [];
    for (let i = 0; i < 5; i++) {
      const fantasma = new Fantasma();  // Crear una nueva instancia de Fantasma
      nuevosFantasmas.push(fantasma);   // Añadirlo al array de fantasmas
    }
    setFantasmas(nuevosFantasmas);  // Actualizar el estado con los nuevos fantasmas
  }, []); // El array vacío asegura que esto solo se ejecute una vez cuando el componente se monte

  return (
    <div>
      <ComeCocos iconoCC={iconoCC} />
      <Cuadricula cuadriculaCC={cuadriculaCC} iconoCC={iconoCC} posicionIconoCC={posicionIconoCC} fantasmas={fantasmas} />
    </div>
  );
};

export default Juego;