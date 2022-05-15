let color = "black";
let click = true;

function makeGrid(size) {
let grid = document.querySelector('.grid');
let squares = grid.querySelectorAll('div');
squares.forEach((div) => div.style.backgroundColor = 'white');
grid.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

let amount = size * size;
for (let i=0; i < amount; i++) {
    let square = document.createElement('div');
    square.className = 'gridSquare';
    square.style.backgroundColor = "white";
    grid.insertAdjacentElement("beforeend", square);
    square.addEventListener("mouseover", addColor);
}};

makeGrid(24);


function changePixelSize(size) {
    if (size <= 2) {
        alert("Choose a pixel size between 2 and 100.");
        makeGrid(16);
        return;
    } else if (size >= 101) {
        alert("Choose a pixel size between 2 and 100.");
        makeGrid(16);
        return;
    } 
        makeGrid(size)
}

function addColor() {
    if (click) {
        if(color === 'random') {
            this.style.backgroundColor = '#' + Math.random().toString(16).substr(-6);
        } else {
            this.style.backgroundColor = color;
        }
    } 
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('click', (e) => {
    if(e.target.tagName != 'BUTTON') {
        click = !click;
        if(click) {
            document.querySelector('.mode').textContent = "Mode: Coloring"
        } else {
            document.querySelector('.mode').textContent = "Mode: Not Coloring"
    }
}
});
