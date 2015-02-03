

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
// create enemy1.
function Enemy(game) {
    this.animation = new EnemyAnimation(ASSET_MANAGER.getAsset("./img/enemy1.png"), 0, 0, 59, 27, 100, 1, true, true); // 61, 75, 0.1, 4, true, true);
    this.kickAnimation = new EnemyAnimation(ASSET_MANAGER.getAsset("./img/chunli.png"), 0, 0, 150, 136, 0.1, 7, true, false);
    this.jumpAnimation = new EnemyAnimation(ASSET_MANAGER.getAsset("./img/chunli.png"), 0, 0, 150, 136, 0.2, 1, true, false);
    this.jumping = false;
    this.radius = 100;
    this.ground = 400;

    this.reset = 0;
    this.randomY = 5;
    this.randomX = 22;
    Entity.call(this, game, 300, 450);
}

Enemy.prototype = new Entity();
Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function () {


    if (this.reset && this.x < 650 && this.x >= 0) {
        this.x += this.randomX;
        this.reset = 0;
    }
    // else
    //  this.x -= this.randomX;

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
    this.animation = new EnemyAnimation(ASSET_MANAGER.getAsset("./img/enemy2.png"), 0, 0, 59, 32, 100, 1, true, true); // 61, 75, 0.1, 4, true, true);
    this.kickAnimation = new EnemyAnimation(ASSET_MANAGER.getAsset("./img/chunli.png"), 0, 0, 150, 136, 0.1, 7, true, false);
    this.jumpAnimation = new EnemyAnimation(ASSET_MANAGER.getAsset("./img/chunli.png"), 0, 0, 150, 136, 0.2, 1, true, false);
    this.jumping = false;
    this.radius = 100;
    this.ground = 400;

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
    this.animation = new EnemyAnimation(ASSET_MANAGER.getAsset("./img/enemy3.png"), 0, 0, 42, 28, 100, 1, true, true); // 61, 75, 0.1, 4, true, true);
    this.kickAnimation = new EnemyAnimation(ASSET_MANAGER.getAsset("./img/chunli.png"), 0, 0, 150, 136, 0.1, 7, true, false);
    this.jumpAnimation = new EnemyAnimation(ASSET_MANAGER.getAsset("./img/chunli.png"), 0, 0, 150, 136, 0.2, 1, true, false);
    this.jumping = false;
    this.radius = 100;
    this.ground = 400;

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
function Wood(game) {
    this.animation = new Animation(ASSET_MANAGER.getAsset("./img/score.png"), 0, 0, 133, 43, 100, 1, true, false);
    Entity.call(this, game, 0, 0);
    // this.radius = 200;
}

Wood.prototype = new Entity();
Wood.prototype.constructor = Wood;

Wood.prototype.update = function () {
}

Wood.prototype.draw = function (ctx) {

    // this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    ctx.drawImage(ASSET_MANAGER.getAsset("./img/score.png"), 10, 10);

    Entity.prototype.draw.call(this);
    //ctx.fillStyle = "SaddleBrown";
    //ctx.fillRect(0,515,800,300);
    //Entity.prototype.draw.call(this);

}




function Unicorn(game) {
    this.animation = new Animation(ASSET_MANAGER.getAsset("./img/test3.png"), 0, 0, 61, 75, 0.1, 4, true, true);
    this.kickAnimation = new Animation(ASSET_MANAGER.getAsset("./img/chunli.png"), 0, 0, 150, 136, 0.1, 7, true, false);
    this.jumpAnimation = new Animation(ASSET_MANAGER.getAsset("./img/chunli.png"), 0, 0, 150, 136, 0.2, 1, true, false);
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

Unicorn.prototype = new Entity();
Unicorn.prototype.constructor = Unicorn;

Unicorn.prototype.update = function () {
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

Unicorn.prototype.draw = function (ctx) {
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
    this.animation = new Animation9(ASSET_MANAGER.getAsset("./img/bullet2.png"), 0, 0, 37, 100, 0.07, 6, true, true); // 61, 75, 0.1, 4, true, true);
    this.kickAnimation = new Animation9(ASSET_MANAGER.getAsset("./img/chunli.png"), 0, 0, 150, 136, 0.1, 7, true, false);
    this.jumpAnimation = new Animation9(ASSET_MANAGER.getAsset("./img/chunli.png"), 0, 0, 150, 136, 0.2, 1, true, false);
    this.jumping = false;
    this.radius = 100;
    this.ground = 400;

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
        this.x = this.game.entities[4].x + 12;
        this.y = this.game.entities[4].y - 40;
        //     this.reset = 1;
    }
    if (this.game.shoot) {

        if (this.reset === 1) {
            this.x = this.game.entities[4].x + 12;
            this.y = this.game.entities[4].y - 40;
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
    this.animation = new AnimationBG(ASSET_MANAGER.getAsset("./img/fullBG.png"), 0, 0, 800, 1600, 5, 1, true, true);
    Entity.call(this, game, 0, -800);
}

ScrollBG.prototype = new Entity();
ScrollBG.prototype.constructor = ScrollBG;

ScrollBG.prototype.update = function () {

    this.y += 1;
    if (this.y >= 0) {
        this.y = -800;
    }
    

    Entity.prototype.update.call(this);
}

ScrollBG.prototype.draw = function (ctx) {

    this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 0);

    Entity.prototype.draw.call(this);
}
// 2nd bacground
function ScrollBG1(game) {
    this.animation = new AnimationBG(ASSET_MANAGER.getAsset("./img/bg.png"), 0, 0, 800, 838, 5, 1, true, true);
    Entity.call(this, game, 0, -1038);
}

ScrollBG1.prototype = new Entity();
ScrollBG1.prototype.constructor = ScrollBG;

ScrollBG1.prototype.update = function () {

    this.y += 1;
    if (this.y >= 300) {
        this.y = -1038;
    }


    Entity.prototype.update.call(this);
}

ScrollBG1.prototype.draw = function (ctx) {

    this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 0);

    Entity.prototype.draw.call(this);
}

// the "main" code begins here

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./img/fullBG.png");
ASSET_MANAGER.queueDownload("./img/space1.png");
ASSET_MANAGER.queueDownload("./img/score.png");
ASSET_MANAGER.queueDownload("./img/chunli.png");
ASSET_MANAGER.queueDownload("./img/test3.png");
ASSET_MANAGER.queueDownload("./img/bullet2.png");
ASSET_MANAGER.queueDownload("./img/enemy1.png");
ASSET_MANAGER.queueDownload("./img/enemy2.png");
ASSET_MANAGER.queueDownload("./img/enemy3.png");


ASSET_MANAGER.downloadAll(function () {
    console.log("starting up da sheild");
    var canvas = document.getElementById('gameWorld');
    var ctx = canvas.getContext('2d');

    var gameEngine = new GameEngine();

    var flash = new Flash(gameEngine);
    //var bg = new Background(gameEngine);
    var wood = new Wood(gameEngine);
    var unicorn = new Unicorn(gameEngine);
    var score = new Score(gameEngine);

    // enemy spaceship
    var enemy = new Enemy(gameEngine);
    var enemy2 = new Enemy2(gameEngine);
    var enemy3 = new Enemy3(gameEngine);

    // background
   // var bg = new ScrollBG1(gameEngine);
    var bg = new ScrollBG(gameEngine);


    gameEngine.addEntity(bg);

    gameEngine.addEntity(enemy);
    gameEngine.addEntity(enemy2);
    gameEngine.addEntity(enemy3);
    gameEngine.addEntity(unicorn);
    gameEngine.addEntity(flash);
    gameEngine.addEntity(wood);

    gameEngine.init(ctx);
    gameEngine.start();
});