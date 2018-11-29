import Game from './game';
const fabric = require('fabric').fabric;

document.addEventListener("DOMContentLoaded", () => {
    // const gameCanvas = document.getElementById("game");
    const canvas = new fabric.Canvas("game");
    const textBox = document.getElementById("text");
    const context = canvas.getContext("2d");
    const currentGame = new Game(canvas, context, textBox);
    // gameCanvas.height = currentGame.canvasHeight;
    // gameCanvas.width = currentGame.canvasWidth;   
    canvas.setHeight(currentGame.canvasHeight);
    canvas.setWidth(currentGame.canvasWidth); 
    currentGame.play();
});

