function Player(canvas){
    this.canvas = canvas;
    this.width =  25;
    this.height =  25;
    this.x = (canvas.width - (this.width + this.height))/2;
    this.y = 400;
    this.ctx = canvas.getContext("2d");
    this.direction = 0;
    this.speed = 3.5;
    this.isDead = false;
}

Player.prototype.draw = function(){
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
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
    var collisionTop = this.y < enemy.y + enemy.height - 30;
    var collisionLeft = this.x <= enemy.x + enemy.width;
    var collisionRight = this.x + this.width >= enemy.x;
    return collisionTop && collisionLeft && collisionRight;
   }

