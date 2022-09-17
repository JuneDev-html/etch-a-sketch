// ----- ----- ----- BUILD GRID ----- ----- -----

// grid size variable
let gridSize = 16;

// create variable for grid container
const grid = document.querySelector('.grid');

// for loop to create individual squares
for (let i = 0; i < gridSize; i++) {
    let column = document.createElement('div');
    column.classList.add('column');
    for (let j = 0; j < gridSize; j++) {
        let block = document.createElement('div');
        block.classList.add('block');

        column.append(block);
    }
    
    grid.append(column); 
}

// ----- ----- ----- ----- ----- ----- ----- ----- 
const blocks = document.querySelectorAll('.block');

blocks.forEach((block) => {
    block.addEventListener('mouseHold', () => {
        block.style.cssText = 'background: black';
    });
});
