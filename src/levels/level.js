import Util from '../util';
import Events from '../events/eventList';
import Shapes from './shapes';

class Level {
    constructor(context, startX = 0, startY = 0, textBox, events = Events) {
        this.context = context;
        this.textBox = textBox;
        this.xBound = 900;
        this.yBound = 600;
        this.pathSize = 100;
        this.pathX = this.pathSize;
        this.pathY = this.pathSize;
        this.shuffle = Util.shuffle.bind(this);
        this.pathStart = [startX, startY, 100, 100];
        this.path = this.pathGenerator2();
        this.event = this.seedEvent(events);
        this.eventIndex = 0;
        // this.smallPath = new Image(100,100);
        // this.smallPath.src = '../assets/path_sprite.png';
        // this.bigPath = new Image(200, 200);
        // this.bigPath.src = '../assets/path_sprite_big_square.png';
        // this.tallPath = new Image(100, 200);
        // this.tallPath.src = '../assets/path_sprite_long.png';
        // this.widePath = new Image(200, 100);
        // this.widePath.src = '../assets/path_sprite_wide.png';
    }

    // PATH ALGOS USING PREMADE SHAPES AND EVENTS
    drawLevel2() {
        this.context.beginPath();
        for (let i = 0; i < this.path.length; i++) {
            this.context.rect(this.path[i][0], this.path[i][1], this.path[i][2], this.path[i][3]);
            this.context.fillStyle = "rgb(224, 11, 64)";
            // this.context.fillStyle = this.path[i][4];
            this.context.fill();
            // if (Util.compareArrays(this.path[i], Shapes[0])) {
            //     this.context.drawImage(this.smallPath, this.path[i][0], this.path[i][1], this.path[i][2], this.path[i][3]);            
            // }
        } 
    }

    pathGenerator2() {
        let path = [this.pathStart];
        while (path[path.length - 1][0] + 100 < this.xBound && path[path.length - 1][1] + 100 < this.yBound) {
            let currentShapes = this.shuffle(Shapes);
            let currentShape = this.validShape(path, currentShapes);
            path = path.slice();
            path.push(currentShape);
        }
        return path;
    }

    validShape(path, currentShapes) {
        let currentShapeIndex = 0;
        let workingShapes = currentShapes.slice();
        let currentShape;
        let i = 0;
        while (workingShapes[i]) {
            if ((path[path.length - 1][0] + workingShapes[i][0]) < 0 || (path[path.length - 1][1] + workingShapes[i][1]) < 0) {
                workingShapes.splice(i, 1);
            } else {
                i++;
            }
        }
        if (Util.randomNumber(0,2) === 1) {
            currentShape = [path[path.length - 1][0], path[path.length - 1][1] + path[path.length - 1][3], workingShapes[0][2], workingShapes[0][3]];
        } else {
            currentShape = [path[path.length - 1][0] + path[path.length - 1][2], path[path.length - 1][1], workingShapes[0][2], workingShapes[0][3]];

        }
        for (let j = 0; j < path.length; j++) {
            if (path[j][0] === currentShape[0] && path[j][1] === currentShape[1]) {
                currentShapeIndex += 1;
                currentShape = [path[path.length - 1][0] + workingShapes[currentShapeIndex][0], path[path.length - 1][1] + workingShapes[currentShapeIndex][1]];
            }
            return currentShape;
        }
    }

    seedEvent(events) {
        if (events[0].played === false) {
            events[0].size.unshift(0, 0);
            return events[0];
            }
        let playEnd = true;
        for (let j = 0; j < events.length - 1; j++) {
            if (events[j].played === false) {
                playEnd = false;
            }
        }
        if (playEnd === true) {
            events = events.slice(3);
        }
        for (let i = 0; i < this.path.length; i++) {
            for (let j = 0; j < events.length; j++) {
                if (this.path[i][2] === events[j].size[0] && this.path[i][3] === events[j].size[1] && events[j].played === false) {
                    if (Util.randomNumber(0, 2) === 1) {
                        events[j].size.unshift(this.path[i][0], this.path[i][1]);
                        return events[j];
                    }
                }
            }
        } 

    }

//END OF CLASS
}
    
export default Level;

  /* ORIGINAL FREEFORM PATH GENERATION ALGOS

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
        console.log(path);
        return path;
    }

    validMove(path, shuffledMoves) {
        // remove out of bounds 
        let workingMoves = shuffledMoves.slice();
        let currentMoveIndex = 0;
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

    */