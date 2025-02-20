import React from 'react';

const Instrucciones = () => {
    return (
        <div>
            <h1>Examen UF2</h1>
            <h2>Objetivo:</h2>
            <p>
                Crear un proyecto utilizando React y Vite que implemente un juego interactivo de Comecocos con las siguientes características:
            </p>
            <h3>Vista principal:</h3>
            <ul>
                <li>Una cuadrícula de 20x20.</li>
                <li>Un "Comecocos" que comienza en el centro de la cuadrícula.</li>
                <li>Cinco fantasmas posicionados aleatoriamente en la cuadrícula.</li>
                <li>El jugador puede mover al Comecocos utilizando las flechas del teclado.</li>
                <li>Cuando el Comecocos se encuentra en la misma posición que un fantasma, este es eliminado y se suma un punto al marcador.</li>
            </ul>
            <h3>Vista de instrucciones:</h3>
            <p>
                Explica cómo jugar y las reglas del juego, incluyendo el nuevo contador de puntos.
            </p>
            <h3>Puntos adicionales:</h3>
            <ul>
                <li>Mostrar un contador de puntos en la parte superior de la vista principal.</li>
                <li>El juego termina cuando no quedan fantasmas en la cuadrícula.</li>
            </ul>
            <h3>Requisitos técnicos:</h3>
            <ul>
                <li>Usar react-router-dom para la navegación entre las vistas.</li>
                <li>Organizar el código en componentes reutilizables.</li>
                <li>Escribir estilos básicos en un archivo CSS.</li>
                <li>Documentar claramente el código para facilitar su comprensión.</li>
            </ul>
        </div>
    );
};

export default Instrucciones;