//this file to manipulate the document, which provides a programmable interface for the HTML document. 
    //!this type of document is called a Document Object Model (DOM)

/* 
We can use the DOM to call the getElementByID to let us target specific elements and automatically scale our game to match the size of the user's browser window. 
*/


const canvas = document.getElementById('board');

//This uses the canvas element new with HTML5, which allows us to create and use 2D shapes with ease.
const ctx = canvas.getContext('2d');

//calc size of canvas from constants.
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

//scale cooks
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

