import { Snake } from "./snake"
import { SeedGenerator } from './seedGenerator'
import { Buffer } from './buffer';
declare function draw(input: i32[][]): void;

const snake = new Snake();
const buffer = new Buffer();
const seedGen = new SeedGenerator();

function gameStep(): void {
    if(snake.isAlive) {
        const snakeBody = snake.getBody();
        const seed = seedGen.generateSeed(snake);
        buffer.setArr(snakeBody, 1);
        buffer.set(seed, 1);
        draw(buffer.buffer);
        buffer.setArr(snakeBody, 0);
        buffer.set(seed, 0);
        snake.moveOnce();
        snake.checkAlive();
        snake.checkAteSeed(seedGen);
    }
}

export {
    gameStep,
    snake,
    Snake
}
