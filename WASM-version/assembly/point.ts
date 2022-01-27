import { DIR } from './dir';

class Point{
    constructor(public x: i32, public y: i32) {
        this.x = x;
        this.y = y;
    }
    copy(point: Point): void{
        this.x= point.x;
        this.y = point.y;
    }
    move(dir: DIR): void {
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
    equal(point: Point): bool{
        return this.x == point.x && this.y == point.y;
    }
}

export {
    Point
};