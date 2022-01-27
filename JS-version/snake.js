import { handleKeyEvents } from './keyhandle.js';
import { Point } from './point.js';
import { DIR } from './dir.js';

class Snake {
    constructor(){
        this.body = [
            new Point(5,5),
            new Point(5,6),
            new Point(5,7),
            new Point(5,8),
            new Point(5,9),
        ];
        this.isAlive = true;
        this.lastTalePos = null;
        this.direction = DIR.UP;
        this.handleEvents = this.handleEvents.bind(this);
        handleKeyEvents(this.handleEvents);
    }
    handleEvents(key) {
        switch(key) {
            case 'ArrowUp':
                if(this.direction !== DIR.DOWN) {
                    this.direction = DIR.UP;
                }
                break;
            case 'ArrowDown':
                if(this.direction !== DIR.UP) {
                    this.direction = DIR.DOWN;
                }
                break;
            case 'ArrowRight':
                if(this.direction !== DIR.LEFT) {
                    this.direction = DIR.RIGHT;
                }
                break;
            case 'ArrowLeft':
                if(this.direction !== DIR.RIGHT) {
                    this.direction = DIR.LEFT;
                }
                break;
        }
    }
    getBody() {
        return this.body;
    };
    setDirection(dir) {
        this.direction = dir;
    }
    moveOnce() {
        const newHead = this.body.pop();
        this.lastTalePos = new Point();
        this.lastTalePos.copy(newHead);
        newHead.copy(this.body[0]);
        newHead.move(this.direction);
        this.body.unshift(newHead);
    }
    getHead(){
        return this.body[0];
    }
    checkAlive() {
        this.isAlive = !(this.checkHeadCollidingWithBody() || this.checkHeadCollidingWithWalls());
        return this.isAlive;
    }
    checkHeadCollidingWithBody(){
        for(let i=1; i<this.body.length; i++) {
            if(this.body[i].equal(this.getHead())){
                return true;
            }
        }
    }
    checkHeadCollidingWithWalls(){
        const head = this.getHead();
        return (head.x<0 || head.x >9 || head.y<0 || head.y>9);
    }
    checkAteSeed(seedGen) {
        const head = this.getHead();
        if(head.equal(seedGen.seed)) {
            this.body.push(this.lastTalePos);
            seedGen.setConsumed();
        }
    }
}

export {
    Snake
};
