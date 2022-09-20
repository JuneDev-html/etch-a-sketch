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
            block.style.backgroundColor = '#e1e1e1';
            
            // add drawing even listener to each block
            block.addEventListener('mouseover', (event) => {
                // if mouse is currently clicked, activate following colors
                if (event.which == 1) {
                    if (currColor == 'rainbow') {
                        event.target.style.cssText = `background-color: rgb(${(Math.round(Math.random()*256))},${(Math.round(Math.random()*256))},${(Math.round(Math.random()*256))});`
                    }
                    else if (currColor == 'classic') {
                       event.target.style.cssText =`background: black;`; 
                    }
                    else if (currColor == 'eraser') {
                        event.target.style.cssText = 'background: #e1e1e1'
                    }
                    else {
                        event.target.style.cssText =`background: black;`; 
                    }
                    
                };
            });
            column.append(block);
        };
        grid.append(column); 
    }; 
}


// ----- ----- ----- ----- ----- ----- ----- ----- 

// ------- FUNCTIONS -------
// draw function 
function draw(block) {
    block.style.cssText = `background: ${currColor}`;
};

// get grid size function
function getGridSize() {
    let slider = document.querySelector('#sizeSlider');
    return slider.value;
}

// ----- ----- CONTROLS DASHBOARD ----- -----

// range slider and value display
let sizeDisplay = document.querySelector('#sizeDisplay');
let slider = document.querySelector('#sizeSlider');
sizeDisplay.textContent = `${slider.value}x${slider.value}`;

// update range slider display with upon change
slider.addEventListener('mouseup', (event) => {
    if (event.which == 1) {
        sizeDisplay.textContent = `${slider.value}x${slider.value}`;
        buildGrid(slider.value);
    }
})


// Restart button 
let restart = document.querySelector('#restart');
restart.addEventListener("mouseup", (event) => {
    if (event.which == 1) {
        buildGrid(slider.value);
    };
});


// --- add listeners to mode buttons to add to draw function
let currColor = 'black'
const classic = document.querySelector('#classic');
const rainbow = document.querySelector('#rainbow');
const eraser = document.querySelector('#eraser');

// // Classic Mode button
classic.addEventListener('mouseup', (event) => {
    if (event.which == 1) {
        currColor = 'classic'
    }
});

// Rainbow Mode button
rainbow.addEventListener('mouseup', (event) => {
    if (event.which == 1) {
        currColor = 'rainbow'

    }
});
// Eraser Mode button
eraser.addEventListener('mouseup', (event) => {
    if (event.which == 1) {
        currColor = 'eraser'
    }
});







buildGrid(slider.value);