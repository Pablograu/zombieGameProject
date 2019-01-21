function Bullet(canvas, playerX){
    this.canvas = canvas;
    this.width =  10;
    this.height =  10;
    this.x = playerX;
    this.y = 400;
    this.ctx = canvas.getContext("2d");
    this.direction = 1;
    this.speed = 4;
}

Bullet.prototype.draw = function(){
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    // console.log("this should be a bullet");
}

Bullet.prototype.update = function(){
    this.y -= (this.speed * this.direction);
}
