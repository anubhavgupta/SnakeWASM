const canvas = document.getElementsByTagName('canvas');
const ctx = canvas[0].getContext('2d');
const pixelWidth = 40;
const pixelHeight = 40;

function clear(){
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0,0, 400,400);
}

function enablePixeDrawMode(){
    ctx.fillStyle = "#000000";
}

function setPixel(x,y) {
    ctx.fillRect(x*pixelWidth,y*pixelHeight, pixelWidth,pixelHeight);
}

export {
    clear,
    setPixel,
    enablePixeDrawMode
}

        