

function Animation(spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration, frames, loop, reverse) {
    this.spriteSheet = spriteSheet;
    this.startX = startX;
    this.startY = startY;
    this.frameWidth = frameWidth;
    this.frameDuration = frameDuration;
    this.frameHeight = frameHeight;
    this.frames = frames;
    this.totalTime = frameDuration * frames;
    this.elapsedTime = 0;
    this.loop = loop;
    this.reverse = reverse;
    this.action = 0;
}

Animation.prototype.drawFrame = function (tick, ctx, x, y, scaleBy, wall, freeze, slide, kick) { // wall arg added ???
    freeze = 1;
    wall = 1;
    var scaleBy = scaleBy || 1;
    var frame = this.currentFrame();
    this.elapsedTime += tick;
    if (this.loop) {
        if (this.isDone()) {
            this.elapsedTime = 0;
        }
    } else if (this.isDone()) {
        return;
    }
    var index = 0;
    var vindex = 0;


    frame = 7 - this.currentFrame();
    index = frame % 8;
    vindex = Math.floor(frame / 8);

    var locX = x;
    var locY = y;

    var offset = vindex === 0 ? this.startX : 0;

    ctx.drawImage(this.spriteSheet,
                  index * this.frameWidth + offset, vindex * this.frameHeight + this.startY,  // source from sheet
                  this.frameWidth, this.frameHeight,
                  locX, locY,
                  this.frameWidth * scaleBy,
                  this.frameHeight * scaleBy);
}

Animation.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
}

Animation.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
}

// test
function Animation9(spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration, frames, loop, reverse) {
    this.spriteSheet = spriteSheet;
    this.startX = startX;
    this.startY = startY;
    this.frameWidth = frameWidth;
    this.frameDuration = frameDuration;
    this.frameHeight = frameHeight;
    this.frames = frames;
    this.totalTime = frameDuration * frames;
    this.elapsedTime = 0;
    this.loop = loop;
    this.reverse = reverse;
    this.action = 0;
}


Animation9.prototype.drawFrame = function (tick, ctx, x, y, scaleBy, wall, freeze, slide, kick) { // wall arg added ???
    freeze = 1;
    wall = 1;
    var scaleBy = scaleBy || 1;

    this.elapsedTime += tick;
    if (this.loop) {
        if (this.isDone()) {
            this.elapsedTime = 0;
        }
    } else if (this.isDone()) {
        return;
    }
    var index = 0;
    var vindex = 0;


    frame = this.currentFrame();
    index = frame % 6;
    vindex = Math.floor(frame / 6);

    var locX = x;
    var locY = y;

    var offset = vindex === 0 ? this.startX : 0;

    ctx.drawImage(this.spriteSheet,
                  index * this.frameWidth + offset, vindex * this.frameHeight + this.startY,  // source from sheet
                  this.frameWidth, this.frameHeight,
                  locX, locY,
                  this.frameWidth * scaleBy,
                  this.frameHeight * scaleBy);
}

Animation9.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
}

Animation9.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
}

function Background(game) {
    this.animation = new Animation(ASSET_MANAGER.getAsset("./img/bg.png"), 0, 0, 768, 520, 100, 1, true, false);


    Entity.call(this, game, 0, 0);
    this.radius = 200;
}



function Background(game) {
    this.animation = new Animation(ASSET_MANAGER.getAsset("./img/bg.png"), 0, 0, 768, 520, 100, 1, true, false);



    Entity.call(this, game, 0, 0);
    this.radius = 200;
}

// animation for enemies spaceships
function EnemyAnimation(spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration, frames, loop, reverse) {
    this.spriteSheet = spriteSheet;
    this.startX = startX;
    this.startY = startY;
    this.frameWidth = frameWidth;
    this.frameDuration = frameDuration;
    this.frameHeight = frameHeight;
    this.frames = frames;
    this.totalTime = frameDuration * frames;
    this.elapsedTime = 0;
    this.loop = loop;
    this.reverse = reverse;
    this.action = 0;
}


