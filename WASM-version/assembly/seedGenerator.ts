import { Point } from './point';
import { Snake } from './snake';

class SeedGenerator {
    public seed: Point;
    public isConsumed: bool;
    constructor(){
        this.seed = new Point(0,0);
        this.isConsumed = true;
    }
    generateSeed(snake: Snake): Point {
        if(this.isConsumed) {
            this.isConsumed = false;
            this.seed = new Point(
                this.getRandPosition(),
                this.getRandPosition()
            );
            while(this.checkSeedCollisionWithBody(snake)) {
                this.seed = new Point(
                    this.getRandPosition(),
                    this.getRandPosition()
                );
            }
        }
        return this.seed;
    }
    getRandPosition(): i32 {
        return Math.random()*9 as i32;
    }
    checkSeedCollisionWithBody(snake: Snake): bool{
        const snakeBody = snake.getBody();
        for(let i=0; i< snakeBody.length; i++) {
            if(snakeBody[i].equal(this.seed)){
                return true;
            }
        }
        return false;
    }
    setConsumed(): void{
        this.isConsumed = true;
    }
}

export {
    SeedGenerator
};