const fs = require("fs");
const loader = require("@assemblyscript/loader");
const imports = { 
    game: {
        draw: (data)=>{
            const buffer = __getArrayView(data);
            for(let i=0;i<10;i++) {
                const view = __getArrayView(buffer[i]);
                const v =[];
                for(let j=0;j<10;j++) {
                    v.push(view[j]);
                }   
                console.log(v.join(','));
            }
            console.log('\n');
        }
    }
 };
const wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + "/build/optimized.wasm"), imports);
const { gameStep, snake, __getArrayView, Snake} = wasmModule.exports;
gameStep();
const snk = Snake.wrap(snake);
snk.handleEvents(2);
gameStep();
gameStep();
//console.log(snake, gameStep);
//module.exports = wasmModule.exports;
