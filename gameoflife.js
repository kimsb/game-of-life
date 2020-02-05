
const canvas = document.getElementById('canvas').getContext('2d');
let cells = [];
const xCount = 64;
const yCount = 64;
const cellSize = 8;
canvas.canvas.width = xCount * cellSize;
canvas.canvas.height = yCount * cellSize;
canvas.strokeStyle = '#e1e1e1';
canvas.fillStyle = 'cadetblue';

init();

function init() {

  // initialize game

  update();
}

function countNeighbours(x, y) {

  // count living neighbours

}

function update() {

  // check which cells should be alive in next generation.

  draw();
}

function draw() {
  canvas.clearRect(0, 0, xCount * cellSize, yCount * cellSize);
  cells.forEach(function (row, x) {
    row.forEach(function (cell, y) {
      canvas.beginPath();
      canvas.rect(x * cellSize, y * cellSize, cellSize, cellSize);
      if (cell) {
        canvas.fill();
      } else {
        canvas.stroke();
      }
    });
  });
  setTimeout(function () {
    update();
  }, 50);
  //window.requestAnimationFrame(update); // Fast for small grids!
}
