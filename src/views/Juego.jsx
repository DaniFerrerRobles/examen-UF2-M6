import React, { useState } from 'react';
import modelo from '../components/cuadricula';
import Cuadricula from '../components/Cuadricula';
import ComeCocos from '../components/ComeCocos';

const Juego = () => {
  const filas = modelo.matrizCuadricula.length;
  const columnas = modelo.matrizCuadricula[0].length;

  const filaCentro = Math.floor(filas / 2);  // Encontrar la fila central
  const columnaCentro = Math.floor(columnas / 2);  // Encontrar la columna central

  // Estado para la cuadrícula, el ComeCocos y su posición
  const [cuadriculaCC, setCuadriculaCC] = useState(modelo.matrizCuadricula);
  const [posicionIconoCC, setPosicionIconoCC] = useState([filaCentro, columnaCentro]);  // Establecer la posición en el centro
  const [iconoCC, setIconoCC] = useState(modelo.matrizComecocos);

  return (
    <div>
      <ComeCocos iconoCC={iconoCC} />
      <Cuadricula cuadriculaCC={cuadriculaCC} iconoCC={iconoCC} posicionIconoCC={posicionIconoCC} />

    </div>
  );
};

export default Juego;