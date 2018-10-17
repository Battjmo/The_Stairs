import Player from './player';

class Game {
    constructor(context) {
        this.context = context;
        this.canvasHeight = 700;
        this.canvasWidth = 900;
        this.player = new Player(this, "Nigel");
    }

    //THANK DAVID WELLS (NOT THE FAMOUS YANKEE PRESUMABLY)
    noScroll() {
        window.scrollTo(0, 0);
    }

    draw() {
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.player.movePlayer();
        this.player.drawPlayer();
        requestAnimationFrame(this.draw.bind(this));
    }

    play() {
        window.addEventListener("scroll", this.noScroll.bind(this));
        this.player.bindKeys();
        console.log(this.player)
        this.draw();
    }
}



export default Game;