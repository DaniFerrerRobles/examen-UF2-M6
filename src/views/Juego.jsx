import React, { useState } from "react"
import { modelo } from "../components/cuadricula";
import Cuadricula from "../components/Cuadricula";

const Juego = () => {
  const [cuadriculaCC, setCuadriculasCC] = useState(modelo.matriz);

  return (
<div>
      <Cuadricula cuadriculaCC = {cuadriculaCC} />

</div>
  )
}
export default Juego