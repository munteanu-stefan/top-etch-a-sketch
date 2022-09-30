let gridSize = Number(prompt("Enter desired canvas size (max 100)", 32));
const canvas = document.querySelector(".canvas");

function checkInput(size) {
  if (isNaN(size) === false) {
    if (size > 100) {
      return 100;
    } else if (size < 2) {
      return 2;
    } else {
      return size;
    }
  } else {
    return 32;
  }
}

// max of 100 and min of 2

function createGrid(size) {
  let canvasSize = size * size;
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
    item.addEventListener("mouseover", function () {
      item.classList.add("canvas-item-drawn");
    })
  );
}

createGrid(checkInput(gridSize));
makeDrawable();
