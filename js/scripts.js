
const themeButton = document.getElementById('themeButton');
const body = document.body;

themeButton.addEventListener('click', () => {
    body.classList.toggle('dark'); // Alterna entre los temas claro y oscuro
});
