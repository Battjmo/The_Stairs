import Game from './game';
// var fabric = require('fabric').fabric;

document.addEventListener("DOMContentLoaded", () => {
    const gameCanvas = document.getElementById("game");
    const textBox = document.getElementById("text");
    const context = gameCanvas.getContext("2d");
    const currentGame = new Game(context, textBox);
    gameCanvas.height = currentGame.canvasHeight;
    gameCanvas.width = currentGame.canvasWidth;    
    currentGame.play();
    // var canvas = new fabric.Canvas('c');

    // // create a rectangle object
    // var rect = new fabric.Rect({
    //     left: 100,
    //     top: 100,
    //     fill: 'red',
    //     width: 20,
    //     height: 20
    // });

    // // "add" rectangle onto canvas
    // canvas.add(rect);
});

