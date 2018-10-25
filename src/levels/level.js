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
        this.shuffle = this.shuffle.bind(this);
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

    //shuffles moves w/ Fisher-Yates shuffle algo
    shuffle(moves) {
        let newMoves = moves.slice();
        for (let i = moves.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newMoves[i], newMoves[j]] = [newMoves[j], newMoves[i]];
        }
        return newMoves;
    }

    pathGenerator() {
        let path = [this.pathStart];
        let moves = [[0, this.pathSize], [this.pathSize, 0], [-this.pathSize, 0], [0, -this.pathSize]];
        while (path[path.length - 1][0] + 100 < this.xBound || path[path.length - 1][1] + 100 < this.yBound) {
            let shuffledMoves = this.shuffle(moves);
            for (let index = 0; index < shuffledMoves.length; index++) {
                if ((path[path.length - 1][0] - shuffledMoves[index][0]) < 0 || (path[path.length - 1][1] - shuffledMoves[index][1]) < 0) {
                    shuffledMoves = shuffledMoves.splice(index, 1);
                }
            } 
            console.log(path[path.length - 1][0]);
            let currentMove = [path[path.length - 1][0] + shuffledMoves[0][0], path[path.length - 1][1] + shuffledMoves[0][1], this.pathSize, this.pathSize];
            path.push(currentMove);
            }
        return path;
    }

    //old path checker
    //this.path[this.path.length - 1][0], this.path[this.path.length - 1][1]

    // validPath(path, currentMove) {
    //     for (let i = path.length - 4; i < path.length - 1; i++) {
    //         if (path[i]) {
    //             for (let j = 0; j < 2; j++) {
    //                 console.log(path[i][j]);
    //                 if (path[i][j] === currentMove[j]) {
    //                     console.log("invalid move");
    //                     return false;
    //                 }
    //             }
    //         }
    //     }
    //     return true;
    // }
}
    
    //END OF CLASS

export default Level;