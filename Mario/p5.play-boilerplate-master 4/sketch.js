const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var obstaclegroup;
var mario,ground;
var coinImg;
var backimg,timg;
var  marioleft;



function preload(){
  coinImg = loadImage("Coin.gif");
  backimg = loadImage("background.png");
  mariowalk = loadImage("mario.gif");
  marioWalk2 = loadImage("mario2.gif");
  timg = loadImage("turtle.gif");
  marioleft = loadImage("mario_left.png")
}
function setup() {
 
  createCanvas(windowWidth,windowHeight);
  backimg.scale = 4;
  engine = Engine.create();
  world = engine.world;
  mario = createSprite(200,760,30,30);

  camera.position.x = mario.x;
  camera.position.y = mario.y - 310;
  
  mario.addImage(mariowalk);
  mario.scale = 1.5;
  ground = createSprite(1000,760,2000,5);
  ground.visible = false;
  ground.x = ground.width/2;


  
  obstaclegroup = new Group();
  coingroup = new Group();

}


function draw() {
  
  background(backimg);  
  
  Engine.update(engine);
  







  spawnobstacles();
  if(keyWentDown("space")&&mario.y>=680){
    mario.addImage(marioWalk2)
    mario.velocityY = -15;
    
    
    
  }
  if(ground.x<0){
    ground.x = ground.width/2
  } 
  if(keyWentDown(RIGHT_ARROW)){
    mario.addImage(marioWalk2);
    mario.x = mario.x + 100;
  }
  if(keyWentDown(RIGHT_ARROW)){
    mario.addImage(marioWalk2);
    mario.velocityX = 0;
  }
  
  if(keyWentUp("space")){
    mario.addImage(mariowalk);
  }
  if(keyWentDown(LEFT_ARROW)){
    mario.addImage(marioleft);
    mario.x = mario.x - 20;
  }
  if(keyWentDown(LEFT_ARROW)){
    mario.addImage(marioleft);
    mario.velocityX = 0;
  }
  
  
  
  mario.velocityY = mario.velocityY + 0.6   ;
  ground.display();
  mario.collide(ground);



  drawSprites();
}

function spawnobstacles(){
  if(frameCount%500===0){
    obstacle = createSprite(2000,725,20,20);
    obstacle.scale = 1.3
    obstacle.velocityX = -4;
    obstacle.addImage(timg);
    obstaclegroup.add(obstacle);

    obstaclegroup.setLifetimeEach(-1);
 } 

}


