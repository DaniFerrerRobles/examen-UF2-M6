import React from "react";
import "../styles/estilo.css";

export const ComeCocos = ({ iconoCC }) => {
  return (
    <div className="divCC">
      {iconoCC.map((fila, idFila) => (
        <div key={idFila} className="divFilaCC">
          {fila.map((casilla, idCasilla) => (
            <div
              key={idCasilla}
              className={`divCasillaCC ${casilla === 1 ? "comecocos" : ""}`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ComeCocos;