EnemyAnimation.prototype.drawFrame = function (tick, ctx, x, y, scaleBy, wall, freeze, slide, kick) { // wall arg added ???
    freeze = 1;
    wall = 1;
    var scaleBy = scaleBy || 1;
    var frame = this.currentFrame();
    this.elapsedTime += tick;
    if (this.loop) {
        if (this.isDone()) {
            this.elapsedTime = 0;
        }
    } else if (this.isDone()) {
        return;
    }
    var index = 0;
    var vindex = 0;


    frame = this.currentFrame();
    index = frame % 1;
    vindex = Math.floor(frame / 1);

    var locX = x;
    var locY = y;

    var offset = vindex === 0 ? this.startX : 0;

    ctx.drawImage(this.spriteSheet,
                  index * this.frameWidth + offset, vindex * this.frameHeight + this.startY,  // source from sheet
                  this.frameWidth, this.frameHeight,
                  locX, locY,
                  this.frameWidth * scaleBy,
                  this.frameHeight * scaleBy);
}

EnemyAnimation.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
}

EnemyAnimation.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
}

//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// rokes animation
function RocksAnimation(spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration, frames, loop, reverse) {
    this.spriteSheet = spriteSheet;
    this.startX = startX;
    this.startY = startY;
    this.frameWidth = frameWidth;
    this.frameDuration = frameDuration;
    this.frameHeight = frameHeight;
    this.frames = frames;
    this.totalTime = frameDuration * frames;
    this.elapsedTime = 0;
    this.loop = loop;
    this.reverse = reverse;
}

RocksAnimation.prototype.drawFrame = function (tick, ctx, x, y) { // wall arg added ???
    var frame = this.currentFrame();
    this.elapsedTime += tick;
    if (this.loop) {
        if (this.isDone()) {
            this.elapsedTime = 0;
        }
    } else if (this.isDone()) {
        return;
    }
    var index = 0;
    var vindex = 0;


    frame = 56 - this.currentFrame();
    index = frame % 7;
    vindex = Math.floor(frame / 8);

    var locX = x;
    var locY = y;

    var offset = vindex === 0 ? this.startX : 0;

    ctx.drawImage(this.spriteSheet,
                  index * this.frameWidth, vindex * this.frameHeight + this.startY,  // source from sheet
                  this.frameWidth, this.frameHeight,
                  locX, locY,
                  this.frameWidth,
                  this.frameHeight);
}

RocksAnimation.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
}

RocksAnimation.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
}
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// meteor "rocks" animation
function Metero(game) {
    this.animation = new RocksAnimation(ASSET_MANAGER.getAsset("./img/meteor.png"), 0, 0, 50, 50, .10, 56, true, true);
    this.radius = 50;
    var newX = Math.random() * 800;
    var newY = 0;
    Entity.call(this, game, newX, newY);
}

Metero.prototype = new Entity();
Metero.prototype.constructor = Metero;

Metero.prototype.update = function () {

    this.y += 1;

    if (this.y > 600) {
        this.y = 0;

    }
    this.x += 1;
    if (this.x > 800) {
        this.x = Math.random() * 800;
        this.y = 0;
    }
    Entity.prototype.update.call(this);
}

Metero.prototype.draw = function (ctx) {

    this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);

    Entity.prototype.draw.call(this);
}
///////////////////////////////////////////////////////////////////////////////////////////

// create enemy1.
function Enemy(game) {
    this.animation = new EnemyAnimation(ASSET_MANAGER.getAsset("./img/enemy1.png"), 0, 0, 59, 27, 100, 1, true, true); 

    this.randomY = 5;
    this.randomX = 22;
    this.wall = 0;
    Entity.call(this, game, 300, 450);
}

