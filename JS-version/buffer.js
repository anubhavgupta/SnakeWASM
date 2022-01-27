class Buffer {
    constructor() {
        const buffer = Array(10).fill(0);
        this.buffer = buffer.map(()=>{
            const buffer = Array(10).fill(0);
            return buffer;
        });
    }

    getBuffer() {
        return this.buffer;        
    }

    set(point, val) {
        this.buffer[point.x][point.y] = val;
    }

    setArr(arr, val) {
        arr.forEach((pt) => this.set(pt, val));
    }

    clear() {
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