import Player from './player';
import Level from './levels/level';
import Events from './events/eventList';

class Game {
    constructor(context, textBox) {
        let game = this;
        game.context = context;
        game.textBox = textBox;
        game.canvasHeight = 600;
        game.canvasWidth = 900;
        game.player = new Player(game, "Nigel", game.events);
        game.level = new Level(game.context, 0, 0, game.textBox);
        game.noScroll = game.noScroll.bind(game);
        game.draw = game.draw.bind(game);
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