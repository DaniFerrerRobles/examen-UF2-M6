import React, { useState } from "react";
import { modelo } from "../components/cuadricula";
import Cuadricula from "../components/Cuadricula";
import ComeCocos from "../components/ComeCocos";

const Juego = () => {
  const filas = modelo.matrizCuadricula.length;
  const columnas = modelo.matrizCuadricula[0].length;

  const filaCentro = Math.floor(filas / 2);
  const columnaCentro = Math.floor(columnas / 2);

  const [cuadriculaCC, setCuadriculaCC] = useState(modelo.matrizCuadricula);
  const [posicionIconoCC, setPosicionIconoCC] = useState([filaCentro, columnaCentro]);
  const [iconoCC, setIconoCC] = useState(modelo.matrizComecocos);

  return (
    <div>
      <Cuadricula cuadriculaCC={cuadriculaCC} />
      <ComeCocos iconoCC={iconoCC} posicionIconoCC={posicionIconoCC} />
    </div>
  );
};

export default Juego;