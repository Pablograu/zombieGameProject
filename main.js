"use strict";
var splashMusic = new Audio("./sounds/splashAudio.mp3"); // buffers automatically when created
var grupZombies = new Audio("./sounds/groupZombies.mp3");
var shotSound = new Audio("./sounds/laser.mp3")
var splashScreen;
var gameScreen;
var gameOverScreen;
var counter;
var isPlaying = true;

function isMusicPlaying() {
  setTimeout(function(){splashMusic.play()},100)
}

function startGameClick() {
  destroySplashScreen();
  buildGameScreen();
}

function playAgainClick() {
  destroyGameOverScreen();
  buildSplashScreen();
}

//-------------------------------------------
function buildDom(html) {
  var playGround = document.querySelector(".container");
  playGround.innerHTML = html;
  return playGround;
}

function destroyDom(playGround) {
  playGround.innerHTML = "";

}
//--------------------------------------------

function buildSplashScreen() {
  isMusicPlaying();
  splashScreen = buildDom(`
    <div class="splash">
    <h1>IronSurvival</h1>
            <p>Press left and right key to move.</p> 
            <p> Press "S" key to shoot</p>
            <p>Good Luck</p>
            <button class="startBtn">Start</button>
    </div>
    `);

  splashScreen
    .querySelector(".startBtn")
    .addEventListener("click", startGameClick);

};


function destroySplashScreen() {
  destroyDom(splashScreen);
};

//--------------------------------------------

function buildGameScreen() {    //canvas
  gameScreen = buildDom(`
    <section class="game">
            <div class="canvas_title">
                <h1>IronSurvival</h1>
            </div>
            <canvas id="canvas" width="500" height="550">

            </canvas>
        </section>
    `);
  var canvas = document.getElementById("canvas");

  grupZombies.volume = 0.05;
  grupZombies.play();
  var gameEnd = function () {
    counter = game.getScore();
    game.stopGame()
    destroyGameScreen();
    buildGameOverScreen();
  }


  var game = new Game(canvas, gameEnd);

  function onKeyDown(event) {
    switch (event.keyCode) {
      case 83:
        game.shoot();


        break;
      case 39:
        game.moveRight();
        break;
      case 37:
        game.moveLeft();
        break;
      default:
        game.still();

    }
  }
  document.addEventListener("keydown", onKeyDown);

  game.start();
  console.log("lets play!!!");
};


function destroyGameScreen() {

  destroyDom(gameScreen);
  console.log("game screen destroyed")
}

//-----game over
function buildGameOverScreen() {
  gameOverScreen = buildDom(`
    <section class="gameover">
                <div class="gameOver_title">
                    <p class="score">Score:${counter} </p>
                    <h1>Game Over</h1>
                    <div class="image">
                    <img class="eye" src="images/eye.gif">
                    </div>
                    
                </div>
                <button class="playAgainBtn">Start Again</button>
        </section>
    `)

  gameOverScreen
    .querySelector(".playAgainBtn")
    .addEventListener("click", playAgainClick);
};

function destroyGameOverScreen() {
  counter = 0;
  destroyDom(gameOverScreen);

}

function loadGame() {
  console.log("Game ready");
  buildSplashScreen();
}


window.addEventListener("load", loadGame);