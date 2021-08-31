var running
var Path

var runner
var path

function preload(){
    
  //running animation
    running = loadAnimation("Runner-1.png", "Runner-2.png");

  //path
    Path = loadImage("path.png");

}

function setup(){
  createCanvas(400,400);

  //creating path
  path = createSprite(200,200,400,400);
  path.addImage(Path);
  path.scale = 1.2;

  //runner
  runner = createSprite(200,200,10,10);
  runner.addAnimation(running);

  //borders
  leftBorder = createSprite(0,0,100,1000);
  leftBorder.visible = false;
  rightBorder = createSprite(400,0,100,1000);
  rightBorder.visible = false;

}

function draw() {
  background(0);

  runner.x = World.mouseX; 
  runner.bounceOff(leftBorder);
  runner.bounceOff(rightBorder);

  path.velocityY = 5;
  if(path.y > 430){
    path.y = height/3;
  }

  drawSprites();
}
