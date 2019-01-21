function Player(canvas){
    this.canvas = canvas;
    this.width =  25;
    this.height =  25;
    this.x = (canvas.width - (this.width + this.height))/2;
    this.y = 400;
    this.ctx = canvas.getContext("2d");
    this.direction = 0;
    this.speed = 3.5;
}

Player.prototype.draw = function(){
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

Player.prototype.update = function(){
    this.x += (this.speed * this.direction);
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

