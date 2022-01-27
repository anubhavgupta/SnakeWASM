import { Point } from "./point";

class Buffer {
    public buffer: Array<Array<i32>>;
    constructor() {
        const buffer = (new Array<i32>(10)).fill(0);
        this.buffer = buffer.map<Array<i32>>(()=>{
            const buffer = (new Array<i32>(10)).fill(0);
            return buffer;
        });
    }

    getBuffer(): Array<Array<i32>> {
        return this.buffer;        
    }

    set(point: Point, val: i32): void {
        this.buffer[point.x][point.y] = val;
    }

    setArr(arr: Array<Point>, val: i32): void {
        for(let i=0;i< arr.length; i++) {
            this.set(arr[i], val);
        }
    }

    clear(): void {
        for(let i=0;i<10; i++) {
            for(let j=0;j<10; j++) {
                this.buffer[i][j] = 0;
            }   
        }
    }
}

export {
    Buffer
}