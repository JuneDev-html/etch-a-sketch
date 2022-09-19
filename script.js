// ----- ----- ----- BUILD GRID ----- ----- -----

function buildGrid(gridSize) {

    // create variable for grid container
    const grid = document.querySelector('.grid');
    grid.innerHTML = '';

    // for loop to create individual squares
    for (let i = 0; i < gridSize; i++) {
        let column = document.createElement('div');
        column.classList.add('column');
        
        for (let j = 0; j < gridSize; j++) {
            let block = document.createElement('div');
            block.classList.add('block');
            
            block.addEventListener('mouseover', (event) => {
                if (event.which == 1) {
                    draw(event.target);
                    console.log(target);
                };
            });
            column.append(block);
        };
        grid.append(column); 
    }; 
}





// ----- ----- ----- ----- ----- ----- ----- ----- 
const blocks = document.querySelectorAll('.block');

// listen to draw 

// add to each block
blocks.forEach((block) => {
    // add listener to each block waiting for a mouse click
    
}); 



// draw function 
function draw(block) {
    block.style.cssText = 'background: black';
};


// ----- ----- CONTROLS DASHBOARD ----- -----

// range slider and value display
let sizeDisplay = document.querySelector('#sizeDisplay');
let slider = document.querySelector('#sizeSlider');
sizeDisplay.textContent = `${slider.value}x${slider.value}`;

// change size display everytime 
slider.addEventListener('mouseup', (event) => {
    if (event.which == 1) {
        sizeDisplay.textContent = `${slider.value}x${slider.value}`;
        buildGrid(slider.value);
    }
})

// get grid size function
function getGridSize() {
    let slider = document.querySelector('#sizeSlider');
    return slider.value;
}

buildGrid(slider.value);