function handleKeyEvents(fn){
    document.addEventListener('keydown', (e)=>{
       fn(e.key); 
    });
}

export {
    handleKeyEvents
};
