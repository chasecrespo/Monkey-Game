
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime=0

function preload(){
  
  
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
  
  monkey=createSprite(80,315,20,20);
 monkey.addAnimation("moving", monkey_running);
monkey.scale=0.1;
  
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2
  console.log(ground.x)
  
  //monkey.collide(ground);
}

 

function draw() {
  background("white");
  
if(keyDown("space")){
  monkey.velocityY=-10
}
  
  monkey.velocityY=monkey.velocityY+0.8
  
  monkey.collide(ground);
  
if(ground.x>-400){
    ground.x=300 
  }
  spawnObstacles();
  spawnFood();
  
  survivalTime = survivalTime + Math.round(getFrameRate()/60);
  text("Survival Time: "+ survivalTime, 250,50);
  
  drawSprites();
}

function spawnFood(){
if(frameCount%80===0){
    banana=createSprite(500,315)
    banana.addImage(bananaImage);
banana.velocityX=-7
  banana.scale=0.1
  banana.y=Math.round(random(120,200))
banana.lifeTime=50;
  //FoodGroup.add(banana)
}
}

function spawnObstacles(){
if(frameCount%300===0){
  obstacle=createSprite(500,330);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX=-7
  obstacle.scale=0.14

}
}






