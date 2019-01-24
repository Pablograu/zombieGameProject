function Enemy(canvas, x){
    this.canvas = canvas;
    this.width =  55;
    this.height =  58;
    this.x = x;
    this.y = 0;
    this.ctx = canvas.getContext("2d");
    this.direction = 1;
    this.speed = 1.10;
    this.health = true;
    this.image = new Image();
}

Enemy.prototype.draw = function(){
    // this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.image.src = "./images/zomb.png";
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
}

Enemy.prototype.update = function(){
    this.y += (this.speed * this.direction);
     
    // console.log(this.x);
}

Enemy.prototype.getsShot = function(bullet){
    var yShot = this.x < bullet.x && this.x + this.width > bullet.x;
    var xShot = this.y < bullet.y && this.y + this.height > bullet.y;
    return xShot && yShot;
    
};

// Enemy.prototype.reculate = function(bullet)
