!function(t){var e={};function i(h){if(e[h])return e[h].exports;var s=e[h]={i:h,l:!1,exports:{}};return t[h].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,h){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:h})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var h=Object.create(null);if(i.r(h),Object.defineProperty(h,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(h,s,function(e){return t[e]}.bind(null,s));return h},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);var h={randomNumber:(t,e)=>Math.floor(Math.random()*(e-t))+t,trim:t=>t.replace(/^\s+|\s+$/gm,""),rgbaToHex(t){var e=t.substring(t.indexOf("(")).split(","),i=parseInt(this.trim(e[0].substring(1)),10),h=parseInt(this.trim(e[1]),10),s=parseInt(this.trim(e[2]),10);return"#"+i.toString(16)+h.toString(16)+s.toString(16)},shuffle(t){let e=t.slice();for(let i=t.length-1;i>=0;i--){const t=Math.floor(Math.random()*(i+1));[e[i],e[t]]=[e[t],e[i]]}return e}};var s=["Huh, I did not see this coming.","I guess it's time we get to walking, eh comrade?","Sure. It's not like there's anything else going on down here.","Just everything being consumed in flames?","Yeah, that. At least this seems to be leading away from them.","Yeah. Let's fuckin' go."];var a=class{constructor(t,e=0,i=0,a){this.context=t,this.textBox=a,this.xBound=900,this.yBound=500,this.pathSize=100,this.pathX=this.pathSize,this.pathY=this.pathSize,this.shuffle=h.shuffle.bind(this),this.pathStart=[e,i],this.path=this.pathGenerator(),this.textBox.innerHTML=h.shuffle(s)[0]}drawLevel(){this.context.beginPath();for(let t=0;t<this.path.length;t++)this.context.rect(this.path[t][0],this.path[t][1],this.pathSize,this.pathSize),this.context.fillStyle="rgb(224, 11, 64)",this.context.fill()}pathGenerator(){let t=[this.pathStart],e=[[0,this.pathSize],[this.pathSize,0],[-this.pathSize,0],[0,-this.pathSize]];for(;t[t.length-1][0]+100<this.xBound&&t[t.length-1][1]+100<this.yBound;){let i=this.shuffle(e),h=this.validMove(t,i);(t=t.slice()).push(h)}return t}validMove(t,e){let i=e.slice();i.forEach(e=>{(t[t.length-1][0]+e[0]<0||t[t.length-1][1]+e[1]<0)&&i.splice(i.indexOf(e),1)});let h=[t[t.length-1][0]+i[0][0],t[t.length-1][1]+i[0][1]];for(let e=0;e<t.length;e++)return t[e][0]===h[0]&&t[e][1]===h[1]&&(h=[t[t.length-1][0]+i[0][0],t[t.length-1][1]+i[0][1]]),h}};var r=class{constructor(t,e){this.game=t,this.context=t.context,this.name=e,this.playerSize=10,this.playerX=0,this.playerY=0,this.playerSpeed=10,this.playerMoveRight=!1,this.playerMoveLeft=!1,this.playerMoveUp=!1,this.playerMoveDown=!1}drawPlayer(){this.context.beginPath(),this.context.rect(this.playerX,this.playerY,this.playerSize,this.playerSize),this.context.fillStyle="#e1e1e1",this.context.fill()}bindKeys(){document.addEventListener("keydown",this.keyDownHandler.bind(this)),document.addEventListener("keyup",this.keyUpHandler.bind(this))}keyDownHandler(t){39===t.keyCode&&(this.playerMoveRight=!0),37===t.keyCode&&(this.playerMoveLeft=!0),38===t.keyCode&&(this.playerMoveUp=!0),40===t.keyCode&&(this.playerMoveDown=!0)}keyUpHandler(t){39===t.keyCode&&(this.playerMoveRight=!1),37===t.keyCode&&(this.playerMoveLeft=!1),38===t.keyCode&&(this.playerMoveUp=!1),40===t.keyCode&&(this.playerMoveDown=!1)}movePlayer(){this.playerMoveLeft&&this.playerX>0&&this.canMoveWest()?this.playerX-=this.playerSpeed:this.playerMoveRight&&this.playerX<this.game.canvasWidth-10&&this.canMoveEast()?this.playerX+=this.playerSpeed:this.playerMoveUp&&this.playerY>0&&this.canMoveNorth()?this.playerY-=this.playerSpeed:this.playerMoveDown&&this.playerY<this.game.canvasHeight-10&&this.canMoveSouth()&&(this.playerY+=this.playerSpeed)}moveCheck(t){return"224,11,64"===t}checkBoundary(t,e){return"right"===t&&e>=this.game.canvasWidth-10||"down"===t&&e>=this.game.canvasHeight-10}canMoveEast(){this.checkBoundary("right",this.playerX+10)&&(this.playerX=0,this.game.level=new a(this.context,0,this.playerY));let t=this.context.getImageData(this.playerX+10,this.playerY,1,1).data.slice(0,3).join(",");return this.moveCheck(t)}canMoveWest(){let t=this.context.getImageData(this.playerX-1,this.playerY+10,1,1).data.slice(0,3).join(",");return this.moveCheck(t)}canMoveSouth(){this.checkBoundary("down",this.playerY+10)&&(this.playerY=0,this.game.level=new a(this.context,this.playerX,0));let t=this.context.getImageData(this.playerX,this.playerY,1,1).data.slice(0,3).join(",");return this.moveCheck(t)}canMoveNorth(){let t=this.context.getImageData(this.playerX,this.playerY-1,1,1).data.slice(0,3).join(",");return this.moveCheck(t)}};var n=class{constructor(t,e){this.context=t,this.textBox=e,this.canvasHeight=500,this.canvasWidth=900,this.player=new r(this,"Nigel"),this.level=new a(this.context,0,0,this.textBox),this.noScroll=this.noScroll.bind(this),this.draw=this.draw.bind(this)}noScroll(){window.scrollTo(0,0)}draw(){this.context.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.context.fillStyle="blue",this.context.fillRect(0,0,this.canvasWidth,this.canvasHeight),this.level.drawLevel(),this.player.movePlayer(),this.player.drawPlayer(),requestAnimationFrame(this.draw)}play(){window.addEventListener("scroll",this.noScroll),this.player.bindKeys(),this.draw()}};document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("game"),e=document.getElementById("text"),i=t.getContext("2d"),h=new n(i,e);t.height=h.canvasHeight,t.width=h.canvasWidth,h.play()})}]);
//# sourceMappingURL=bundle.js.map