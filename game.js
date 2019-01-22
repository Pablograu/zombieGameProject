
function Game(canvas, endGame){
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.player = new Player(canvas);
    this.bullets = [];
    this.enemies = [];
    this.animation;
    this.score = 0;
    this.endGame = endGame;
}



//Loop que limpia el canvas desde la posicion 0,0 hasta toda la altura y anchura del canvas
Game.prototype.clearCanvas = function(){
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//draw player, enemy and bullet
Game.prototype.drawCanvas = function(){
    var img = new Image();
    img.src = "./images/fff.png";
    this.ctx.drawImage(img,0, 0);
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

    // this.bullets = this.bullets.filter(function (bullet){
    //     return bullet.iSInScreen();
    //  }.bind(this));

    this.bullets.forEach(function(bullet){
         bullet.update();

         this.enemies = this.enemies.filter(function (enemy){
            return !enemy.getsShot(bullet);
         }.bind(this));
    }.bind(this));

    
    if (Math.random() > 0.9999){  //creates enemy with a probability of 5% in every frame
        this.createEnemy();
    }
    this.enemies.forEach(function(enemy){
        enemy.update();
        this.followPlayer(enemy);

        if(this.player.checkCollisions(enemy)){
            this.player.isDead = true;
            
        };

        
    }.bind(this));

};

// Game.prototype.stopGame = function(){
//     console.log("stoooooooooooooop")
//     window.cancelAnimationFrame(this.animation);
// }

Game.prototype.followPlayer = function(enemy){     //the enemy updates its x acording to the player.x
    if(enemy.x > this.player.x){                    
        enemy.x -= 0.2;
    }else{
        enemy.x += 0.2;
    }
}



Game.prototype.start = function(){
    console.log("Game started");
    function loop(){

        this.updateCanvas();
        this.clearCanvas();
        this.drawCanvas();
        this.animation = window.requestAnimationFrame(loop.bind(this));

        if(this.player.isDead){
            // this.stopGame();
            this.endGame(); 
        }

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
    this.bullets.push(new Bullet(canvas, (this.player.x+36)));    
    // console.log("bullet created");
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

