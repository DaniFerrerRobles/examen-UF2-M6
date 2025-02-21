import React, { useState } from "react";
import { modelo } from "../components/cuadricula";
import Cuadricula from "../components/Cuadricula";
import ComeCocos from "../components/ComeCocos";

const Juego = () => {
  const fila = Math.floor(modelo.matrizCuadricula.length / 2); //calculamos la fila y columna donde se va a pintar el icono del comecocos en el centro de la cuadricula
  const columna = Math.floor(modelo.matrizCuadricula.length / 2); 

  const inicialIconoCC = modelo.matrizComecocos.map((fila, i) => 
    fila.map((casilla, j) => {
      if (i === fila && j === columna) {
        return 1;
      }
      return 0;
    })
  ); //recorremos con .map el CC y lo comparamos con la cuadricula para colocarlo en el centro

  const [cuadriculaCC, setCuadriculasCC] = useState(modelo.matrizCuadricula);
  const [iconoCC, setIconoCC] = useState(inicialIconoCC);
  const [posicionIconoCC, setPosicionIconoCC] = useState({ fila, columna});

  return (
    <div>
      <Cuadricula cuadriculaCC={cuadriculaCC} /> //pintamos la cuadricula
      <ComeCocos iconoCC={iconoCC} posicion={posicionIconoCC} /> //pintamos el icono del comecocos
    </div>
  );
};

export default Juego;