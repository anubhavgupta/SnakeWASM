//import { handleKeyEvents } from './keyhandle.js';
import { Point } from './point';
import { DIR } from './dir';
import { SeedGenerator } from './seedGenerator';

class Snake {
    private body: Array<Point>;
    private isAlive: bool;
    private direction: DIR;
    private lastTalePos: Point;
    constructor(){
        this.body = [
            new Point(5,5),
            new Point(5,6),
            new Point(5,7),
            new Point(5,8),
            new Point(5,9),
        ];
        this.isAlive = true;
        this.lastTalePos = new Point(0,0);
        this.direction = DIR.UP;
    }
    handleEvents(input: i32): void {
        switch(input) {
            case 1:
                if(this.direction !== DIR.DOWN) {
                    this.direction = DIR.UP;
                }
                break;
            case 3:
                if(this.direction !== DIR.UP) {
                    this.direction = DIR.DOWN;
                }
                break;
            case 2:
                if(this.direction !== DIR.LEFT) {
                    this.direction = DIR.RIGHT;
                }
                break;
            case 4:
                if(this.direction !== DIR.RIGHT) {
                    this.direction = DIR.LEFT;
                }
                break;
        }
    }
    getBody(): Array<Point> {
        return this.body;
    };
    private setDirection(dir: DIR): void {
        this.direction = dir;
    }
    moveOnce(): void {
        const newHead = this.body.pop();
        this.lastTalePos = new Point(0,0);
        this.lastTalePos.copy(newHead);
        newHead.copy(this.body[0]);
        newHead.move(this.direction);
        this.body.unshift(newHead);
    }
    private getHead(): Point{
        return this.body[0];
    }
    checkAlive(): bool {
        this.isAlive = !(this.checkHeadCollidingWithBody() || this.checkHeadCollidingWithWalls());
        return this.isAlive;
    }
    private checkHeadCollidingWithBody(): bool{
        for(let i=1; i<this.body.length; i++) {
            if(this.body[i].equal(this.getHead())){
                return true;
            }
        }
        return false;
    }
    private checkHeadCollidingWithWalls(): bool{
        const head = this.getHead();
        return (head.x<0 || head.x >9 || head.y<0 || head.y>9);
    }
    checkAteSeed(seedGen: SeedGenerator): void {
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
