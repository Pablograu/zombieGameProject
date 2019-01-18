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
Music, upgrading skills and weapons, 

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
- gameScreen
- gameoverScreen
- winScreen


## Task
-planning
Index, canvas, game over. LOGIC.


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
