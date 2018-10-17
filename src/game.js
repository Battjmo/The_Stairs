import Player from './player';

class Game {
    constructor(context) {
        this.context = context;

        //Canvas
        this.canvasHeight = 700;
        this.canvasWidth = 900;

        //Player
        this.playerSize = 10;
        this.playerX = this.canvasHeight / 2;
        this.playerY = this.canvasHeight / 2;
        this.playerSpeed = 10;

        //Keys
        this.playerMoveRight = false;
        this.playerMoveLeft = false;
        this.playerMoveUp = false;
        this.playerMoveDown = false;
    }

    //Key handlers
    keyDownHandler(e) {
        if (e.keyCode === 39) {
            this.playerMoveRight = true;
        }
        if (e.keyCode === 37) {
            this.playerMoveLeft = true;
        }
        if (e.keyCode === 38) {
            this.playerMoveUp = true;
        }
        if (e.keyCode === 40) {
            this.playerMoveDown = true;
        }
    }

    keyUpHandler(e) {
        if (e.keyCode === 39) {
            this.playerMoveRight = false;
        }
        if (e.keyCode === 37) {
            this.playerMoveLeft = false;
        }
        if (e.keyCode === 38) {
            this.playerMoveUp = false;
        }
        if (e.keyCode === 40) {
            this.playerMoveDown = false;
        }
    }

    //THANK DAVID WELLS (NOT THE FAMOUS YANKEE PRESUMABLY)
    noScroll() {
        window.scrollTo(0, 0);
    }

    bindKeys() {
        window.addEventListener("scroll", this.noScroll.bind(this));
        document.addEventListener("keydown", this.keyDownHandler.bind(this));
        document.addEventListener("keyup", this.keyUpHandler.bind(this));
    }

    //Draw Functions
    drawPlayer() {
        this.context.beginPath();
        this.context.rect(this.playerX, this.playerY, this.playerSize, this.playerSize);
        this.context.fillStyle= "#e83030";
        this.context.fill();
    }

    movePlayer() {
        if (this.playerMoveLeft && this.playerX > 0) {
            this.playerX -= this.playerSpeed;
        } 
        if (this.playerMoveRight && this.playerX < this.canvasWidth - 10) {
            this.playerX += this.playerSpeed;
        }
        if (this.playerMoveUp && this.playerY > 0) {
            this.playerY -= this.playerSpeed;
        }
        if (this.playerMoveDown && this.playerY < this.canvasHeight - 10) {
            this.playerY += this.playerSpeed;
        }
    }

    draw() {
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.movePlayer();
        this.drawPlayer();

        requestAnimationFrame(this.draw.bind(this));
    }

    play() {
        const nigel = new Player();
        this.bindKeys();
        this.draw();
    }
}



export default Game;