const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    // Obtener un numero random entre 0 y 3 (colores)
    const randomColor = getRandomColor();
    // console.log(randomNumber);

    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
});


function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.random().toFixed(1);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}