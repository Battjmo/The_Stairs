import Util from '../util';

class Level {
    constructor(context) {
        this.context = context;
        this.pathX = 0;
        this.pathY = 0;
        this.pathSize = 100;
        this.pathStart = [[0, 0, this.pathSize, this.pathSize]];
        this.moves = [[0, this.pathSize], [this.pathSize, 0], [-this.pathSize, 0], [0, -this.pathSize]];
        this.xBound = this.context.canvas.width - this.pathSize;
        this.yBound = this.context.canvas.height - this.pathSize;
        this.path = [this.pathStart];
    }

    drawLevel() {
        this.context.beginPath();
        this.context.rect(this.pathStart.x, this.pathStart.y, this.pathSize, this.pathSize);
        this.context.fillStyle = "#e83030";
        this.context.fill();
    }

    //shuffles all moves
    shuffle(moves) {
        for (let i = moves.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [moves[i], moves[j]] = [moves[j], moves[i]];
        }
        return moves;
    }

    pathGenerator() {
        while (this.pathX < this.xBound && this.pathY < this.yBound) {
            let shuffledMoves = this.shuffle(this.moves);
            let moved = false;
            let currentMove;
            for (let i = 0; i < this.moves.length && moved === false; i++) {
                currentMove = shuffledMoves[0];
                if (this.validPath(this.path, currentMove)) {
                    moved = true;
                    this.path.push([currentMove[0], currentMove[1], this.pathSize, this.pathSize]);
                    this.pathX += currentMove[0];
                    this.pathY += currentMove[1];
                }
            }
        }
    }

    //old path checker
    //this.path[this.path.length - 1][0], this.path[this.path.length - 1][1]

    validPath(path, newSpot) {
        // if (oldX < newX && newX < this.xBound && oldY < newY && oldY < newY) {
        //     return true;
        // }
        for (let i = path.length - 4; i < path.length - 1; i++) {
            if (path[i] === newSpot) {
                return false;
            }
        }
        return true;
    }
    
}

export default Level;