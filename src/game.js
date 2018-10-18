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

    //THANK DAVID WELLS (NOT THE FAMOUS YANKEE PRESUMABLY)
    noScroll() {
        window.scrollTo(0, 0);
    }

    draw() {
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.level.drawLevel();
        this.player.movePlayer();
        this.player.drawPlayer();
        requestAnimationFrame(this.draw.bind(this));
    }

    play() {
        window.addEventListener("scroll", this.noScroll.bind(this));
        this.player.bindKeys();
        this.draw();
    }
}



export default Game;