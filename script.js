const gridContainer = document.querySelector('.grid-container');
let gridSize = 16;

function createGrid(gridSize) {
    for (let i=0; i < gridSize; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        gridContainer.appendChild(square);
    }
}
    
createGrid(gridSize);
