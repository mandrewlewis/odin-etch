const gridContainer = document.querySelector('.grid-container');
const root = document.querySelector(':root');
let gridSize = 16;
let squares = [];


function createGrid() {
    // Generate and append nodes
    root.style.setProperty('--grid-size', gridSize.toString());
    for (let i=0; i < gridSize**2; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        gridContainer.appendChild(square);
    }

    // Add event listeners
    squares = document.querySelectorAll('.square');
    squares.forEach(sq => {
        sq.addEventListener('mouseover', () => {
            sq.classList.add('hover');
        });
    })
}


function newGrid() {
    let input = Number(prompt('What size grid?\n\n(Enter 1 integer between 1 and 100)'));
    if (input) {
        gridSize = Math.floor(input);
    } else { return; }
    
    squares.forEach(sq => { gridContainer.removeChild(sq); });
    if (gridSize > 100) { gridSize = 100; } 

    createGrid();
}


let btn = document.querySelector('button');
btn.addEventListener('click', newGrid);


createGrid();