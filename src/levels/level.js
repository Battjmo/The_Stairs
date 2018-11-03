import Util from '../util';

class Level {
    constructor(context) {
        this.context = context;
        this.xBound = 900;
        this.yBound = 700;
        this.pathSize = 100;
        this.pathX = this.pathSize;
        this.pathY = this.pathSize;
        this.pathStart = [0, 0];
        this.shuffle = this.shuffle.bind(this);
        // this.validPath = this.validPath.bind(this);
        this.path = this.pathGenerator();
    }

    drawLevel() {
        this.context.beginPath();
        for (let i = 0; i < this.path.length; i++) {
            this.context.rect(this.path[i][0], this.path[i][1], this.pathSize, this.pathSize);
            this.context.fillStyle = "rgb(224, 11, 64)";
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
        console.log(path[path.length - 1][0] + 100);
        while (path[path.length - 1][0] + 100 < this.xBound && path[path.length - 1][1] + 100 < this.yBound) {
            let shuffledMoves = this.shuffle(moves);
            console.log(path);
            let currentMove = this.validMove(path, shuffledMoves);
            path = path.slice();
            path.push(currentMove);
            console.log(path);
            }
        return path;
    }

    validMove(path, shuffledMoves) {
        // remove out of bounds 
        let workingMoves = shuffledMoves.slice();
        // workingMoves.forEach((element) => {
        //     console.log(element);
        // });
        let currentMoveIndex = 0;
        // for (let index = 0; index < workingMoves.length; index++) {
        //     console.log(path[path.length - 1][0] + workingMoves[index][0], path[path.length - 1][1] + workingMoves[index][1])
            // if ((path[path.length - 1][0] + workingMoves[index][0]) < 0 || (path[path.length - 1][1] + workingMoves[index][1]) < 0) {
            //     workingMoves.splice(index, 1);
            // }
        // } 
        workingMoves.forEach((element) => {
            if ((path[path.length - 1][0] + element[0]) < 0 || (path[path.length - 1][1] + element[1]) < 0) {
                workingMoves.splice(workingMoves.indexOf(element), 1);
            }
        });
        console.log("working moves: ", workingMoves);
        //check for path collision
        let currentMove = [path[path.length - 1][0] + workingMoves[0][0], path[path.length - 1][1] + workingMoves[0][1]];
        for (let j = 0; j < path.length; j++) {
                if (path[j][0] === currentMove[0] && path[j][1] === currentMove[1]) {
                    console.log("in here");
                    console.log(currentMoveIndex);
                    currentMoveIndex++;
                    console.log(workingMoves[currentMoveIndex]);
                    currentMove = [path[path.length - 1][0] + workingMoves[currentMoveIndex][0], path[path.length - 1][1] + workingMoves[currentMoveIndex][1]];
            }
        return currentMove;
        }
    }

    
}
    
    //END OF CLASS

export default Level;