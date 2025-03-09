import React from "react";
import "../styles/estilo.css";


//Creamos y exportamos la función ComeCocos que recibe como parámetro el iconoCC y lo mappeamos para mostrarlo en la pantalla
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