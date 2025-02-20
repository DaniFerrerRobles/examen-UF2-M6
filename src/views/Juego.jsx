import React, { useState } from "react"
import { modelo } from "../components/cuadricula";
import Cuadricula from "../components/Cuadricula";

const Juego = () => {
  const [cuadriculaCC, setCuadriculasCC] = useState(modelo.matrizCuadricula);
  const [posicionComecocos, setPosicionComecocos] = useState(modelo.matrizCuadricula[10][10]);

  return (
<div>
      <Cuadricula cuadriculaCC = {cuadriculaCC} />

</div>
  )
}
export default Juego