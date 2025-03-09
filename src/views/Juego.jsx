import React, { useState, useEffect } from 'react';
import modelo from '../components/cuadricula';
import Cuadricula from '../components/Cuadricula';
import ComeCocos from '../components/ComeCocos';

// Creamos una clase Fantasma con sus propiedades
class Fantasma {
  constructor() {
    this.x;
    this.y;
    this.estado
    this.generaPosicionAleatoria();
  }
  // Método para generar una posición aleatoria dentro de la cuadrícula

  generaPosicionAleatoria() {
    const filas = modelo.matrizCuadricula.length;
    const columnas = modelo.matrizCuadricula[0].length;
    this.x = Math.floor(Math.random() * filas);
    this.y = Math.floor(Math.random() * columnas);
  }
}

const Juego = () => {
  //Guardamos en "filas" y "columnas" las dimensiones de la cuadrícula
  const filas = modelo.matrizCuadricula.length;
  const columnas = modelo.matrizCuadricula[0].length;

  //Guardamos en "filaCentro" y "columnaCentro" la posición inicial del icono de Comecocos (centro de la cuadrícula)
  const filaCentro = Math.floor(filas / 2);
  const columnaCentro = Math.floor(columnas / 2);

  //Inicializamos los estados de la cuadrícula, posición del icono de Comecocos, el icono de Comecocos, fantasmas (en un array que empieza siendo vacío y los puntos del juego)
  const [cuadriculaCC, setCuadriculaCC] = useState(modelo.matrizCuadricula);
  const [posicionIconoCC, setPosicionIconoCC] = useState([filaCentro, columnaCentro]);
  const [iconoCC, setIconoCC] = useState(modelo.matrizComecocos);
  const [fantasmas, setFantasmas] = useState([]);
  const [puntos, setPuntos] = useState(0);

  //Creamos 5 fantasmas en posiciones aleatorias de la cuadrícula, con el UseEffect para que no se cree un bucle infinito
  useEffect(() => {
    const nuevosFantasmas = [];
    for (let i = 0; i < 5; i++) {
      const fantasma = new Fantasma();
      nuevosFantasmas.push(fantasma);
    }
    setFantasmas(nuevosFantasmas);
  }, []);

  //Función para mover el icono de Comecocos con el teclado
  const moverCC = (evento) => {
    setPosicionIconoCC(([fila, columna]) => {
      let nuevaFila = fila;
      let nuevaColumna = columna;

      //Para cada flecha (arriba, abajo, izquierda, derecha) comprobamos si la nueva posición está dentro de la cuadrícula, si lo está, permitimos mover, pero si no, no se moverá
      switch (evento.key) {
        case 'ArrowUp':
          if (fila > 0) nuevaFila--;
          break;
        case 'ArrowDown':
          if (fila < filas - 1) nuevaFila++;
          break;
        case 'ArrowLeft':
          if (columna > 0) nuevaColumna--;
          break;
        case 'ArrowRight':
          if (columna < columnas - 1) nuevaColumna++;
          break;
      }

      setFantasmas((fantasmas) => {
        const fantasmasRestantes = fantasmas.filter(
          (fantasma) => fantasma.x !== nuevaFila || fantasma.y !== nuevaColumna
        );

        if (fantasmasRestantes.length < fantasmas.length) {
          setPuntos(puntos + 1);
        }

        // Verificamos si ya no quedan fantasmas y mostramos el mensaje de victoria
        if (fantasmasRestantes.length === 0) {
          // Aquí directamente mostramos el mensaje en el h2
          alert("¡Ganaste!"); // Usamos un alert o el mensaje puede ser algo más visible en la UI
        }

        return fantasmasRestantes;
      });

      return [nuevaFila, nuevaColumna];
    });
  };

  useEffect(() => {
    window.addEventListener('keydown', moverCC);
    return () => {
      window.removeEventListener('keydown', moverCC);
    };
  }, [posicionIconoCC]);

  return (
    <div>
      <h2>Puntos: {puntos}</h2>
      <ComeCocos iconoCC={iconoCC} />
      <Cuadricula cuadriculaCC={cuadriculaCC} iconoCC={iconoCC} posicionIconoCC={posicionIconoCC} fantasmas={fantasmas} />
    </div>
  );
};

export default Juego;