# zombieGameProject
Simple shooting/survival game

# Project's name

## Description
This game is a survival game where the player has to avoid being touched by the enemies while shooting at them. 
The more you kill, the higher your score will be.
You died when the enemies touch you.


## MVP (DOM - CANVAS)
Canvas

## Backlog
Images, music, upgrading skills and weapons, high scores and extra lives.

## Data structure
```
1.index.html
2.main.js
3.game.js
4.player.js
5.enemy.js
6.bullets.js
```

1) Index with js
2) Main.js
- start game (destroy splashScreen and build gameScreen)
 
- build dom (get canvas html)
 
- destroy dom (empty html)
 
- build splash screen(title, description, start btn)
 
- destroy splash screen (destroy dom -empty html-)
 
- build game screen (build dom =  canvas html)
 
- destroy game screen (destroy dom -empty html-)
 
- build gameOver screen (build dom = gameOver html)
 
- destroy gameOver screen (destroy dom - empty html)
 
- event listener keydown (left, right, Shoot, spacebar)
 
- load game

3)Game constructor
- args(canvas, gameEndHandler)
- new player
- array enemies
- animation
- gameEndHandler 
- clearCanvas()
- drawCanvas()
- updateGame()
```
player
create enemy
remove enemy
create bullet
remove bullet
check collision (enemy/bullet)
check collision (player/enemy)
```
- stop() cancelAnimationFrame
- key up, down and shoot
- START(): loop that update, clear and draws

4)Player constructor
- args(canvas, life)
- props: x, y, size, speed, life, canvas, ctx(2d);
- methods: setDirection(), draw(), update(), collide() 

** maybe collide() = die**

5)Enemy constructor
- args(canvas, x, speed);
- props: x, y, size, speed, life, canvas, ctx(2d)
- draw(), update(), collide(), remove()

6) Bullet constructor
- arg(canvas, y, speed)
- speed, x, y, size, canvas, ctx (2d)
- draw(), update(), collide(), remove()


## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameoverScreen
- winScreen


## Task

- create files
- link files
- transitions splsh - game - gameover
- style a bit
- draw player on canvas
- move player
- draw enemy
- make it come from -y to player position
- make more enemies
- shoot
- remove bullets/enemies from array
- collision logic (bullets + enemies)

## Links


### Trello
[Link url](https://trello.com)


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)# Project's name

## Description
This game is a survival game where the player has to avoid being touched by the enemies while shooting at them. 
The more you kill, the higher your score will be.
You died when the enemies touch you.


## MVP (DOM - CANVAS)
Splash - Game - Game Over
DOM manipulation to change screens
Start button
player moving
player shooting
enemies entering the canvas
enemies disappearing


## Backlog
Music, images, sprites, upgrading skills and weapons, 

## Data structure
VISUAL:
index.html
------------------------
LOGIC:
Main.js
 -start game (destroy splashScreen and build gameScreen)
 -build dom (get canvas html)
 -destroy dom (empty html)
 -build splash screen(title, description, start btn)
 -destroy splash screen (destroy dom -empty html-)
 -build game screen (build dom =  canvas html)
 -destroy game screen (destroy dom -empty html-)
 -build gameOver screen (build dom = gameOver html)
 -destroy gameOver screen (destroy dom - empty html)
 -event listener keydown (left, right, Shoot, spacebar)
 -load game

Game.js
 -Game constructor(canvas, gameOver)
	new player, new enemies, new bullets, gameOver.
 -creates player
	durection, x, y, size, lives
 -creates enemy
	
 -game methods

player.js
 -player constructor
 -player methods (collision?)

## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
title, description, start button
- gameScreen
canvas
- gameoverScreen
restart button, high scores button(?)

## Task
splash + canvas + game over. And its transitions


## Links


### Trello
[Link url](https://trello.com)


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
