
function Game(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.player = new Player(canvas);
    this.bullet;
    this.animation;
}



//Loop que limpia el canvas desde la posicion 0,0 hasta toda la altura y anchura del canvas
Game.prototype.clearCanvas = function(){
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//draw player, enemy and bullet
Game.prototype.drawCanvas = function(){
    this.player.draw();
    if(this.bullet) {
        this.bullet.draw();
    }
   
};

Game.prototype.updateCanvas = function(){
    this.player.update();
    if(this.bullet){
        this.bullet.update();   
    }     
};

Game.prototype.start = function(){
    console.log("Game started");
    function loop(){

        this.updateCanvas();
        this.clearCanvas();
        this.drawCanvas();
        window.requestAnimationFrame(loop.bind(this));
    }
    window.requestAnimationFrame(loop.bind(this));
    
};

Game.prototype.moveRight = function(){
    this.player.setDirection("right");
};

Game.prototype.moveLeft = function(){
    this.player.setDirection("left");
};

Game.prototype.still = function(){
    this.player.setDirection("still");
}

Game.prototype.createBullet = function(){
    this.bullet = new Bullet(canvas, this.player.x);    
    console.log("bullet created");
}

Game.prototype.shoot = function(){
    this.createBullet();
    console.log("bang!");
}

