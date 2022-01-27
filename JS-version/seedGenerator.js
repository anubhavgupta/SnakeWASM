import { Point } from './point.js';

class SeedGenerator {
    constructor(){
        this.seed = new Point(0,0);
        this.isConsumed = true;
    }
    generateSeed(snake) {
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
    getRandPosition(){
        return parseInt(Math.random()*9);
    }
    checkSeedCollisionWithBody(snake){
        const snakeBody = snake.getBody();
        for(let i=0; i< snakeBody.length; i++) {
            if(snakeBody[i].equal(this.seed)){
                return true;
            }
        }
    }
    setConsumed(){
        this.isConsumed = true;
    }
}

export {
    SeedGenerator
};