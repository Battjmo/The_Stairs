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
        if (this.playerMoveLeft && this.playerX > 0 && this.onPath()) {
            this.playerX -= this.playerSpeed;
            console.log();
        }
        if (this.playerMoveRight && this.playerX < this.game.canvasWidth - 10 
            && this.onPath()) {
            this.playerX += this.playerSpeed;
        }
        if (this.playerMoveUp && this.playerY > 0 && this.onPath()) {
            this.playerY -= this.playerSpeed;
        }
        if (this.playerMoveDown && this.playerY < this.game.canvasHeight - 10
            && this.onPath()) {
            this.playerY += this.playerSpeed;
        }
    }

    trim(str) {
    return str.replace(/^\s+|\s+$/gm, '');
}

    rgbaToHex(rgba) {
    var parts = rgba.substring(rgba.indexOf("(")).split(","),
        r = parseInt(this.trim(parts[0].substring(1)), 10),
        g = parseInt(this.trim(parts[1]), 10),
        b = parseInt(this.trim(parts[2]), 10);

        return ('#' + r.toString(16) + g.toString(16) + b.toString(16));
}

    onPath() {
        let rightMove = this.context.getImageData(this.playerX + 10, this.playerY, this.playerSize, this.playerSize).data.slice(0, 3).join(", ");
        let bottomMove = this.context.getImageData(this.playerX, this.playerY + 10, this.playerSize, this.playerSize).data.slice(0, 3).join(", ");
        let leftMove = this.context.getImageData(this.playerX - 10, this.playerY, this.playerSize, this.playerSize).data.slice(0, 3).join(", ");
        let topMove = this.context.getImageData(this.playerX, this.playerY - 10, this.playerSize, this.playerSize).data.slice(0, 3).join(", ");
        console.log(rightMove);
        console.log(leftMove);
        let moves = [rightMove, bottomMove, leftMove, topMove];

        // console.log(imageData);
        // let currentColor = imageData.data.slice(0, 3);
        // console.log(currentColor.join(", "));
        for(let i = 0; i < moves.length; i++) {
            if (moves[i] !== "224, 11, 64") {
                return false;
            }
        }
        // if (currentColor.join(", ") === "224, 11, 64") return true;
        return true;
    }
}

export default Player;