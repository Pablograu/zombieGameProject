function Bullet(canvas, playerX){
    this.canvas = canvas;
    this.width =  10;
    this.height =  10;
    this.x = playerX;
    this.y = 400;
    this.ctx = canvas.getContext("2d");
    this.direction = 1;
    this.speed = 4;
    this.image = new Image();
    this.sound = new Audio("./sounds/laser.mp3")
}

Bullet.prototype.draw = function(){
    this.image.src = "./images/lasersRed.png";
    this.sound.play();
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
}

Bullet.prototype.update = function(){
    this.y -= (this.speed * this.direction);
    
}

Bullet.prototype.isInScreen = function (){
    return this.y <= 0;
}
