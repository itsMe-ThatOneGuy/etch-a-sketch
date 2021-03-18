const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset-button");
const defaultSize = 16;

resetButton.addEventListener('click', newGrid);

function createGrid (size) { 
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList = "grid-element";
        gridElement.addEventListener('mouseover', ChangeColor);
        gridContainer.appendChild(gridElement);
    }
}

function ChangeColor (e) {
    e.target.style.backgroundColor = 'red';
}

function newGrid () {
    const size = prompt("Size of Grid?");
    if (size < 1 || size > 100) {
        alert("Enter number between 1 and 100")
        newGrid()
    } else {
        clearGrid();
        createGrid(size);
    }
    
}

function clearGrid () {
    document
        .querySelectorAll(".grid-element")
        .forEach((e) => e.parentNode.removeChild(e));
}

createGrid(defaultSize);

