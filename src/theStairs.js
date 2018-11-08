import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
    const gameCanvas = document.getElementById("game");
    const textBox = document.getElementById("text");
    const context = gameCanvas.getContext("2d");
    const currentGame = new Game(context, textBox);
    gameCanvas.height = currentGame.canvasHeight;
    gameCanvas.width = currentGame.canvasWidth;    
    currentGame.play();
});

