var garden,rabbit; var leaf; var orangeleaf;var redleaf; 
var gardenImg,rabbitImg;

var apple;applesGroup, appleImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImg = loadImage("leaf.png");
  appleImg = loadImage("apple.png");
 orangeleafImg = loadImage("orangeleaf.png");
  redleafImg = loadImage("redImage.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
garden.velocityX =0.05;
garden.x =garden.width/2;

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


//creating apples
apple = createSprite(150,290,10,10);
apple.scale =0.09;
apple.addImage(appleImg);
apple.velocityY =3;
apple.lifetime = 150;

//creating Orangeleaves
orangeleaf = createSprite(200,300,10,10)
orangeleaf.scale =0.09;
orangeleaf.addImage(orangeleafImg);
orangeleaf.velocityY =3;
  orangeleaf.lifetime = 150;

}



function draw() {
  background("green");
 
  rabbit.x= World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
   
  var select_sprites = Math.round(random(1,2))

  if(frameCount % 80 == 0){
    if(select_sprites ==1){
      createApples();
    }
    else{
      createorangeleaf();
    }

  }
  var select_sprites = Math.round(random(1,2))

  drawSprites();
}



  function createApples(){
    apple = createSprite(random(50,350),40,10,10);
    apple.scale =0.09;
  apple.addImage(appleImg);
  apple.velocityY=3;
  apple.lifetime = 150;
  }
  
  function createorangeleaf(){
    orangeleaf  = createSprite(random(50,350),40,10,10);
    orangeleaf.scale =0.09;
    orangeleaf.addImage(orangeleafImg);
    orangeleaf.velocityY =3;
    orangeleaf.lifetime = 150;
  }







