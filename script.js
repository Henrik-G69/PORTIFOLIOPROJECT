let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let backButton = document.getElementById('back');
let seeMoreButtons = document.querySelectorAll('.see-more');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
const toggleButton = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

/* Configura os botões de next e prev */
nextButton.onclick = () => showSlider('next');
prevButton.onclick = () => showSlider('prev');

/* Torna a tela sensível às teclas */
document.addEventListener('keyup', function (event) {
    if (!carousel.classList.contains('showDetail')) {
        if (event.key === 'ArrowRight' || event.key.toLowerCase() === 'd') showSlider('next');
        if (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a') showSlider('prev');
    }
    if (event.key === 'ArrowUp' || event.key.toLowerCase() === 'w') carousel.classList.add('showDetail');
    if (event.key === 'ArrowDown' || event.key.toLowerCase() === 's') carousel.classList.remove('showDetail');
});

const showSlider = (type) => {
    nextButton.disabled = true;
    prevButton.disabled = true;

    const items = document.querySelectorAll('.carousel .list .item');
    if (type === 'next') {
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    } else {
        const lastItem = items[items.length - 1];
        listHTML.prepend(lastItem);
        carousel.classList.add('prev');
    }

    setTimeout(() => {
        nextButton.disabled = false;
        prevButton.disabled = false;
    }, 300);
};

/* Botões para detalhes */
seeMoreButtons.forEach((button) =>
    button.addEventListener('click', () => carousel.classList.add('showDetail'))
);
backButton.addEventListener('click', () => carousel.classList.remove('showDetail'));

/* Controle de tema */
const savedTheme = localStorage.getItem('theme') || 'light';
rootElement.classList.toggle('dark', savedTheme === 'dark');
updateToggleButtonText();

toggleButton.addEventListener('click', () => {
    const isDark = rootElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateToggleButtonText();
});

function updateToggleButtonText() {
    toggleButton.textContent = rootElement.classList.contains('dark') ? '☀️' : '🌙';
}
