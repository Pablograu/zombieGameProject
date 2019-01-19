function Player(canvas){
    this.canvas = canvas;
    this.width =  10;
    this.height =  10;
    this.x = 250;
    this.y = 150;
    this.ctx = canvas.getContext("2d");
    this.direction = 0;
    this.speed = 0;
}

Player.prototype.draw = function(){
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

Player.prototype.update = function(){
    this.x = Math.floor((this.x + this.speed) * this.direction);
    console.log(this.x);
}