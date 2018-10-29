!function(e){var t={};function i(h){if(t[h])return t[h].exports;var s=t[h]={i:h,l:!1,exports:{}};return e[h].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,h){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:h})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var h=Object.create(null);if(i.r(h),Object.defineProperty(h,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(h,s,function(t){return e[t]}.bind(null,s));return h},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=2)}({2:function(e,t,i){"use strict";i.r(t);var h=class{constructor(e,t){this.game=e,this.context=e.context,this.name=t,this.playerSize=10,this.playerX=0,this.playerY=0,this.playerSpeed=10,this.playerMoveRight=!1,this.playerMoveLeft=!1,this.playerMoveUp=!1,this.playerMoveDown=!1}drawPlayer(){this.context.beginPath(),this.context.rect(this.playerX,this.playerY,this.playerSize,this.playerSize),this.context.fillStyle="#e1e1e1",this.context.fill()}bindKeys(){document.addEventListener("keydown",this.keyDownHandler.bind(this)),document.addEventListener("keyup",this.keyUpHandler.bind(this))}keyDownHandler(e){39===e.keyCode&&(this.playerMoveRight=!0),37===e.keyCode&&(this.playerMoveLeft=!0),38===e.keyCode&&(this.playerMoveUp=!0),40===e.keyCode&&(this.playerMoveDown=!0)}keyUpHandler(e){39===e.keyCode&&(this.playerMoveRight=!1),37===e.keyCode&&(this.playerMoveLeft=!1),38===e.keyCode&&(this.playerMoveUp=!1),40===e.keyCode&&(this.playerMoveDown=!1)}movePlayer(){this.playerMoveLeft&&this.playerX>0&&(this.playerX-=this.playerSpeed),this.playerMoveRight&&this.playerX<this.game.canvasWidth-10&&(this.playerX+=this.playerSpeed),this.playerMoveUp&&this.playerY>0&&(this.playerY-=this.playerSpeed),this.playerMoveDown&&this.playerY<this.game.canvasHeight-10&&(this.playerY+=this.playerSpeed)}};var s=class{constructor(e){this.context=e,this.xBound=900,this.yBound=700,this.pathSize=100,this.pathX=this.pathSize,this.pathY=this.pathSize,this.pathStart=[0,0],this.shuffle=this.shuffle.bind(this),this.path=this.pathGenerator()}drawLevel(){this.context.beginPath();for(let e=0;e<this.path.length;e++)this.context.rect(this.path[e][0],this.path[e][1],this.pathSize,this.pathSize),this.context.fillStyle="#e83030",this.context.fill()}shuffle(e){let t=e.slice();for(let i=e.length-1;i>=0;i--){const e=Math.floor(Math.random()*(i+1));[t[i],t[e]]=[t[e],t[i]]}return t}pathGenerator(){let e=[this.pathStart],t=[[0,this.pathSize],[this.pathSize,0],[-this.pathSize,0],[0,-this.pathSize]];for(console.log(e[e.length-1][0]+100);e[e.length-1][0]+100<this.xBound&&e[e.length-1][1]+100<this.yBound;){let i=this.shuffle(t),h=this.validMove(e,i);(e=e.slice()).push(h),console.log(e)}return e}validMove(e,t){let i=t.slice(),h=0;for(let t=0;t<i.length;t++)(e[e.length-1][0]+i[t][0]<0||e[e.length-1][1]+i[t][1]<0)&&i.splice(t,1);console.log("working moves: ",i);let s=[e[e.length-1][0]+i[0][0],e[e.length-1][1]+i[0][1]];for(let t=0;t<e.length;t++)return e[t][0]===s[0]&&e[t][1]===s[1]&&(console.log("in here"),console.log(h),h++,console.log(i[h]),s=[e[e.length-1][0]+i[h][0],e[e.length-1][1]+i[h][1]]),s}};var n=class{constructor(e){this.context=e,this.canvasHeight=700,this.canvasWidth=900,this.player=new h(this,"Nigel"),this.level=new s(this.context)}noScroll(){window.scrollTo(0,0)}draw(){this.context.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.level.drawLevel(),this.player.movePlayer(),this.player.drawPlayer(),requestAnimationFrame(this.draw.bind(this))}play(){window.addEventListener("scroll",this.noScroll.bind(this)),this.player.bindKeys(),this.draw()}};document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("game"),t=e.getContext("2d"),i=new n(t);e.height=i.canvasHeight,e.width=i.canvasWidth,i.play()})}});
//# sourceMappingURL=bundle.js.map