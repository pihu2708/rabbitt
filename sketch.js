var garden,rabbit;
var gardenImg,rabbitImg,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg  = loadImage("apple.png")
  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg)

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x =mouseX
  drawSprites();


  var select_sprites = Math.round(random(1,2))
  if(frameCount %80  === 0){
  if(select_sprites ===1 ){
    createApples()
  }
  else{
    createLeafs()
  }
}



}

function createApples(){
    apple =createSprite(random(10,350),40,10,10)
    apple.velocityY=4
    apple.addImage(appleImg)
    apple.scale= 0.1
    apple.lifetime=80

  }
  function createLeafs(){
    leaf =createSprite(random(10,350),40,10,10)
    leaf.velocityY=6
    leaf.addImage(leafImg)
    leaf.scale= 0.1
    leaf.lifetime=80
  }
    