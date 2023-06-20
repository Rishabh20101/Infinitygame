var boy,background1
var dog
var dogRun
var dogRunImg
var obstacle1
var obstacle2
var obstacle3
var obstacle4
var obstacle1Img
var obstacle2Img
var obstacle3Img
var obstacle4Img
var boyImg
var dogImg
var obstaclesImg
var obstacle1Group
var boyRun
var boyRunImg
var path
var pathImg
var park
var parkImg
var Play
var Start 
var End
var obstacle2Group
var obstacle3Group
var obstacle4Group
var gameState=Play
var gameState=End

function preload(){
boyImg=loadImage("boy.png")
boyRunImg=loadImage("boy running.jpg")
pathImg=loadImage("park.jpeg")
obstacle1Img=loadImage("obstacle1.jpeg")
obstacle2Img=loadImage("obstacle2.jpeg")
obstacle3Img=loadImage("obstacle3.jpeg")
obstacle4Img=loadImage("obstacle4.png")
dogImg=loadImage("dog.jpeg")
dogRunImg=loadImage("dog run.png")
parkImg=loadImage("park.jpeg")
}

function setup() {
 // creating the bg
createCanvas(windowWidth,windowHeight)

path=createSprite(400,400,width+100,50);
path.velocityX =-4;

var background1=createSprite(500,200,windowWidth,windowHeight)
background1.addImage(parkImg)


// creating the boy
boy = createSprite(300,320,20,20)
boy.addImage(boyImg)
boy.scale=0.7
boy.velocityX=0

// creating the dog
dog = createSprite(100,320,20,20)
dog.addImage(dogImg)
dog.scale=0.4
dog.velocityX=0

obstacle1Group=createGroup()
obstacle2Group=createGroup()
obstacle3Group=createGroup()
obstacle4Group=createGroup()
}

function draw() {

if (path.x<350){
  path.x=500
}
 console.log(path.x)
 
  
 
  
 
 
 
 
 
 
 
 
 
    drawSprites();
}