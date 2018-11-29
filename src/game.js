import Player from './player';
import Level from './levels/level';
import Events from './events/eventList';

class Game {
    constructor(canvas, context, textBox) {
        this.canvas = canvas;
        this.context = context;
        this.textBox = textBox;
        this.canvasHeight = 600;
        this.canvasWidth = 900;
        this.player = new Player(this, "Nigel", this.events);
        this.level = new Level(this.canvas, this.context, 0, 0, this.textBox);
        this.noScroll = this.noScroll.bind(this);
        this.draw = this.draw.bind(this);
    }

    //THANKS DAVID WELLS (NOT THE FAMOUS YANKEE PRESUMABLY)
    noScroll() {
        window.scrollTo(0, 0);
    }

    draw() {
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.context.fillStyle = "rgb(66,134,244)";
        this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.level.drawLevel2();
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