Enemy.prototype = new Entity();
Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function () {
    if (this.wall === 0)
        this.x += 5;
    else this.x -= 5;

    if (this.x >= 700)
        this.wall = 1;
    if (this.x <= 0)
        this.wall = 0;
    
    if (this.reset && this.x < 650 && this.x >= 0) {
        this.x += this.randomX;
        this.reset = 0;
    }
 
    this.y += this.randomY;

    if (this.y > 600) {
        this.y = 0;
        this.reset = 1;
        // random x coordonate
        var maxX = 250;
        var minX = -250;
        // if (this.x > 750) {

        this.randomX = Math.random() * (maxX - minX) + minX;
        //  } else this.randomX = Math.random() * (maxX - minX) + minX;
        if (this.x < 0 || this.x > 750)
            this.x = 350;
        // this.x = 0;
        /**
         * Returns a random number between min (inclusive) and max (exclusive)
         */
        var maxY = 10;
        var minY = 1;
        this.randomY = Math.random() * (maxY - minY) + minY;

    }

    Entity.prototype.update.call(this);
}

Enemy.prototype.draw = function (ctx) {

    this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 0, this.wall, this.freeze, this.slide, this.kick);

    Entity.prototype.draw.call(this);
}

// Enemy2
function Enemy2(game) {
    this.animation = new EnemyAnimation(ASSET_MANAGER.getAsset("./img/enemy2.png"), 0, 0, 59, 32, 100, 1, true, true);

    this.reset = 1;
    this.randomY = 5;
    Entity.call(this, game, 450, 0);
}

Enemy2.prototype = new Entity();
Enemy2.prototype.constructor = Enemy;

Enemy2.prototype.update = function () {

    this.y += this.randomY;

    if (this.y > 600) {
        this.y = 0;

        // this.x = 0;
        /**
         * Returns a random number between min (inclusive) and max (exclusive)
         */
        var maxY = 10;
        var minY = 1;
        this.randomY = Math.random() * (maxY - minY) + minY;

    }

    Entity.prototype.update.call(this);
}

Enemy2.prototype.draw = function (ctx) {

    this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 0, this.wall, this.freeze, this.slide, this.kick);

    Entity.prototype.draw.call(this);
}

// enemy3
function Enemy3(game) {
    this.animation = new EnemyAnimation(ASSET_MANAGER.getAsset("./img/enemy3.png"), 0, 0, 42, 28, 100, 1, true, true);

    this.reset = 1;
    this.randomY = 6;
    Entity.call(this, game, 150, 0);
}

Enemy3.prototype = new Entity();
Enemy3.prototype.constructor = Enemy;

Enemy3.prototype.update = function () {

    this.y += this.randomY;

    if (this.y > 600) {
        this.y = 0;

        // this.x = 0;
        /**
         * Returns a random number between min (inclusive) and max (exclusive)
         */
        var maxY = 10;
        var minY = 1;
        this.randomY = Math.random() * (maxY - minY) + minY;

    }

    Entity.prototype.update.call(this);
}

Enemy3.prototype.draw = function (ctx) {

    this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 0, this.wall, this.freeze, this.slide, this.kick);

    Entity.prototype.draw.call(this);
}

Background.prototype = new Entity();
Background.prototype.constructor = Background;

Background.prototype.update = function () {
}

Background.prototype.draw = function (ctx) {

    // this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    ctx.drawImage(ASSET_MANAGER.getAsset("./img/bg.png"), 0, 0);

    // Entity.prototype.draw.call(this);
    //  ctx.fillStyle = "Black";
    // ctx.fillRect(0,0,800,800);
    Entity.prototype.draw.call(this);

}

// score
function Score(game) {
    // this.animation = new Animation(ASSET_MANAGER.getAsset("./img/bg.png"), 0, 0, 768, 520, 100, 1, true, false);
    Entity.call(this, game, 0, 0);
    this.radius = 200;
}
Score.prototype = new Entity();
Score.prototype.constructor = Score;

Score.prototype.update = function () {
}

