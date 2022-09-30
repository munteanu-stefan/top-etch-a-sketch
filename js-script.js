let gridSize = prompt("Enter desired canvas size (max 100)", 32);

if (gridSize > 100) {
  gridSize = 100;
} else if (gridSize < 2) {
  gridSize = 2;
}

const canvas = document.querySelector(".canvas");

function createGrid(size) {
  let canvasSize = (gridSize*gridSize);
  for (let index = 0; index < canvasSize; index++) {
    const canvasItem = document.createElement("div");
    canvasItem.classList.add("canvas-item");
    canvasItem.style.cssText = `width: ${960 / size}px; height: ${960 / size}px;`;
    canvas.appendChild(canvasItem);
  }
}

createGrid(gridSize);
