!function(t){var e={};function i(h){if(e[h])return e[h].exports;var s=e[h]={i:h,l:!1,exports:{}};return t[h].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,h){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:h})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var h=Object.create(null);if(i.r(h),Object.defineProperty(h,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(h,s,function(e){return t[e]}.bind(null,s));return h},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);var h=class{constructor(t,e){this.game=t,this.context=t.context,this.name=e,this.playerSize=10,this.playerX=this.game.canvasWidth/2,this.playerY=this.game.canvasHeight/2,this.playerSpeed=10,this.playerMoveRight=!1,this.playerMoveLeft=!1,this.playerMoveUp=!1,this.playerMoveDown=!1}drawPlayer(){this.context.beginPath(),this.context.rect(this.playerX,this.playerY,this.playerSize,this.playerSize),this.context.fillStyle="#e83030",this.context.fill()}bindKeys(){document.addEventListener("keydown",this.keyDownHandler.bind(this)),document.addEventListener("keyup",this.keyUpHandler.bind(this))}keyDownHandler(t){39===t.keyCode&&(this.playerMoveRight=!0),37===t.keyCode&&(this.playerMoveLeft=!0),38===t.keyCode&&(this.playerMoveUp=!0),40===t.keyCode&&(this.playerMoveDown=!0)}keyUpHandler(t){39===t.keyCode&&(this.playerMoveRight=!1),37===t.keyCode&&(this.playerMoveLeft=!1),38===t.keyCode&&(this.playerMoveUp=!1),40===t.keyCode&&(this.playerMoveDown=!1)}movePlayer(){this.playerMoveLeft&&this.playerX>0&&(this.playerX-=this.playerSpeed),this.playerMoveRight&&this.playerX<this.game.canvasWidth-10&&(this.playerX+=this.playerSpeed),this.playerMoveUp&&this.playerY>0&&(this.playerY-=this.playerSpeed),this.playerMoveDown&&this.playerY<this.game.canvasHeight-10&&(this.playerY+=this.playerSpeed)}};var s=class{constructor(t){this.context=t,this.xBound=900,this.yBound=700,this.pathSize=100,this.pathX=this.pathSize,this.pathY=this.pathSize,this.pathStart=[0,0,this.pathSize,this.pathSize],this.moves=[[0,this.pathSize],[this.pathSize,0],[-this.pathSize,0],[0,-this.pathSize]],this.path=this.pathGenerator()}drawLevel(){this.context.beginPath();for(let t=0;t<this.path.length;t++)this.context.rect(this.path[t][0],this.path[t][1],this.pathSize,this.pathSize),this.context.fillStyle="#e83030",this.context.fill()}shuffle(t){for(let e=t.length-1;e>0;e--){const i=Math.floor(Math.random()*(e+1));[t[e],t[i]]=[t[i],t[e]]}return console.log(t),t}pathGenerator(){let t=[this.pathStart];for(console.log(this.pathX,this.pathY,this.xBound,this.yBound);this.pathX<this.xBound&&this.pathX>0&&this.pathY>0&&this.pathY<this.yBound;){console.log("outer loop");let e,i=this.shuffle(this.moves),h=!1;for(let s=0;!1===h;s++)console.log("inner loop"),e=i[s],this.validPath(t,e)&&(console.log("valid path"),h=!0,t.push([t[t.length-1][0]+e[0],e[1],this.pathSize,this.pathSize]),this.pathX+=e[0],this.pathY+=e[1])}return console.log(t),t}validPath(t,e){for(let i=t.length-4;i<t.length-1;i++)if(t[i])for(let h=0;h<2;h++)if(console.log(t[i][h]),t[i][h]===e[h])return console.log("invalid move"),!1;return!0}};var a=class{constructor(t){this.context=t,this.canvasHeight=700,this.canvasWidth=900,this.player=new h(this,"Nigel"),this.level=new s(this.context)}noScroll(){window.scrollTo(0,0)}draw(){this.context.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.level.drawLevel(),this.player.movePlayer(),this.player.drawPlayer(),requestAnimationFrame(this.draw.bind(this))}play(){window.addEventListener("scroll",this.noScroll.bind(this)),this.player.bindKeys(),this.draw()}};document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("game"),e=t.getContext("2d"),i=new a(e);t.height=i.canvasHeight,t.width=i.canvasWidth,i.play()})}]);
//# sourceMappingURL=bundle.js.map