Score.prototype.draw = function (ctx) {

    //ctx.font = "bold 80px sans-serif";
    // while ( true) {
    ctx.fillText("xxxx", 248, 43);
    ctx.fillText("yxxx", 58, 165);
    //  }
    //ctx.fillStyle = "Red";
    //ctx.fillRect(0, 0, 10, 10);
    Entity.prototype.draw.call(this);

}

// bar
function Score(game) {
    this.animation = new Animation(ASSET_MANAGER.getAsset("./img/score.png"), 0, 0, 133, 43, 100, 1, true, false);
    Entity.call(this, game, 0, 0);
    // this.radius = 200;
}

Score.prototype = new Entity();
Score.prototype.constructor = Score;

Score.prototype.update = function () {
}

Score.prototype.draw = function (ctx) {

    // this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    ctx.drawImage(ASSET_MANAGER.getAsset("./img/score.png"), 10, 10);

    Entity.prototype.draw.call(this);
    //ctx.fillStyle = "SaddleBrown";
    //ctx.fillRect(0,515,800,300);
    //Entity.prototype.draw.call(this);

}
// Boss animation
function AnimationB(spriteSheet, startX, startY, frameWidth, frameHeight,
		           frameDuration, frames, loop, reverse) {
    this.spriteSheet = spriteSheet;
    this.startX = startX;
    this.startY = startY;
    this.frameWidth = frameWidth;
    this.frameDuration = frameDuration;
    this.frameHeight = frameHeight;
    this.frames = frames;
    this.totalTime = frameDuration * frames;
    this.elapsedTime = 0;
    this.loop = loop;
    this.reverse = reverse;
}

AnimationB.prototype.drawFrame = function (tick, ctx, x, y, scaleBy) {
    var scaleBy = scaleBy || 1;
    this.elapsedTime += tick;
    if (this.loop) {
        if (this.isDone()) {
            this.elapsedTime = 0;
        }
    } else if (this.isDone()) {
        return;
    }
    var index = this.reverse ? this.frames - this.currentFrame() - 1 :
    	                       this.currentFrame();
    var vindex = 0;
    if ((index + 1) * this.frameWidth + this.startX > this.spriteSheet.width) {
        index -= Math.floor((this.spriteSheet.width - this.startX) / this.frameWidth);
        vindex++;
    }
    while ((index + 1) * this.frameWidth > this.spriteSheet.width) {
        index -= Math.floor(this.spriteSheet.width / this.frameWidth);
        vindex++;
    }

    var locX = x;
    var locY = y;
    var offset = vindex === 0 ? this.startX : 0;
    ctx.drawImage(this.spriteSheet,
                  index * this.frameWidth + offset, vindex * this.frameHeight +
                  this.startY,  // source from sheet
                  this.frameWidth, this.frameHeight,
                  locX, locY,
                  this.frameWidth * scaleBy,
                  this.frameHeight * scaleBy);
}

AnimationB.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
}

AnimationB.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
}

///
function Boss(game) {
    this.animation = new AnimationB(ASSET_MANAGER.getAsset(
    		"./img/boss1.png"), 0, 0, 374, 300, 0.1, 1, true, false);
    this.right = true;
    this.up = true;
    Entity.call(this, game, 100, 0);
}

Boss.prototype = new Entity();
Boss.prototype.constructor = Boss;

Boss.prototype.update = function () {
    if (this.x == -200) this.right = true;
    if (this.x == 600) this.right = false;
    if (this.y == -100) this.up = false;
    if (this.y == 200) this.up = true;
    if (this.right) this.x += 1;
    else this.x -= 1;
    if (this.up) this.y -= 1;
    else this.y += 1;
    Entity.prototype.update.call(this);
}

Boss.prototype.draw = function (ctx) {
    this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}


///



