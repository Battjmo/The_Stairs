import Util from '../util';
import Text from '../events/text';

class Level {
    constructor(context, startX = 0, startY = 0, textBox) {
        this.context = context;
        this.textBox = textBox;
        this.xBound = 900;
        this.yBound = 500;
        this.pathSize = 100;
        this.pathX = this.pathSize;
        this.pathY = this.pathSize;
        this.shuffle = Util.shuffle.bind(this);
        this.pathStart = [startX, startY];
        this.path = this.pathGenerator();
        this.textBox.innerHTML = Util.shuffle(Text)[0];
    }

    drawLevel() {
        this.context.beginPath();
        for (let i = 0; i < this.path.length; i++) {
            this.context.rect(this.path[i][0], this.path[i][1], this.pathSize, this.pathSize);
            this.context.fillStyle = "rgb(224, 11, 64)";
            this.context.fill();
        } 
    }

    pathGenerator() {
        let path = [this.pathStart];
        let moves = [[0, this.pathSize], [this.pathSize, 0], [-this.pathSize, 0], [0, -this.pathSize]];
        while (path[path.length - 1][0] + 100 < this.xBound && path[path.length - 1][1] + 100 < this.yBound) {
            let shuffledMoves = this.shuffle(moves);
            let currentMove = this.validMove(path, shuffledMoves);
            path = path.slice();
            path.push(currentMove);
            }
        return path;
    }

    validMove(path, shuffledMoves) {
        // remove out of bounds 
        let workingMoves = shuffledMoves.slice();
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
        //check for path collision
        let currentMove = [path[path.length - 1][0] + workingMoves[0][0], path[path.length - 1][1] + workingMoves[0][1]];
        for (let j = 0; j < path.length; j++) {
                if (path[j][0] === currentMove[0] && path[j][1] === currentMove[1]) {
                    currentMove = [path[path.length - 1][0] + workingMoves[currentMoveIndex][0], path[path.length - 1][1] + workingMoves[currentMoveIndex][1]];
            }
        return currentMove;
        }
    }

//END OF CLASS
}
    


export default Level;