function Player(canvas){
    this.canvas = canvas;
    this.width =  50;
    this.height =  60;
    this.x = (canvas.width - (this.width + this.height))/2;
    this.y = 450;
    this.ctx = canvas.getContext("2d");
    this.direction = 0;
    this.speed = 3.5;
    this.isDead = false;
    this.image = new Image();
}

Player.prototype.draw = function(){
    this.image.src = "./images/player.png";
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
}

Player.prototype.update = function(){
    this.x += (this.speed * this.direction);
    if((this.x <= 0) || (this.x >= this.canvas.width - (this.width))){
        this.direction *= -1;
    }
        
    
    // console.log(this.x);
}

Player.prototype.setDirection = function(direction){
    if(direction === "right"){
        this.direction = 1;
    } else if(direction === "left"){
        this.direction = -1;
    } else if (direction === "still"){
        this.direction = 0;
    }
}

Player.prototype.checkCollisions = function(enemy) {
    var collisionTop = this.y < enemy.y + enemy.height - 50;
    var collisionLeft = this.x < enemy.x + enemy.width - 50;
    var collisionRight = this.x + this.width >= enemy.x + 30; 
    return collisionTop && collisionLeft && collisionRight;
   }

