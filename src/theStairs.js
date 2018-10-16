import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
    const gameCanvas = document.getElementById("game");
    const context = gameCanvas.getContext("2d");
    const currentGame = new Game(context);
    gameCanvas.height = currentGame.canvasHeight;
    gameCanvas.width = currentGame.canvasWidth;
});

