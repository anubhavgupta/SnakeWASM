import { clear, setPixel, enablePixeDrawMode } from './canvas.js';

function draw(buffer) {
    clear();
    enablePixeDrawMode();
    for(let i=0;i<10; i++) {
        for(let j=0;j<10; j++) {
            if(buffer[i][j]) {
                setPixel(i,j);
            }
        }   
    }
}

export {
    draw
};
