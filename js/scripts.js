// Cambia el color de fondo al hacer clic en el botón
const boton = document.querySelector('#miBoton');
let fondoRosa = true;

boton.addEventListener('click', () => {
    const body = document.body;
    if (fondoRosa) {
        body.style.backgroundColor = 'blue'; // Cambia a azul
    } else {
        body.style.backgroundColor = '#fdcae1'; // Cambia a rosa
    }
    fondoRosa = !fondoRosa; // Alterna el estado
});
