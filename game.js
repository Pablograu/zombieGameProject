
function Game(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.player = new Player(canvas);
    this.animation;
}



//Loop que limpia el canvas desde la posicion 0,0 hasta toda la altura y anchura del canvas
Game.prototype.clearCanvas = function(){
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//draw player, enemy and bullets
Game.prototype.drawCanvas = function(){
    this.player.draw();
}

Game.prototype.updateCanvas = function(){
    this.player.update();
}

Game.prototype.start = function(){
    console.log("Game started");
    function loop(){

        this.updateCanvas();
        this.clearCanvas();
        this.drawCanvas();
        window.requestAnimationFrame(loop.bind(this));
    }
    window.requestAnimationFrame(loop.bind(this));
    
}