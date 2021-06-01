//this file to manipulate the document, which provides a programmable interface for the HTML document. 
    //!this type of document is called a Document Object Model (DOM)

/* 
We can use the DOM to call the getElementByID to let us target specific elements and automatically scale our game to match the size of the user's browser window. 
*/


let canvas = document.getElementById('board');
//let canvas = document.getElementById('canvas');

//This uses the canvas element new with HTML5, which allows us to create and use 2D shapes with ease.

// We can use the HTMLCanvasElement.getContext() method to get the canvas context where we render the graphics. This method needs an argument so we'll pass '2d' to get the 2D render context.
const ctx = canvas.getContext('2d');

//calc size of canvas from constants.
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

//scale cooks
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

// ctx.fillStyle = 'red';
const {width, height} = ctx.canvas;
ctx.fillStyle = 'blue';
ctx.fillRect(0, 0, 10, 10);
ctx.clearRect(0, 0, width, height);
ctx.fillRect(1, 1, 10, 10);

function play() {
    board = new Board(ctx);
    console.table(board.grid);
  }

