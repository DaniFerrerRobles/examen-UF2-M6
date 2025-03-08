import React from "react";
import "../styles/estilo.css";  // Asegúrate de que el archivo CSS esté correctamente importado.

export const Cuadricula = ({ cuadriculaCC }) => {
  return (
    <div className="divCuadricula">
      {cuadriculaCC.map((fila, idFila) => (
        <div key={idFila} className="divFila">
          {fila.map((casilla, idCasilla) => (
            <div key={idCasilla} className="divCasilla"></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Cuadricula;