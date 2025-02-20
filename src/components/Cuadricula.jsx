import React from "react";
import "../styles/estilo.css";

export const Cuadricula = ({ cuadriculaCC }) => {
  return (
    <div className="divCuadricula">
      {cuadriculaCC.map((fila, idFila) => (
        <div key={idFila} className="divFila">
          {fila.map((casilla, idCasilla) => (
            <div key={idCasilla} style={{width: "40px", height: "40px", border: "1px solid", justifyContent: "center"}}></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Cuadricula;