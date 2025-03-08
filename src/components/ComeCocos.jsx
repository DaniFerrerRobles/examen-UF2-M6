import React from "react";
import "../styles/estilo.css"; // Importamos el archivo de estilos

export const ComeCocos = ({ iconoCC, posicionIconoCC }) => {
  return (
    <div className="divCC">
      {iconoCC.map((fila, idFila) => (
        <div key={idFila} className="divFilaCC">
          {fila.map((casilla, idCasilla) => {
            const esComeCocos = idFila === posicionIconoCC[0] && idCasilla === posicionIconoCC[1];

            return (
              <div
                key={idCasilla}
                className={`divCasillaCC ${esComeCocos ? "coincide" : casilla === 1 ? "noCoincide" : ""}`}
              ></div>
            );
          })}
        </div>
      ))}
    </div>
  );
}; // Recorremos la matriz de iconoCC y pintamos las casillas, además de verificar la posición del ComeCocos

export default ComeCocos;