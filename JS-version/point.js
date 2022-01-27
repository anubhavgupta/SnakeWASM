import { DIR } from './dir.js';
class Point{
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    copy(point){
        this.x= point.x;
        this.y = point.y;
    }
    move(dir) {
        switch(dir){
            case DIR.UP:
                this.y--;
                break;
            case DIR.DOWN:
                this.y++;
                break;
            case DIR.RIGHT:
                this.x++;
                break;
            case DIR.LEFT:
                this.x--;
                break;
            default: 
                break;
        }
    }
    equal(point){
        return this.x == point.x && this.y == point.y;
    }
}

export {
    Point
};