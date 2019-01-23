
function Game(canvas, endGame){
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.player = new Player(canvas);
    this.bullets = [];
    this.enemies = [];
    this.animation;
    this.score = 0;
    this.endGame = endGame;
    this.sound = new Audio("./sounds/ohshit2.mp3")
    this.sound2 = new Audio("./sounds/headshot.mp3")
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
    this.drawScore();
    
};

Game.prototype.updateCanvas = function(){
    this.player.update();

    this.bullets = this.bullets.filter((function (bullet){
        return !bullet.isInScreen();
        }).bind(this));

    this.bullets.forEach(function(bullet){
        bullet.update();


    this.enemies.forEach(function(enemy){
            if(enemy.getsShot(bullet)){
                this.addScore();
            }
        }.bind(this));
        
    this.enemies = this.enemies.filter(function (enemy){
    
        return !enemy.getsShot(bullet); 
        }.bind(this));

    
    }.bind(this));

    
    if (Math.random() > 0.94){  //creates enemy with a probability of 5% in every frame
        this.createEnemy();
    }
    this.enemies.forEach(function(enemy){
        enemy.update();
        this.followPlayer(enemy);

        if(this.player.checkCollisions(enemy)){
            this.player.isDead = true;
            this.sound.play();
            
        };
        
    }.bind(this));

};

Game.prototype.drawScore =function() {
    this.ctx.font = "16px 'Press Start 2P', cursive";
    this.ctx.fillStyle = "#f9fbff";
    this.ctx.fillText("Score: "+ this.score, 50, 20);
    }

Game.prototype.stopGame = function(){
    console.log("stoooooooooooooop")
    window.cancelAnimationFrame(this.animation);
}

Game.prototype.followPlayer = function(enemy){     //the enemy updates its x acording to the player.x
    if(enemy.x > this.player.x){                    
        enemy.x -= 0.3;
    }else{
        enemy.x += 0.3;
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

Game.prototype.addScore = function(){
    this.sound2.play();
    this.score += 100;
}