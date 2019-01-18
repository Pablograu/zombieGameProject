"use strict";

// var ex = document.querySelector(".navbar");
// var lis = document.querySelector(".intro img")
// ex.addEventListener("click", function(){
//     lis.classList.toggle("hide");
// })
var splashScreen;
var gameScreen;
var gameOverScreen;

function startGameClick(){
    destroySplashScreen();
    buildGameScreen();
    
}

function playAgainClick(){
    destroyGameOverScreen();
    buildSplashScreen();
    
}

//-------------------------------------------
function buildDom(html){
    var playGround = document.querySelector(".container");
    playGround.innerHTML = html;
    return playGround;
}

function destroyDom(playGround){
    playGround.innerHTML = "";
    
}
//--------------------------------------------

function buildSplashScreen(){
    splashScreen = buildDom(`
    <div class="splash">
    <h1>IronSurvival</h1>
            <p>Description</p>
            <button class="startBtn">Start</button>
    </div>
    `);
    splashScreen
    .querySelector(".startBtn")
    .addEventListener("click", startGameClick);
};


function destroySplashScreen(){
    destroyDom(splashScreen);
};

//--------------------------------------------

function buildGameScreen(){    //canvas
    gameScreen = buildDom(`
    <section class="game">
            <div class="canvas_title">
                <h1>Ironzombies</h1>
            </div>
            <canvas id="canvas">

            </canvas>
        </section>
    `);
    console.log("lets play!!!")
};

function destroyGameScreen(){
    destroyDom(gameScreen);
    console.log("game screen destroyed")
}

//-----game over
function buildGameOverScreen(){
    gameOverScreen = buildDom(`
    <section class="gameover">
                <div class="gameOver_title">
                    <h1>Game Over</h1>
                </div>
                <button class="playAgainBtn">Start Again</button>
                
        </section>
    `)
    gameOverScreen
    .querySelector(".playAgainBtn")
    .addEventListener("click", playAgainClick);
};

function destroyGameOverScreen(){
    destroyDom(gameOverScreen);
    
}


function loadGame(){
    console.log("Game ready");
    buildSplashScreen();
}


window.addEventListener("load", loadGame);