class Player {
    constructor() {
        //Self
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

    drawPlayer() {
        this.context.beginPath();
        this.context.rect(this.playerX, this.playerY, this.playerSize, this.playerSize);
        this.context.fillStyle = "#e83030";
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
}

export default Player;