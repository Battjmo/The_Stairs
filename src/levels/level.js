import Util from '../util';

class Level {
    constructor(context) {
        this.context = context;
        this.xBound = 900;
        this.yBound = 700;
        this.pathSize = 100;
        this.pathX = this.pathSize;
        this.pathY = this.pathSize;
        this.pathStart = [0, 0, this.pathSize, this.pathSize];
        this.moves = [[0, this.pathSize], [this.pathSize, 0], [-this.pathSize, 0], [0, -this.pathSize]];
        this.path = this.pathGenerator();
    }

    drawLevel() {
        this.context.beginPath();
        for (let i = 0; i < this.path.length; i++) {
            this.context.rect(this.path[i][0], this.path[i][1], this.pathSize, this.pathSize);
            this.context.fillStyle = "#e83030";
            this.context.fill();
        }
    }

    //shuffles all moves
    shuffle(moves) {
        for (let i = moves.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [moves[i], moves[j]] = [moves[j], moves[i]];
        }
        console.log(moves);
        return moves;
    }

    pathGenerator() {
        let path = [this.pathStart];
        console.log(this.pathX, this.pathY, this.xBound, this.yBound);
        while (this.pathX < this.xBound && this.pathX > 0 && this.pathY > 0 && this.pathY < this.yBound) {
            console.log("outer loop");
            let shuffledMoves = this.shuffle(this.moves);
            let moved = false;
            let currentMove;
            for (let i = 0; moved === false; i++) {
                console.log("inner loop");
                currentMove = shuffledMoves[i];
                if (this.validPath(path, currentMove)) {
                    console.log("valid path");
                    moved = true;
                    path.push([path[path.length - 1][0] + currentMove[0], currentMove[1], this.pathSize, this.pathSize]);
                    this.pathX += currentMove[0];
                    this.pathY += currentMove[1];
                }
            }
        }
        console.log(path);
        return path;
    }

    //old path checker
    //this.path[this.path.length - 1][0], this.path[this.path.length - 1][1]

    validPath(path, currentMove) {

        for (let i = path.length - 4; i < path.length - 1; i++) {
            if (path[i]) {
                for (let j = 0; j < 2; j++) {
                    console.log(path[i][j]);
                    if (path[i][j] === currentMove[j]) {
                        console.log("invalid move");
                        return false;
                    }
                }
            }
        }
        return true;
    }
    
    //END OF CLASS
}

export default Level;