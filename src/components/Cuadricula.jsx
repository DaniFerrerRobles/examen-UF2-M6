import React from "react";
import "../styles/estilo.css";

export const Cuadricula = ({ cuadriculaCC, posicionIconoCC }) => {
  return (
    <div className="divCuadricula">
      {cuadriculaCC.map((fila, idFila) => (
        <div key={idFila} className="divFila">
          {fila.map((casilla, idCasilla) => {
            // Verificar si esta casilla es donde debe ir el ComeCocos
            const coincidePosicionComeCocos = idFila === posicionIconoCC[0] && idCasilla === posicionIconoCC[1];

            return (
              <div
                key={idCasilla}
                className={`divCasilla ${coincidePosicionComeCocos ? 'coincide' : ''}`}
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