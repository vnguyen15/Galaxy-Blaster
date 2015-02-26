

// the "main" code begins here
var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./img/bg1.png");
ASSET_MANAGER.queueDownload("./img/bg2.png");
ASSET_MANAGER.queueDownload("./img/bg3.png");
ASSET_MANAGER.queueDownload("./img/score.png");
ASSET_MANAGER.queueDownload("./img/test3.png");
ASSET_MANAGER.queueDownload("./img/bullet2.png");
ASSET_MANAGER.queueDownload("./img/enemy1.png");
ASSET_MANAGER.queueDownload("./img/enemy2.png");
ASSET_MANAGER.queueDownload("./img/enemy3.png");
ASSET_MANAGER.queueDownload("./img/boss1.png");
ASSET_MANAGER.queueDownload("./img/meteor_small.png");
ASSET_MANAGER.queueDownload("./img/meteor.png");
ASSET_MANAGER.queueDownload("./img/blueBall1.png");
ASSET_MANAGER.queueDownload("./img/finalExplosion.png");
ASSET_MANAGER.queueDownload("./img/explosion2.png");
ASSET_MANAGER.queueDownload("./img/rocketA.png");
ASSET_MANAGER.queueDownload("./img/bossBullet.png");

ASSET_MANAGER.downloadAll(function () {
    console.log("starting up da sheild");
    var canvas = document.getElementById('gameWorld');
    canvas.setAttribute('tabindex', '0');
    canvas.focus();
    var ctx = canvas.getContext('2d');

    var gameEngine = new GameEngine();
    var snd = new Audio("./sounds/bg1.mp3"); // buffers automatically when created
    snd.play();
    
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
    var bg1 = new ScrollBG1(gameEngine);
    var bg2 = new ScrollBG2(gameEngine);
    var bg3 = new ScrollBG3(gameEngine);
    // boss
    var boss1 = new Boss(gameEngine);
    // rocks
    var rock1 = new Metero(gameEngine);
    var rock2 = new Metero(gameEngine);
    var smallRock1 = new SmallMetero(gameEngine);
    var smallRock2 = new SmallMetero(gameEngine);
    // bullets
    var flash = new NewFlash(gameEngine, 1);
    var flash2 = new NewFlash(gameEngine, 2);
    var fireBullet = new FireBall(gameEngine);
    var rocket = new Rocket(gameEngine);
   

    // adding background
    gameEngine.addEntity(bg1);
    gameEngine.addEntity(bg2);
    gameEngine.addEntity(bg3);

    // adding boss and ememies
    gameEngine.addEntity(boss1);
    gameEngine.addEntity(rock1);
    gameEngine.addEntity(rock2);
    // 6 for fireball
    gameEngine.addEntity(fireBullet);
    gameEngine.addEntity(rocket);
    gameEngine.addEntity(enemy);
    gameEngine.addEntity(enemy2);
    gameEngine.addEntity(enemy3);
    
    var rangeX = -12;
    for (var i = 0; i < 12; i++) {
        var bossBullet = new BossBullet(gameEngine, rangeX);
        rangeX += 2;
        gameEngine.addEntity(bossBullet);
    }


    gameEngine.addEntity(flash);
    gameEngine.addEntity(flash2);
    gameEngine.addEntity(mainCraft);
    gameEngine.addEntity(score);
    //gameEngine.addEntity(smallRock1);
    //gameEngine.addEntity(smallRock2);
     
    gameEngine.init(ctx);
    
    gameEngine.start();
   
});