function MainCraft(game) {
    this.animation = new Animation(ASSET_MANAGER.getAsset("./img/test3.png"), 0, 0, 61, 75, 0.1, 4, true, true);
    this.jumping = false;
    this.radius = 100;
    this.ground = 400;
    this.wall = 0;
    this.freeze = 0;
    this.slide = 0;
    this.kick = 0;
    this.go = 0;
    Entity.call(this, game, 350, 500);
}

MainCraft.prototype = new Entity();
MainCraft.prototype.constructor = MainCraft;

MainCraft.prototype.update = function () {
    if (this.game.space && this.y > 0)
        this.y -= 10;
    if (this.game.right && this.x < 730)
        this.x += 10;
    if (this.game.left && this.x > 0)
        this.x -= 10;
    if (this.game.down && this.y < 520)
        this.y += 10;
    if (this.game.diagonal) {
        this.x += 10;
        this.y - +10;
    }


    Entity.prototype.update.call(this);
}

MainCraft.prototype.draw = function (ctx) {
    if (this.jumping) {
        this.jumpAnimation.drawFrame(this.game.clockTick, ctx, this.x + 17, this.y - 34, 0, this.wall, this.freeze, this.slide, this.kick);

    } else if (this.kick) {
        this.kickAnimation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 0, this.wall, this.freeze, this.slide, this.kick);

    } else {
        this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 0, this.wall, this.freeze, this.slide, this.kick);
    }
    Entity.prototype.draw.call(this);
}

// flash bullet
function Flash(game) {
    this.animation = new Animation9(ASSET_MANAGER.getAsset("./img/bullet2.png"), 0, 0, 37, 100, 0.07, 6, true, true); 

    this.reset = 1;
    Entity.call(this, game, 300, 450);
}

Flash.prototype = new Entity();
Flash.prototype.constructor = Flash;

Flash.prototype.update = function () {

    // this.x = this.game.entities[1].x;
    // this.y = this.game.entities[1].y;
    if (this.y <= -100) {
        //if (this.game.shoot) {
        //    this.x = this.game.entities[1].x + 12;
        //    this.y = this.game.entities[1].y - 40;
        //}
        this.game.shoot = null;
        this.reset = 1;
        this.x = this.game.entities[8].x + 12;
        this.y = this.game.entities[8].y - 40;
        //     this.reset = 1;
    }
    if (this.game.shoot) {

        if (this.reset === 1) {
            this.x = this.game.entities[8].x + 12;
            this.y = this.game.entities[8].y - 40;
            this.reset = 0;
        }

        this.y -= 10;
    }

    Entity.prototype.update.call(this);
}

Flash.prototype.draw = function (ctx) {
    if (this.game.shoot)
        this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 0, this.wall, this.freeze, this.slide, this.kick);

    Entity.prototype.draw.call(this);
}
function AnimationBG(spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration, frames, loop, reverse) {
    this.spriteSheet = spriteSheet;
    this.startX = startX;
    this.startY = startY;
    this.frameWidth = frameWidth;
    this.frameDuration = frameDuration;
    this.frameHeight = frameHeight;
    this.frames = frames;
    this.totalTime = frameDuration * frames;
    this.elapsedTime = 0;
    this.loop = loop;
    this.reverse = reverse;
    this.action = 0;
}


AnimationBG.prototype.drawFrame = function (tick, ctx, x, y, scaleBy) { // wall arg added ???

    var scaleBy = scaleBy || 1;
    var frame = this.currentFrame();
    this.elapsedTime += tick;
    if (this.loop) {
        if (this.isDone()) {
            this.elapsedTime = 0;
        }
    } else if (this.isDone()) {
        return;
    }
    var index = 0;
    var vindex = 0;


    frame = this.currentFrame();
    index = frame % 1;
    vindex = Math.floor(frame / 1);

    var locX = x;
    var locY = y;
    var offset = vindex === 0 ? this.startX : 0;

    ctx.drawImage(this.spriteSheet,
                  index * this.frameWidth + offset, vindex * this.frameHeight + this.startY,  // source from sheet
                  this.frameWidth, this.frameHeight,
                  locX, locY,
                  this.frameWidth * scaleBy,
                  this.frameHeight * scaleBy);
}

