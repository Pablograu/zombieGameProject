function Player(canvas){
    this.canvas = canvas;
    this.width =  10;
    this.height =  10;
    this.x = (canvas.width - (this.width + this.height))/2;
    this.y = 400;
    this.ctx = canvas.getContext("2d");
    this.direction = 0;
    this.speed = 0;
}

Player.prototype.draw = function(){
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

Player.prototype.update = function(){
    // this.x = Math.floor((this.x + this.speed) * this.direction);
    this.x = this.x + (this.speed * this.direction);
    console.log(this.x);
}