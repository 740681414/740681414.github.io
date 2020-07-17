window.__require=function t(e,i,o){function r(s,c){if(!i[s]){if(!e[s]){var d=s.split("/");if(d=d[d.length-1],!e[d]){var a="function"==typeof __require&&__require;if(!c&&a)return a(d,!0);if(n)return n(d,!0);throw new Error("Cannot find module '"+s+"'")}s=d}var p=i[s]={exports:{}};e[s][0].call(p.exports,function(t){return r(e[s][1][t]||t)},p,p.exports,t,e,i,o)}return i[s].exports}for(var n="function"==typeof __require&&__require,s=0;s<o.length;s++)r(o[s]);return r}({GameBird:[function(t,e,i){"use strict";cc._RF.push(e,"9506eyHeTZJ7rqA+7mrA7Vx","GameBird");var o=this&&this.__extends||function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function o(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o)}}(),r=this&&this.__decorate||function(t,e,i,o){var r,n=arguments.length,s=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(s=(n<3?r(s):n>3?r(e,i,s):r(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s};Object.defineProperty(i,"__esModule",{value:!0});var n=cc._decorator,s=n.ccclass,c=n.property,d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.spFlyingFrames=[],e.currentFlyingFrame=0,e.currentAcc=0,e}return o(e,t),e.prototype.onLoad=function(){this.schedule(this.updateFlyingFrame,.2)},e.prototype.doUpdateFly=function(t){this.currentAcc-=300*t,this.node.position=cc.v2(this.node.position.x,this.node.position.y+this.currentAcc*t),this.node.rotation=-this.currentAcc/3},e.prototype.flyUp=function(){this.currentAcc=130,this.currentAcc=Math.min(250,this.currentAcc),cc.audioEngine.playEffect(this.flyAudio,!1)},e.prototype.updateFlyingFrame=function(){this.currentFlyingFrame++,this.currentFlyingFrame==this.spFlyingFrames.length&&(this.currentFlyingFrame=0),this.spBird.spriteFrame=this.spFlyingFrames[this.currentFlyingFrame]},r([c([cc.SpriteFrame])],e.prototype,"spFlyingFrames",void 0),r([c(cc.Sprite)],e.prototype,"spBird",void 0),r([c(cc.AudioClip)],e.prototype,"flyAudio",void 0),e=r([s],e)}(cc.Component);i.default=d,cc._RF.pop()},{}],GameMain:[function(t,e,i){"use strict";cc._RF.push(e,"24881qwCj5Ia425KhTrYZFn","GameMain");var o=this&&this.__extends||function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function o(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o)}}(),r=this&&this.__decorate||function(t,e,i,o){var r,n=arguments.length,s=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(s=(n<3?r(s):n>3?r(e,i,s):r(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s};Object.defineProperty(i,"__esModule",{value:!0});var n=t("./GameBird"),s=t("./GamePillar"),c=cc._decorator,d=c.ccclass,a=c.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.nodeGrounds=[],e.nodeLands=[],e.isPlaying=!0,e.birdPosX=-100,e.pillarCount=3,e.pillarWidth=52,e.currentScore=5,e.landSpeed=50,e.bgSpeed=50,e.pillarSpeed=50,e}return o(e,t),e.prototype.onLoad=function(){this.nodeGameOver.active=!1,this.btnPlay.node.active=!0,this.nodeTutorial.active=!1,this.isPlaying=!1;var t=cc.instantiate(this.prefabBird).getComponent(n.default);t.node.parent=this.node,this.bird=t,this.resetBirdPosition(),this.allPillars=[];for(var e=0;e<this.pillarCount;e++){var i=cc.instantiate(this.prefabPillar).getComponent(s.default);i.node.parent=this.pillarsParent,this.allPillars.push(i)}this.resetPillarsPosition()},e.prototype.resetBirdPosition=function(){this.bird.node.position=cc.v2(this.birdPosX,0),this.bird.node.rotation=0,this.bird.currentAcc=0},e.prototype.resetPillarsPosition=function(){for(var t=0;t<this.pillarCount;t++){this.allPillars[t].node.position=cc.v2(200+(cc.director.getWinSize().width+this.pillarWidth)/this.pillarCount*t,0)}},e.prototype.addScore=function(){this.currentScore++,this.refreshScore(),cc.audioEngine.playEffect(this.addScoreAudio,!1)},e.prototype.refreshScore=function(){this.score.string=this.currentScore.toString()},e.prototype.update=function(t){if(this.isPlaying){this.bird.doUpdateFly(t),this.nodeLands[0].x-=t*this.bgSpeed,this.nodeLands[1].x-=t*this.bgSpeed,this.nodeLands[0].x<=-this.nodeLands[0].width?this.nodeLands[0].x=this.nodeLands[1].x+this.nodeLands[0].width:this.nodeLands[1].x<=-this.nodeLands[0].width&&(this.nodeLands[1].x=this.nodeLands[0].x+this.nodeLands[0].width),this.nodeGrounds[0].x-=t*this.bgSpeed,this.nodeGrounds[1].x-=t*this.bgSpeed,this.nodeGrounds[0].x<=-this.nodeGrounds[0].width?this.nodeGrounds[0].x=this.nodeGrounds[1].x+this.nodeGrounds[0].width:this.nodeGrounds[1].x<=-this.nodeGrounds[0].width&&(this.nodeGrounds[1].x=this.nodeGrounds[0].x+this.nodeGrounds[0].width);for(var e=0,i=this.allPillars.length;e<i;e++){var o=this.allPillars[e];o.node.position=cc.v2(o.node.position.x-t*this.pillarSpeed,o.node.position.y),o.node.position.x<this.birdPosX&&!o.isPassedBird&&(o.setIsPassedBird(!0),this.addScore()),o.node.position.x<0-(cc.director.getWinSize().width/2+o.node.width/2)&&(o.randomAltitude(),o.node.position=cc.v2(cc.director.getWinSize().width+this.pillarWidth+o.node.position.x,o.node.position.y),o.setIsPassedBird(!1))}this.checkGameOver()}},e.prototype.checkGameOver=function(){if(this.bird.node.position.y<0-cc.director.getWinSize().height/2+this.nodeLand.height||this.bird.node.position.y>cc.director.getWinSize().height/2)this.gameOver();else for(var t=0,e=this.allPillars.length;t<e;t++){if(this.allPillars[t].checkCollion(this.bird)){this.gameOver();break}}},e.prototype.gameOver=function(){cc.audioEngine.playMusic(this.gameOverAudio,!1),this.isPlaying=!1,this.nodeGameOver.active=!0,this.btnPlay.node.active=!0},e.prototype.onClickScreen=function(){this.isPlaying&&this.bird.flyUp()},e.prototype.startGame=function(){this.isPlaying=!0,this.nodeTutorial.active=!1},e.prototype.startPrepare=function(){this.resetBirdPosition(),this.resetPillarsPosition(),this.currentScore=0,this.refreshScore(),this.nodeGameOver.active=!1,this.nodeTutorial.active=!0,this.btnPlay.node.active=!1},r([a(cc.Prefab)],e.prototype,"prefabBird",void 0),r([a(cc.Prefab)],e.prototype,"prefabPillar",void 0),r([a([cc.Node])],e.prototype,"nodeGrounds",void 0),r([a(cc.Node)],e.prototype,"nodeLand",void 0),r([a([cc.Node])],e.prototype,"nodeLands",void 0),r([a(cc.Label)],e.prototype,"score",void 0),r([a(cc.Button)],e.prototype,"btnPlay",void 0),r([a(cc.Node)],e.prototype,"nodeTutorial",void 0),r([a(cc.Node)],e.prototype,"pillarsParent",void 0),r([a(cc.Node)],e.prototype,"nodeGameOver",void 0),r([a(cc.AudioClip)],e.prototype,"addScoreAudio",void 0),r([a(cc.AudioClip)],e.prototype,"gameOverAudio",void 0),e=r([d],e)}(cc.Component);i.default=p,cc._RF.pop()},{"./GameBird":"GameBird","./GamePillar":"GamePillar"}],GamePillar:[function(t,e,i){"use strict";cc._RF.push(e,"65e799b3VJKcZGAnnXSFe3Z","GamePillar");var o=this&&this.__extends||function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function o(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o)}}(),r=this&&this.__decorate||function(t,e,i,o){var r,n=arguments.length,s=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(s=(n<3?r(s):n>3?r(e,i,s):r(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s};Object.defineProperty(i,"__esModule",{value:!0});var n=cc._decorator,s=n.ccclass,c=n.property,d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.spaceALtitude=0,e.space=40,e.isPassedBird=!1,e}return o(e,t),e.prototype.onLoad=function(){this.randomAltitude()},e.prototype.randomAltitude=function(){var t=Math.floor(250*Math.random());this.topPillar.position=cc.v2(0,t+this.space),this.bottomPillar.position=cc.v2(0,t-this.space),this.spaceALtitude=t},e.prototype.setIsPassedBird=function(t){this.isPassedBird=t},e.prototype.checkCollion=function(t){return!(t.node.position.x+t.node.width/2<this.node.position.x-this.topPillar.width/2)&&(!(t.node.position.x-t.node.width/2>this.node.position.x+this.topPillar.width/2)&&(t.node.position.y+t.node.height/2>this.spaceALtitude+this.space||t.node.position.y-t.node.height/2<this.spaceALtitude-this.space))},r([c(cc.Node)],e.prototype,"topPillar",void 0),r([c(cc.Node)],e.prototype,"bottomPillar",void 0),e=r([s],e)}(cc.Component);i.default=d,cc._RF.pop()},{}],"use_v2.0.x_cc.Toggle_event":[function(t,e,i){"use strict";cc._RF.push(e,"17707i5zktJ3LRhjEs3V9Ew","use_v2.0.x_cc.Toggle_event"),cc.Toggle&&(cc.Toggle._triggerEventInScript_check=!0),cc._RF.pop()},{}]},{},["use_v2.0.x_cc.Toggle_event","GameBird","GameMain","GamePillar"]);