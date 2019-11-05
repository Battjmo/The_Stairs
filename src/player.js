import Level from './levels/level';

class Player {
    constructor(game, name, events) {

        //context
        this.game = game;
        this.context = game.context;

        //Self
        this.name = name;
        this.events = events;
        this.playerSize = 10;
        this.playerX = 0;
        this.playerY = 0;
        this.playerSpeed = 10;

        //events
        this.canMove = true;

        //Keys
        this.playerMoveRight = false;
        this.playerMoveLeft = false;
        this.playerMoveUp = false;
        this.playerMoveDown = false;
    }

    drawPlayer() {
        this.context.beginPath();
        this.context.rect(this.playerX, this.playerY, 
            this.playerSize, this.playerSize);
        this.context.fillStyle = "#e1e1e1";
        this.context.fill();
    }

    bindKeys() {
        document.addEventListener("keydown", this.keyDownHandler.bind(this));
        document.addEventListener("keyup", this.keyUpHandler.bind(this));
    }

    //Key handlers
    keyDownHandler(e) {
        if (e.keyCode === 39 || e.keyCode === 68) {
            this.playerMoveRight = true;
        }
        if (e.keyCode === 37 || e.keyCode === 65) {
            this.playerMoveLeft = true;
        }
        if (e.keyCode === 38 || e.keyCode === 87) {
            this.playerMoveUp = true;
        }
        if (e.keyCode === 40 || e.keyCode === 83) {
            this.playerMoveDown = true;
        }
        if (e.keyCode === 32) {
            this.game.level.eventIndex++;
        }
    }

    keyUpHandler(e) {
        if (e.keyCode === 39 || e.keyCode === 68) {
            this.playerMoveRight = false;
        }
        if (e.keyCode === 37 || e.keyCode === 65) {
            this.playerMoveLeft = false;
        }
        if (e.keyCode === 38 || e.keyCode === 87) {
            this.playerMoveUp = false;
        }
        if (e.keyCode === 40 || e.keyCode === 83) {
            this.playerMoveDown = false;
        }
    }

    movePlayer() {
        if ( this.game.level.event && (this.game.level.event.size[0] <= this.playerX && this.playerX < this.game.level.event.size[0] + this.game.level.event.size[2]) &&
            this.game.level.event.size[1] <= this.playerY && this.playerY < this.game.level.event.size[1] + this.game.level.event.size[3]) {
                this.triggerEvent(this.game.level.event);
            }
        if (this.canMove) {
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
    }

    moveCheck(groundColor) {
        if (groundColor === '66,134,244') return false;
        return true;
    }

    checkBoundary(playerDirection, playerDestination) {
        if ((playerDirection === "right" && playerDestination >= this.game.canvasWidth - 10) 
            || (playerDirection === "down" && playerDestination >= this.game.canvasHeight - 10)) {
            return true;
        }
        else return false;
    }

    triggerEvent(event) {
        if (this.game.level.eventIndex >= event.text.length) {
            this.canMove = true;
            event.played = true;
            this.game.textBox.innerHTML = "They walked on.";
            return false;
        }
        this.canMove = false;
        this.game.textBox.innerHTML = event.text[this.game.level.eventIndex];
    }

    canMoveEast() {
        if (this.checkBoundary("right", this.playerX + 10)) {
            this.playerX = 0;
            this.playerY = Math.ceil(this.playerY / 100) * 100;
            this.game.level = new Level(this.context, 0, this.playerY, this.textBox, this.events);
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
            this.playerX = Math.ceil(this.playerX / 100) * 100;
            this.game.level = new Level(this.context, this.playerX, 0, this.textBox, this.events);
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