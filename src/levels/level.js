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
            let currentMove = this.validPath(path, shuffledMoves);
            for (let index = 0; index < shuffledMoves.length; index++) {
                if ((path[path.length - 1][0] - shuffledMoves[index][0]) < 0 || (path[path.length - 1][1] - shuffledMoves[index][1]) < 0) {
                    shuffledMoves = shuffledMoves.splice(index, 1);
                }
            } 
            currentMove = [path[path.length - 1][0] + shuffledMoves[0][0], path[path.length - 1][1] + shuffledMoves[0][1], this.pathSize, this.pathSize];
            path.push(currentMove);
            }
        return path;
    }

    validPath(path, shuffledMoves) {
        // remove out of bounds 
        let workingMoves = shuffledMoves.slice();
        let currentMoveIndex = 0;
        for (let index = 0; index < workingMoves.length; index++) {
            if ((path[path.length - 1][0] - workingMoves[index][0]) < 0 || (path[path.length - 1][1] - workingMoves[index][1]) < 0) {
                workingMoves.splice(index, 1);
            }
        } 
        let currentMove = [path[path.length - 1][0] + workingMoves[0][0], path[path.length - 1][1] + workingMoves[0][1], this.pathSize, this.pathSize];

        for (let j = 0; j < path.length; j++) {
            for (let k = 0; k < 2; k++) {
                // console.log("path: ", path);
                // console.log(currentMove);
                if (path[j][0] === currentMove[0] && path[j][1] === currentMove[1]) {
                    // console.log("in here");
                    currentMoveIndex++;
                    // console.log(workingMoves);
                    currentMove = [path[path.length - 1][0] + workingMoves[currentMoveIndex][0], path[path.length - 1][1] + workingMoves[currentMoveIndex][1], this.pathSize, this.pathSize];
                }
            }
        }
        return currentMove;
    }
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

    
}
    
    //END OF CLASS

export default Level;