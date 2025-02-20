import React, { useState } from "react"
import { modelo } from "../components/cuadricula";
import Cuadricula from "../components/Cuadricula";
import ComeCocos from "../components/ComeCocos";

const Juego = () => {
  const [cuadriculaCC, setCuadriculasCC] = useState(modelo.matrizCuadricula);
  const [posicionIconoCC, setIPosicionIonoCC] = useState(modelo.matrizCuadricula[10][10]);
  const [iconoCC, setIconoCC] = useState(modelo.matrizComecocos);

  return (
<div>
      <Cuadricula cuadriculaCC = {cuadriculaCC} />
      <ComeCocos iconoCC = {iconoCC} />

</div>
  )
}
export default Juego