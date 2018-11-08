import Level from './levels/level';

class Player {
    constructor(game, name) {

        //context
        this.game = game;
        this.context = game.context;
        this.textBox = game.textBox;

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
        else if (this.playerMoveRight && this.playerX < this.game.canvasWidth - 10 && this.canMoveEast()) {
            this.playerX += this.playerSpeed;
            }
        else if  (this.playerMoveUp && this.playerY > 0 && this.canMoveNorth()) {
            this.playerY -= this.playerSpeed;
        }
        else if (this.playerMoveDown && this.playerY < this.game.canvasHeight - 10 && this.canMoveSouth()) {
            this.playerY += this.playerSpeed;
        }
    }

    moveCheck(groundColor) {
        if (groundColor !== "224,11,64") return false;
        return true;
    }

    checkBoundary(playerDirection, playerDestination) {
        if ((playerDirection === "right" && playerDestination >= this.game.canvasWidth - 10) 
            || (playerDirection === "down" && playerDestination >= this.game.canvasHeight - 10)) {
            return true;
        }
        else return false;
    }

    canMoveEast() {
        // let eastMove = this.context.getImageData(this.playerX + 11, this.playerY, 1, 1).data.slice(0, 3).join(",");
        // if (this.moveCheck(eastMove) === false && (this.checkBoundary("right", this.playerX))) { 
        //     console.log("hi");
        //     this.playerX = 0;
        //     this.game.level = new Level(this.context, 0, this.playerY);
        //     return false;
        //     }
        // return true;
        if (this.checkBoundary("right", this.playerX + 10)) {
            this.playerX = 0;
            this.game.level = new Level(this.context, 0, this.playerY, this.textBox, this.game.level.textIndex + 1);
        }
        let eastMove = this.context.getImageData(this.playerX + 10, this.playerY, 1, 1).data.slice(0, 3).join(",");
        return this.moveCheck(eastMove);
    }

    canMoveWest() {
        let westMove = this.context.getImageData(this.playerX - 1, this.playerY, 1, 1).data.slice(0, 3).join(",");        
        return this.moveCheck(westMove);
    }

    canMoveSouth() {
        if (this.checkBoundary("down", this.playerY + 10)) {
            this.playerY = 0;
            this.game.level = new Level(this.context, this.playerX, 0, this.textBox, this.game.level.textIndex + 1);
        }
        let southMove = this.context.getImageData(this.playerX, this.playerY + 10, 1, 1).data.slice(0, 3).join(",");        
        return this.moveCheck(southMove);
    }

    canMoveNorth() {
        let northMove = this.context.getImageData(this.playerX, this.playerY - 1, 1, 1).data.slice(0, 3).join(",");        
        return this.moveCheck(northMove);
    }

// END OF CLASS
}

export default Player;