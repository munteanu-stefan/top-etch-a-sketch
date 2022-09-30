let gridSize = 32;
// Number(prompt("Enter desired canvas size (max 100)", 32));
const canvas = document.querySelector(".canvas");

function checkInput(size) {
  if (isNaN(size) === false) {
    if (size > 100) {
      return 100;
    } else if (size < 1) {
      return 1;
    } else {
      return size;
    }
  } else {
    return 32;
  }
}

function createGrid(size) {
  clearCanvas();
  let canvasSize = size * size;
  for (let index = 0; index < canvasSize; index++) {
    const canvasItem = document.createElement("div");
    canvasItem.classList.add("canvas-item");
    canvasItem.style.cssText = `width: ${960 / size}px; height: ${960 / size}px;`;
    canvas.appendChild(canvasItem);
  }
  makeDrawable();
}

function makeGridItemDrawable(item) {
  item.classList.add("canvas-item-drawn");
}

function makeDrawable() {
  const gridItems = document.querySelectorAll(".canvas-item");
  gridItems.forEach((item) =>
    item.addEventListener("mouseover", function () {
      item.classList.add("canvas-item-drawn");
    })
  );
}

function clearCanvas() {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
}

// slider
const slider = document.getElementById("myRange");
const output = document.getElementById("slider-output");
output.textContent = slider.value;

slider.oninput = function () {
  output.textContent = this.value;
  gridSize = this.value;
};

// button
const button = (document.getElementById("new-canvas").onclick = function () {
  createGrid(checkInput(gridSize));
});

createGrid(checkInput(gridSize));
