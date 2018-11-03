class Player {
    constructor(game, name) {

        //context
        this.game = game;
        this.context = game.context;

        //Self
        this.name = name;
        this.playerSize = 10;
        this.playerX = 0;
        this.playerY = 0;
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
        this.context.fillStyle = "#e1e1e1";
        this.context.fill();
    }

    bindKeys() {
        document.addEventListener("keydown", this.keyDownHandler.bind(this));
        document.addEventListener("keyup", this.keyUpHandler.bind(this));
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

    movePlayer() {
        if (this.playerMoveLeft && this.playerX > 0 && this.canMoveWest()) {
            this.playerX -= this.playerSpeed;
        }
        if (this.playerMoveRight && this.playerX < this.game.canvasWidth - 10 && this.canMoveEast()) {
            this.playerX += this.playerSpeed;
        }
        if (this.playerMoveUp && this.playerY > 0 && this.canMoveNorth()) {
            this.playerY -= this.playerSpeed;
        }
        if (this.playerMoveDown && this.playerY < this.game.canvasHeight - 10 && this.canMoveSouth()) {
            this.playerY += this.playerSpeed;
        }
    }

    colorCheck(playerColor) {
        if (playerColor !== "224,11,64") return false;
        return true;
    }

    canMoveEast() {
        let eastMove = this.context.getImageData(this.playerX + 10, this.playerY, this.playerSize, this.playerSize).data.slice(0, 3).join(",");
        return this.colorCheck(eastMove);
    }

    canMoveWest() {
        let westMove = this.context.getImageData(this.playerX - 10, this.playerY, this.playerSize, this.playerSize).data.slice(0, 3).join(",");
        return this.colorCheck(westMove);
    }

    canMoveSouth() {
        let southMove = this.context.getImageData(this.playerX, this.playerY + 10, this.playerSize, this.playerSize).data.slice(0, 3).join(",");
        return this.colorCheck(southMove);
    }

    canMoveNorth() {
        let northMove = this.context.getImageData(this.playerX, this.playerY - 10, this.playerSize, this.playerSize).data.slice(0, 3).join(",");
        return this.colorCheck(northMove);
    }

// END OF CLASS
}

export default Player;