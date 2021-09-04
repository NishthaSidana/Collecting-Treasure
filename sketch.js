var gameState="PLAY"
var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;

//Game States

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadImage("gameOver.png");
  stopImg=loadAnimation("Runner-1.png")
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
// Moving background
  path=createSprite(800,200);
  path.addImage(pathImg);
  path.scale=1
  path.velocityY = 5;


//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  end=createSprite(windowWidth/2,windowHeight/2,20,20)
  end.addImage(endImg)
  end.visible=false
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {
  background(0);
  if(gameState==="PLAY"){
  boy.x = World.mouseX;
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+50;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection=treasureCollection+50;
  } else if(swordGroup.isTouching(boy)) {
    gameState="end"
}
  
      
    
  }
  }
  if (gameState=="end"){
    path.velocityY=0
    jwelleryG.setVelocityYEach(0)
    diamondsG.setVelocityYEach(0)
    swordGroup.setVelocityYEach(0)
    cashG.setVelocityYEach(0)
    end.visible=true
    boy.destroy()
    cashG.setLifetimeEach(-1)
    diamondsG.setLifetimeEach(-1)
    swordGroup.setLifetimeEach(-1)
    jwelleryG.setLifetimeEach(-1)
  }
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);
}

function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(20, windowWidth),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 8;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 50 == 0) {
  var diamonds = createSprite(Math.round(random(20, windowWidth),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 8;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 50 == 0) {
  var jwellery = createSprite(Math.round(random(20, windowWidth),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 8;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 50 == 0) {
  var sword = createSprite(Math.round(random(20, windowWidth),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 8;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}