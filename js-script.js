let gridSize = prompt("Enter desired canvas size (max 100)", 32);
const canvas = document.querySelector(".canvas");


// max of 100 and min of 2
if (gridSize > 100) {
  gridSize = 100;
} else if (gridSize < 2) {
  gridSize = 2;
}


function createGrid(size) {
  let canvasSize = gridSize * gridSize;
  for (let index = 0; index < canvasSize; index++) {
    const canvasItem = document.createElement("div");
    canvasItem.classList.add("canvas-item");
    canvasItem.style.cssText = `width: ${960 / size}px; height: ${960 / size}px;`;
    canvas.appendChild(canvasItem);
  }
}

function makeGridItemDrawable(item) {
  item.classList.add("canvas-item-drawn");
}

function makeDrawable() {
  const gridItems = document.querySelectorAll(".canvas-item");
  gridItems.forEach((item) =>
    item.addEventListener("mousedown", function () {
      item.classList.add("canvas-item-drawn");
    })
  );
}

createGrid(gridSize);
makeDrawable();
