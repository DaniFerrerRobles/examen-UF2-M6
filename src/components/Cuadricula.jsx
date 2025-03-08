import React from "react";
import "../styles/estilo.css";

export const Cuadricula = ({ cuadriculaCC, posicionIconoCC, fantasmas }) => {
  return (
    <div className="divCuadricula">
      {cuadriculaCC.map((fila, idFila) => (
        <div key={idFila} className="divFila">
          {fila.map((casilla, idCasilla) => {
            const coincidePosicionComeCocos = idFila === posicionIconoCC[0] && idCasilla === posicionIconoCC[1];

            const coincidePosicionFantasma = fantasmas.some(f => f.x === idFila && f.y === idCasilla);

            return (
              <div
                key={idCasilla}
                className={`divCasilla ${coincidePosicionComeCocos ? 'coincide' : ''} ${coincidePosicionFantasma ? 'fantasma' : ''}`}
              >
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Cuadricula;