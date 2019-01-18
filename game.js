function Game(canvas){
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.player = new Player(canvas);
}

Game.prototype.start = function(){
    this.player.draw();
    console.log("Game started");
}