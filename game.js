
function Game(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.player = new Player(canvas);
    this.bullets = [];
    this.enemies = [];
    this.animation;
}



//Loop que limpia el canvas desde la posicion 0,0 hasta toda la altura y anchura del canvas
Game.prototype.clearCanvas = function(){
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//draw player, enemy and bullet
Game.prototype.drawCanvas = function(){
    this.player.draw();
    this.bullets.forEach(function(bullet){
         bullet.draw()
    });
    this.enemies.forEach(function(enemy){
         enemy.draw();
    });
   
};

Game.prototype.updateCanvas = function(){
    this.player.update();
    this.bullets.forEach(function(bullet){
         bullet.update()
    });
    if (Math.random() > 0.95){
        this.createEnemy();
    }
    this.enemies.forEach(function(enemy){
        enemy.update();
    })

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
};

Game.prototype.createBullet = function(){
    this.bullets.push(new Bullet(canvas, (this.player.x+8)));    
    console.log("bullet created");
};

Game.prototype.shoot = function(){
    this.createBullet();
    console.log("bang!");
};
Game.prototype.createEnemy = function(){
    var x = Math.random() * canvas.width;
    this.enemies.push(new Enemy(canvas, x));
    console.log("enemy created");

};

