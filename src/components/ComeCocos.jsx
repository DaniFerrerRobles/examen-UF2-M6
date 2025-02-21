import React from "react";
import "../styles/estilo.css";
//importamos

export const ComeCocos = ({ iconoCC }) => {
  return (
    <div className="divCC">
      {iconoCC.map((fila, idFila) => (
        <div key={idFila} className="divFilaCC">
          {fila.map((casilla, idCasilla) => (
            <div
              key={idCasilla}
              className={`divCasillaCC ${casilla === 1 ? "coincide" : "noCoincide"}`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};//recorremos la matriz de iconoCC y pintamos las casillas que coinciden con 1 y las que no coinciden con 0

export default ComeCocos;