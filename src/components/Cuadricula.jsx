import React from "react";
import "../styles/estilo.css";

//Creamos y exportamos la función Cuadricula que recibe como parámetros la cuadrícula, la posición del Comecocos y los fantasmas
export const Cuadricula = ({ cuadriculaCC, posicionIconoCC, fantasmas }) => {
  return (
    <div className="divCuadricula">
      {cuadriculaCC.map((fila, idFila) => (
        <div key={idFila} className="divFila">
          {fila.map((casilla, idCasilla) => {
            const coincidePosicionComeCocos = idFila === posicionIconoCC[0] && idCasilla === posicionIconoCC[1];
//Comprobamos si la posición del fantasma coincide con la posición del Comecocos

//Comprobamos si la posición del fantasma coincide
            const coincidePosicionFantasma = fantasmas.some(f => f.x === idFila && f.y === idCasilla);

            //Devolvemos la casilla con la clase coincide si la posición del Comecocos coincide con la casilla, y la clase fantasma si la posición del fantasma coincide con la casilla
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