var bird;
var birdImage;
var bgImage

function preload() {

  birdImage= loadAnimation("birdy1.png","birdy2.png", "birdy3.png", "birdy4.png", "birdy 5.png");
//b1 = loadImage("birdy1.png");

bgImage= loadImage("bg2.gif")
  
  


}
function setup() {

 
  
  createCanvas(1000,600);


 
 bg = createSprite(400,200,800,400);
 bg.addImage(bgImage);
bg.velocityX = -2;





bird = createSprite(350,200);
// bird.addImage("b1", b1);
bird.addAnimation("bird", birdImage);
 
}

function draw() {
background(bgImage);  
if(bg.x<250){
  bg.x=bg.width/2
}
if(keyDown("space"))
{
  bird.velocityY= -10

}
bird.velocityY= bird.velocityY + 0.8
spawnPillar1();
  drawSprites();
}

function spawnPillar1(){
  if (frameCount% 50==0) {
    var p1 =createSprite(1000,580,10,100)
    p1.velocityX = -2
    
  }
}

