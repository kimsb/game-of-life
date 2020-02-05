
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

/**
 * Initialize game
 */
function init() {

}

/**
 * Check which cells are alive.
 */
function update() {

}

/**
 * Draw cells on canvas
 */

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
  //window.requestAnimationFrame(update); // Too fast!
}
