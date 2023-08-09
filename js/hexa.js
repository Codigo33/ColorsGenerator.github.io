const hexa = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    let hexaHash = '#';

    // Va a iterar y mostrar los 6 numeros random mas el hash
    for (let i = 0; i < 6; i++) {
        hexaHash += hexa[getRandomHexa()];
    }

    color.textContent = hexaHash;
    document.body.style.backgroundColor = hexaHash;
});


function getRandomHexa() {
    return Math.floor(Math.random() * hexa.length);
}