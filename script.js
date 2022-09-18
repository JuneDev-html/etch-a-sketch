// ----- ----- ----- BUILD GRID ----- ----- -----

// grid size variable
let gridSize = 50;

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

// listen to draw 

// add to each block
blocks.forEach((block) => {
    // add listener to each block waiting for a mouse click
    block.addEventListener('mouseover', (event) => {
        if (event.which == 1) {
            draw(event.target);
            console.log(event.target);
        };
    });
}); 



// stop drawing function
function stopDrawing() {
    blocks.forEach((block) => {
        block.addEventListener('mouseup', () => {
            draw(block);
        });
    });
};

// draw function 
function draw(block) {
    block.style.cssText = 'background: black';
};


