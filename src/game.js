import Player from './player';
import Level from './levels/level';

class Game {
    constructor(context) {
        this.context = context;
        this.canvasHeight = 700;
        this.canvasWidth = 900;
        this.player = new Player(this, "Nigel");
        this.level = new Level(this.context);
    }

    //THANKS DAVID WELLS (NOT THE FAMOUS YANKEE PRESUMABLY)
    noScroll() {
        window.scrollTo(0, 0);
    }

    draw() {
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.context.fillStyle = 'blue';
        this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.level.drawLevel();
        this.player.movePlayer();
        this.player.drawPlayer();
        requestAnimationFrame(this.draw.bind(this));
    }

    movePlayer() {
            if (this.player.playerMoveLeft && this.player.playerX > 0) {
                this.player.playerX -= this.player.playerSpeed;
            }
            if (this.player.playerMoveRight && this.player.playerX < this.canvasWidth - 10) {
                this.player.playerX += this.player.playerSpeed;
            }
            if (this.player.playerMoveUp && this.player.playerY > 0) {
                this.player.playerY -= this.player.playerSpeed;
            }
            if (this.player.playerMoveDown && this.player.playerY < this.canvasHeight - 10) {
                this.player.playerY += this.player.playerSpeed;
        }
    }

    compareColor(location) {
        
    }

    play() {
        window.addEventListener("scroll", this.noScroll.bind(this));
        this.player.bindKeys();
        this.draw();
    }
}



export default Game;