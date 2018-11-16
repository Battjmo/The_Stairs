import Util from '../util';
import Text from '../events/text';
import Events from '../events/eventList';

class Level {
    constructor(context, startX = 0, startY = 0, textBox, events = Events) {
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
        // this.events = this.seedEvents(events);
        this.textBox.innerHTML = this.textSetter();
    }

    textSetter(textIndex) {
        if (Text[textIndex]) return Text[textIndex];
        return "That's all the text so far.";
    }

    drawLevel() {
        this.context.beginPath();
        for (let i = 0; i < this.path.length; i++) {
            this.context.rect(this.path[i][0], this.path[i][1], this.pathSize, this.pathSize);
            this.context.fillStyle = "rgb(224, 11, 64)";
            this.context.fill();
        } 
    }

    /* PATH GEN VOLUME 2: TETRIS STYLE
        1. MAKE A BANK OF SHAPES
        2. START FROM THE PROPER SPOT AS BEFORE
        3. FILTER FOR SHAPES THAT CAN FIT AT THE CURRENT START COORDINATE
        4. USE RNG TO SELECT A SHAPE FROM THE FILTERED LIST
        5. DRAW THE SHAPE
        6. USE RNG AGAIN TO DETERMINE IF EVENT GETS PLACED ON THAT SHAPE
        7. CHECK IF THAT SPACE TOUCHES ONE OF THE EXIT WALLS:
            IF YES: MAKE THE EXIT AS NORMAL
            IF NO: CHOOSE AN ELIGIBLE EDGE LOCATION ON THE SHAPE TO BE THE EXIT POINT
        8. REPEAT UNTIL 7 IS TRUE
    */

    pathGenerator2() {
        let path = [this.pathStart];
        
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
        console.log(path);
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
        let i = 0;
        while (workingMoves[i]) {
            if ((path[path.length - 1][0] + workingMoves[i][0]) < 0 || (path[path.length - 1][1] + workingMoves[i][1]) < 0) {
                workingMoves.splice(i, 1);
            } else {
                i++;
            }
        }
        //check for path collision
        let currentMove = [path[path.length - 1][0] + workingMoves[0][0], path[path.length - 1][1] + workingMoves[0][1]];
        for (let j = 0; j < path.length; j++) {
                if (path[j][0] === currentMove[0] && path[j][1] === currentMove[1]) {
                    currentMoveIndex += 1;
                    currentMove = [path[path.length - 1][0] + workingMoves[currentMoveIndex][0], path[path.length - 1][1] + workingMoves[currentMoveIndex][1]];
            }
        return currentMove;
        }
    }

    // seedEvents(Event = Events) {
    //     for (let i = 0; i < this.path.length; i++) {

    //     }
    // }

//END OF CLASS
}
    


export default Level;