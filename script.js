const startButton = document.getElementById('start-button');
console.log('startButton', startButton, typeof startButton);

const gridContainer = document.querySelector('.grid-container');
const contatore = document.querySelector('.Punteggio');

const bombList = [];

const totalcell = 100;

const bomb = 16;

const maxScore = totalcell - bomb;

let punteggio = 0;

startButton.addEventListener('click', function () {

while (bombList.length < bomb) {
    const number = Math.floor(Math.random() * totalcell) + 1;
    if (!bombList.includes(number)) bombList.push(number);
    };
    
console.log(bombList);



for (let i = 1; i <= totalcell; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.innerHTML = i;

    cell.addEventListener('click', function () {

        if(bombList.includes(i)) {
            cell.classList.add('bomb')
        } else {
            cell.classList.add('cell-cliccata')
            updatepunteggio();
        }
    });

    gridContainer.appendChild(cell);
};

function FinePartita() {
    console.log('Game Over');
}
function updatepunteggio() {
    punteggio++;
    contatore.innertext = String(punteggio).padStart(5, 0);
    console.log('.Punteggio')
}
});