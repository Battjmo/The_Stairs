import Player from './player';
import Level from './levels/level';

class Game {
    constructor(context) {
        this.context = context;
        this.canvasHeight = 700;
        this.canvasWidth = 900;
        this.player = new Player(this, "Nigel");
        this.level = new Level(this.context);
        this.noScroll = this.noScroll.bind(this);
        this.draw = this.draw.bind(this);
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
        requestAnimationFrame(this.draw);
    }

    play() {
        window.addEventListener("scroll", this.noScroll);
        this.player.bindKeys();
        this.draw();
    }

// END OF CLASS
}

export default Game;