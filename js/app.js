//console.log("Hello World");
var Furry = require("./furry.js");
var Coin = require("./coin.js");

function Game() {
    this.board = document.querySelectorAll('#board>div');
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;
    this.index = function(x,y) {
        return x + (y * 10);
    };

    this.showFurry = function (){
       this.hideVissibleFurry();
       this.board[ this.index(this.furry.x,this.furry.y) ].classList.add('furry');

    };

    this.showCoin = function(){
        this.board[ this.index(this.coin.x,this.coin.y) ].classList.add('coin');
    };

    //code for moving furry on the board
    this.startGame = function () {
       var self = this;
       this.idSetInterval = setInterval(function(){
           self.moveFurry()

       }, 250);
    };

    //code for moving furry on the board
    this.moveFurry = function (){
        if(this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
        } else if(this.furry.direction === "left"){
            this.furry.x = this.furry.x -1;
        } else if (this.furry.direction === "up"){
            this.furry.y = this.furry.y -1;
        } else if (this.furry.direction === "down"){
            this.furry.y = this.furry.y +1;
        }
        this.gameOver();
        this.showFurry();
        if (this.idSetInterval === null){
            this.hideVissibleFurry();
        }
        this.checkCollosion();
    };


    //code to hide visible Furry
    this.hideVissibleFurry = function () {
        var furryElement = document.querySelector('div.furry');
        if (furryElement !== null){
            furryElement.classList.remove('furry');
        }
    };

    //code to change direction with Fury
    this.turnFurry = function (){
        switch(event.which){
            case 37:
                this.furry.direction = 'left';
                break;
            case 38:
                this.furry.direction = 'up';
                break;
            case 39:
                this.furry.direction = 'right';
                break;
            case 40:
                this.furry.direction = 'down';
                break;
        }
    };

    //check colision of coin and Furry
    this.checkCollosion = function () {
        if (this.coin.x === this.furry.x && this.coin.y === this.furry.y){
            var activeCoin = document.querySelector('div.coin');
            var scoreKeep = document.querySelector('#score strong');

            activeCoin.classList.remove('coin');
            this.score++;
            scoreKeep.innerText = this.score;
            this.coin = new Coin();
            this.showCoin();
        }
    };


    //code to check collisison with the wall
    this.gameOver = function () {
        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y< 0 || this.furry.y > 9){
            window.clearInterval(this.idSetInterval);
            this.idSetInterval = null;

            this.hideVissibleFurry();
            this.scoreScreen();
        }
    };

    this.scoreScreen = function () {
        var over = document.querySelector('#over');
        over.classList.remove('invisible');

        var prePopup = document.createElement('pre');
        over.appendChild(prePopup);
        prePopup.innerText = "Game over. Your score is: " + this.score;
    }
  }

var newGame = new Game;
newGame.showFurry(0,0);
newGame.showCoin();
newGame.startGame();

//code to change the direction of Furry with keys
document.addEventListener('keydown', function (event) {
    newGame.turnFurry(event);
});
