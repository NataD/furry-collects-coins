!function(r){var t={};function i(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return r[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=r,i.c=t,i.d=function(r,t,e){i.o(r,t)||Object.defineProperty(r,t,{configurable:!1,enumerable:!0,get:e})},i.r=function(r){Object.defineProperty(r,"__esModule",{value:!0})},i.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return i.d(t,"a",t),t},i.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},i.p="",i(i.s=2)}([function(r,t){r.exports=function(){this.x=Math.floor(10*Math.random()),this.y=Math.floor(10*Math.random())}},function(r,t){r.exports=function(){this.x=0,this.y=0,this.direction="right"}},function(r,t,i){var e=i(1),n=i(0);var s=new function(){this.board=document.querySelectorAll("#board>div"),this.furry=new e,this.coin=new n,this.score=0,this.index=function(r,t){return r+10*t},this.showFurry=function(){this.hideVissibleFurry(),this.board[this.index(this.furry.x,this.furry.y)].classList.add("furry")},this.showCoin=function(){this.board[this.index(this.coin.x,this.coin.y)].classList.add("coin")},this.startGame=function(){var r=this;this.idSetInterval=setInterval(function(){r.moveFurry()},250)},this.moveFurry=function(){"right"===this.furry.direction?this.furry.x=this.furry.x+1:"left"===this.furry.direction?this.furry.x=this.furry.x-1:"up"===this.furry.direction?this.furry.y=this.furry.y-1:"down"===this.furry.direction&&(this.furry.y=this.furry.y+1),this.gameOver(),this.showFurry(),null===this.idSetInterval&&this.hideVissibleFurry(),this.checkCollosion()},this.hideVissibleFurry=function(){var r=document.querySelector("div.furry");null!==r&&r.classList.remove("furry")},this.turnFurry=function(){switch(event.which){case 37:this.furry.direction="left";break;case 38:this.furry.direction="up";break;case 39:this.furry.direction="right";break;case 40:this.furry.direction="down"}},this.checkCollosion=function(){if(this.coin.x===this.furry.x&&this.coin.y===this.furry.y){var r=document.querySelector("div.coin"),t=document.querySelector("#score strong");r.classList.remove("coin"),this.score++,t.innerText=this.score,this.coin=new n,this.showCoin()}},this.gameOver=function(){(this.furry.x<0||this.furry.x>9||this.furry.y<0||this.furry.y>9)&&(window.clearInterval(this.idSetInterval),this.idSetInterval=null,this.hideVissibleFurry(),this.scoreScreen())},this.scoreScreen=function(){var r=document.querySelector("#over");r.classList.remove("invisible");var t=document.createElement("pre");r.appendChild(t),t.innerText="Game over. Your score is: "+this.score}};s.showFurry(0,0),s.showCoin(),s.startGame(),document.addEventListener("keydown",function(r){s.turnFurry(r)})}]);