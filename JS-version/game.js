import { draw } from "./renderer.js";
import { Snake } from "./snake.js"
import { SeedGenerator } from './seedGenerator.js'
import { Buffer } from './buffer.js';

const snake = new Snake();
const buffer = new Buffer();
const seedGen = new SeedGenerator();

function gameStep(){
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

let lastTime = 0;
function gameLoop(time) {
    if(time > lastTime + 100) {
        lastTime = time;
        gameStep();
    }
    requestAnimationFrame(gameLoop);   
}

gameLoop();

