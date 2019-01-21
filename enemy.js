function Enemy(canvas, x){
    this.canvas = canvas;
    this.width =  25;
    this.height =  25;
    this.x = x;
    this.y = 0;
    this.ctx = canvas.getContext("2d");
    this.direction = 1;
    this.speed = 0.40;
}

Enemy.prototype.draw = function(){
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

Enemy.prototype.update = function(){
    this.y += (this.speed * this.direction);
    // console.log(this.x);
}