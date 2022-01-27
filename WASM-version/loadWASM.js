import loader from "https://cdn.jsdelivr.net/npm/@assemblyscript/loader@0.19.22/index.min.js";
import { clear, setPixel, enablePixeDrawMode } from '../JS-version/canvas.js';

async function getModule(modulePath, imports) {
    let contents = await fetch(modulePath);
    contents = await contents.arrayBuffer();
    const wasmModule = await loader.instantiate(contents, imports);
    return wasmModule.exports;
}

function draw(getArrayView) {
    return (data) => {
        clear();
        enablePixeDrawMode();
        const buffer = getArrayView(data);
        for(let i=0;i<10;i++) {
            const view = getArrayView(buffer[i]);
            for(let j=0;j<10;j++) {
                if(view[j]) {
                    setPixel(i,j);
                }
            }   
        }
    }
}

async function load(){
    const realImport = {};
    const imports = { 
        game: {
            draw: (data) => {
                realImport.draw(data);
            } 
        }
    };
    const module = await getModule("./build/optimized.wasm", imports);
    const { gameStep, snake, __getArrayView, Snake} = module;
    realImport.draw = draw(__getArrayView);
    const snk = Snake.wrap(snake);
    return {
        gameStep,
        snk
    };
}

export {
    load
};

