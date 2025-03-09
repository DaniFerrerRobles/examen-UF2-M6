import React from "react";
import "../styles/estilo.css"; // Asegúrate de tener los estilos correctos

const ComeCocos = ({ iconoCC }) => {
  return (
    <div>
      {iconoCC.map((fila, idFila) => (
        <div key={idFila} className="divFila">
          {fila.map((casilla, idCasilla) => {
            return (
              <div key={idCasilla} >
                {casilla} 
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default ComeCocos;