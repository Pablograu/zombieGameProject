function Player(canvas){
    this.canvas = canvas;
    this.width =  40;
    this.height =  40;
    this.x = (canvas.width - (this.height + this.width))/2;
    this.y = 20;
    this.ctx = canvas.getContext("2d");
}

Player.prototype.draw = function(){
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
}