AnimationBG.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
}

AnimationBG.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
}

// scrolling background
function ScrollBG(game) {
    this.animation = new AnimationBG(ASSET_MANAGER.getAsset("./img/bg1.png"), 0, 0, 800, 600, 5, 1, true, true);
    Entity.call(this, game, 0, 0);
}

ScrollBG.prototype = new Entity();
ScrollBG.prototype.constructor = ScrollBG;

ScrollBG.prototype.update = function () {

    this.y += 1;
    if (this.y >= 600) {
        this.y = -600;
    }
    

    Entity.prototype.update.call(this);
}

ScrollBG.prototype.draw = function (ctx) {

    this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 0);

    Entity.prototype.draw.call(this);
}
// 2nd bacground
function ScrollBG1(game) {
    this.animation = new AnimationBG(ASSET_MANAGER.getAsset("./img/bg2.png"), 0, 0, 800, 600, 5, 1, true, true);
    Entity.call(this, game, 0, -600);
}

ScrollBG1.prototype = new Entity();
ScrollBG1.prototype.constructor = ScrollBG;

ScrollBG1.prototype.update = function () {

    this.y += 1;
    if (this.y >= 600) {
        this.y = -600;
    }


    Entity.prototype.update.call(this);
}

ScrollBG1.prototype.draw = function (ctx) {

    this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y,0);

    Entity.prototype.draw.call(this);
}



// the "main" code begins here

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./img/bg1.png");
ASSET_MANAGER.queueDownload("./img/bg2.png");
ASSET_MANAGER.queueDownload("./img/score.png");
ASSET_MANAGER.queueDownload("./img/chunli.png");
ASSET_MANAGER.queueDownload("./img/test3.png");
ASSET_MANAGER.queueDownload("./img/bullet2.png");
ASSET_MANAGER.queueDownload("./img/enemy1.png");
ASSET_MANAGER.queueDownload("./img/enemy2.png");
ASSET_MANAGER.queueDownload("./img/enemy3.png");
ASSET_MANAGER.queueDownload("./img/boss1.png");
ASSET_MANAGER.queueDownload("./img/meteor_small.png");
ASSET_MANAGER.queueDownload("./img/meteor.png");

ASSET_MANAGER.downloadAll(function () {
    console.log("starting up da sheild");
    var canvas = document.getElementById('gameWorld');
    var ctx = canvas.getContext('2d');

    var gameEngine = new GameEngine();

    var flash = new Flash(gameEngine);
    //var bg = new Background(gameEngine);
    var score = new Score(gameEngine);
    var mainCraft = new MainCraft(gameEngine);
    var score = new Score(gameEngine);

    // enemy spaceship
    var enemy = new Enemy(gameEngine);
    var enemy2 = new Enemy2(gameEngine);
    var enemy3 = new Enemy3(gameEngine);

    // background
   // var bg = new ScrollBG1(gameEngine);
    var bg1 = new ScrollBG(gameEngine);
    var bg2 = new ScrollBG1(gameEngine);
    // boss
    var boss1 = new Boss(gameEngine);
    // rocks
    var rock1 = new Metero(gameEngine);
    var rock2 = new Metero(gameEngine);

    gameEngine.addEntity(bg1);
    gameEngine.addEntity(bg2);
    gameEngine.addEntity(rock1);
    gameEngine.addEntity(rock2);
    gameEngine.addEntity(boss1);
    gameEngine.addEntity(enemy);
    gameEngine.addEntity(enemy2);
    gameEngine.addEntity(enemy3);
    gameEngine.addEntity(mainCraft);
    gameEngine.addEntity(flash);
    gameEngine.addEntity(score);

    gameEngine.init(ctx);
    gameEngine.start();
});
