!function(e){var t={};function i(a){if(t[a])return t[a].exports;var h=t[a]={i:a,l:!1,exports:{}};return e[a].call(h.exports,h,h.exports,i),h.l=!0,h.exports}i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var h in e)i.d(a,h,function(t){return e[t]}.bind(null,h));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);var a={randomNumber:(e,t)=>Math.floor(Math.random()*(t-e))+e,hue:()=>"rgb("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")",trim:e=>e.replace(/^\s+|\s+$/gm,""),rgbaToHex(e){var t=e.substring(e.indexOf("(")).split(","),i=parseInt(this.trim(t[0].substring(1)),10),a=parseInt(this.trim(t[1]),10),h=parseInt(this.trim(t[2]),10);return"#"+i.toString(16)+a.toString(16)+h.toString(16)},shuffle(e){let t=e.slice();for(let i=e.length-1;i>=0;i--){const e=Math.floor(Math.random()*(i+1));[t[i],t[e]]=[t[e],t[i]]}return t},compareArrays(e,t){for(let i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}};var h=[{name:"Welcome",text:["Well Nige, looks like we've nowhere to go but up.","Yeah, it's getting pretty damn warm down here. Let's rock"],size:[100,100],played:!1},{name:"Dance",text:["We've nowhere to go but up.","Well, or back down.","It's quite hot down there, as you may recall.","Yeah. Let's keep going I guess."],size:[200,100],played:!1},{name:"Food",text:["How much food ya got left?","Lemme check. *Takes off his backpack, rummages around inside* Two power bars, one bag of Oberto,\n        and most of a liter of water. You?","A bag of halloween candy, a bag of tortilla chips, and like half a two liter of coke.","Perfect fuel for walking up stairs huh?","Talking about it's not gonna make it any fucking better. Let's walk."],size:[100,200],played:!1},{name:"Ending",text:["This thing never ends, does it Nige?","WHAT THE FUCK?!","What the single fuck indeed.","*They reamin silent for a moment, starting over the edge*","So what do we do now? You got any food left?","Nah. You?","Nah"],size:[200,200],played:!1}];var s=[[0,0,100,100],[0,0,200,200],[0,0,100,200],[0,0,200,100]];var n=class{constructor(e,t=0,i=0,s,n=h){this.context=e,this.textBox=s,this.xBound=900,this.yBound=600,this.pathSize=100,this.pathX=this.pathSize,this.pathY=this.pathSize,this.shuffle=a.shuffle.bind(this),this.pathStart=[t,i,100,100],this.path=this.pathGenerator2(),this.event=this.seedEvent(n),this.eventIndex=0}drawLevel2(){this.context.beginPath();for(let e=0;e<this.path.length;e++)this.context.rect(this.path[e][0],this.path[e][1],this.path[e][2],this.path[e][3]),this.context.fillStyle="rgb(224, 11, 64)",this.context.fill()}pathGenerator2(){let e=[this.pathStart];for(;e[e.length-1][0]+100<this.xBound&&e[e.length-1][1]+100<this.yBound;){let t=this.shuffle(s),i=this.validShape(e,t);(e=e.slice()).push(i)}return e}validShape(e,t){let i,h=0,s=t.slice(),n=0;for(;s[n];)e[e.length-1][0]+s[n][0]<0||e[e.length-1][1]+s[n][1]<0?s.splice(n,1):n++;i=1===a.randomNumber(0,2)?[e[e.length-1][0],e[e.length-1][1]+e[e.length-1][3],s[0][2],s[0][3]]:[e[e.length-1][0]+e[e.length-1][2],e[e.length-1][1],s[0][2],s[0][3]];for(let t=0;t<e.length;t++)return e[t][0]===i[0]&&e[t][1]===i[1]&&(h+=1,i=[e[e.length-1][0]+s[h][0],e[e.length-1][1]+s[h][1]]),i}seedEvent(e){if(!1===e[0].played)return e[0].size.unshift(0,0),e[0];let t=!0;for(let i=0;i<e.length-1;i++)!1===e[i].played&&(t=!1);!0===t&&(e=e.slice(3));for(let t=0;t<this.path.length;t++)for(let i=0;i<e.length;i++)if(this.path[t][2]===e[i].size[0]&&this.path[t][3]===e[i].size[1]&&!1===e[i].played&&1===a.randomNumber(0,2))return e[i].size.unshift(this.path[t][0],this.path[t][1]),e[i]}};var r=class{constructor(e,t,i){this.game=e,this.context=e.context,this.name=t,this.events=i,this.playerSize=10,this.playerX=0,this.playerY=0,this.playerSpeed=10,this.canMove=!0,this.playerMoveRight=!1,this.playerMoveLeft=!1,this.playerMoveUp=!1,this.playerMoveDown=!1}drawPlayer(){this.context.beginPath(),this.context.rect(this.playerX,this.playerY,this.playerSize,this.playerSize),this.context.fillStyle="#e1e1e1",this.context.fill()}bindKeys(){document.addEventListener("keydown",this.keyDownHandler.bind(this)),document.addEventListener("keyup",this.keyUpHandler.bind(this))}keyDownHandler(e){39!==e.keyCode&&68!==e.keyCode||(this.playerMoveRight=!0),37!==e.keyCode&&65!==e.keyCode||(this.playerMoveLeft=!0),38!==e.keyCode&&87!==e.keyCode||(this.playerMoveUp=!0),40!==e.keyCode&&83!==e.keyCode||(this.playerMoveDown=!0),32===e.keyCode&&this.game.level.eventIndex++}keyUpHandler(e){39!==e.keyCode&&68!==e.keyCode||(this.playerMoveRight=!1),37!==e.keyCode&&65!==e.keyCode||(this.playerMoveLeft=!1),38!==e.keyCode&&87!==e.keyCode||(this.playerMoveUp=!1),40!==e.keyCode&&83!==e.keyCode||(this.playerMoveDown=!1)}movePlayer(){this.game.level.event&&this.game.level.event.size[0]<=this.playerX&&this.playerX<this.game.level.event.size[0]+this.game.level.event.size[2]&&this.game.level.event.size[1]<=this.playerY&&this.playerY<this.game.level.event.size[1]+this.game.level.event.size[3]&&this.triggerEvent(this.game.level.event),this.canMove&&(this.playerMoveLeft&&this.playerX>0&&this.canMoveWest()?this.playerX-=this.playerSpeed:this.playerMoveRight&&this.playerX<this.game.canvasWidth-10&&this.canMoveEast()?this.playerX+=this.playerSpeed:this.playerMoveUp&&this.playerY>0&&this.canMoveNorth()?this.playerY-=this.playerSpeed:this.playerMoveDown&&this.playerY<this.game.canvasHeight-10&&this.canMoveSouth()&&(this.playerY+=this.playerSpeed))}moveCheck(e){return"66,134,244"!==e}checkBoundary(e,t){return"right"===e&&t>=this.game.canvasWidth-10||"down"===e&&t>=this.game.canvasHeight-10}triggerEvent(e){if(this.game.level.eventIndex>=e.text.length)return this.canMove=!0,e.played=!0,this.game.textBox.innerHTML="They walked on.",!1;this.canMove=!1,this.game.textBox.innerHTML=e.text[this.game.level.eventIndex]}canMoveEast(){this.checkBoundary("right",this.playerX+10)&&(this.playerX=0,this.playerY=100*Math.ceil(this.playerY/100),this.game.level=new n(this.context,0,this.playerY,this.textBox,this.events));let e=this.context.getImageData(this.playerX+10,this.playerY,1,1).data.slice(0,3).join(",");return this.moveCheck(e)}canMoveWest(){let e=this.context.getImageData(this.playerX-1,this.playerY,1,1).data.slice(0,3).join(",");return this.moveCheck(e)}canMoveSouth(){this.checkBoundary("down",this.playerY+10)&&(this.playerY=0,this.playerX=100*Math.ceil(this.playerX/100),this.game.level=new n(this.context,this.playerX,0,this.textBox,this.events));let e=this.context.getImageData(this.playerX,this.playerY+10,1,1).data.slice(0,3).join(",");return this.moveCheck(e)}canMoveNorth(){let e=this.context.getImageData(this.playerX,this.playerY-1,1,1).data.slice(0,3).join(",");return this.moveCheck(e)}};var o=class{constructor(e,t){this.context=e,this.textBox=t,this.canvasHeight=600,this.canvasWidth=900,this.player=new r(this,"Nigel",this.events),this.level=new n(this.context,0,0,this.textBox),this.noScroll=this.noScroll.bind(this),this.draw=this.draw.bind(this)}noScroll(){window.scrollTo(0,0)}draw(){this.context.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.context.fillStyle="rgb(66,134,244)",this.context.fillRect(0,0,this.canvasWidth,this.canvasHeight),this.level.drawLevel2(),this.player.movePlayer(),this.player.drawPlayer(),requestAnimationFrame(this.draw)}play(){window.addEventListener("scroll",this.noScroll),this.player.bindKeys(),this.draw()}};document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("game"),t=document.getElementById("text"),i=e.getContext("2d"),a=new o(i,t);e.height=a.canvasHeight,e.width=a.canvasWidth,a.play()})}]);
//# sourceMappingURL=bundle.js.map