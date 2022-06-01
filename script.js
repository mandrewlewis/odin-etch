const gridContainer = document.querySelector('.grid-container');
const root = document.querySelector(':root');
let gridSize = 16;

function createGrid(gridSize) {
    root.style.setProperty('--grid-size', gridSize.toString());
    for (let i=0; i < gridSize**2; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        gridContainer.appendChild(square);
    }
}
    
createGrid(gridSize);
