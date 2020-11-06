const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



var player;
var edges;
var boyImage,bacGImage,enemyImage,coronaImage,schoolImage,CCImage;
var engine,world;
var corona1,corona2,corona3,coron4;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16;
var edges;

function preload(){
bacGImage=loadImage("Pictures/Background.png");
enemyImage=loadImage("Pictures/Antagonists.png");
coronaImage=loadImage("Pictures/Corona.png");
CCImage=loadImage("Pictures/Community Center.png")
schoolImage=loadImage("Pictures/School Image.png")
}
function setup(){
    createCanvas(displayWidth-30,displayHeight-150);
    corona1=createSprite(770,390,30,30);
    corona1.addImage(coronaImage);
    corona1.scale=0.1

    corona2=createSprite(25,685,30,30);
    corona2.addImage(coronaImage);
    corona2.scale=0.1

    corona3=createSprite(1485,685,30,30);
    corona3.addImage(coronaImage);
    corona3.scale=0.1

    corona4=createSprite(1465,25,30,30);
    corona4.addImage(coronaImage);
    corona4.scale=0.1

    engine = Engine.create();
    world = engine.world;

  player=new Boy();
  wall1=new Wall(50,100,200,20);
  wall2=new Wall(350,100,20,200);
  wall3=new Wall(250,250,20,300);
  wall4=new Wall(550,450,20,500);
  wall5=new Wall(250,650,300,20);
  wall6=new Wall(200,550,20,100);
  wall7=new Wall(350,450,20,200);
  wall8=new Wall(735,275,20,200);
  wall9=new Wall();
  wall10=new Wall();
  wall11=new Wall();
  wall12=new Wall();
  wall13=new Wall();
  wall14=new Wall();
  wall15=new Wall();
  wall16=new Wall();       
   
   
}
function draw(){
    background(255,235,149);

  
 Engine.update(engine);
 player.display();
 player.control();
 wall1.display();
 wall2.display();
 wall3.display();
 wall4.display();
 wall5.display();
 wall6.display();
 wall7.display();
 wall8.display();
 wall9.display();
 wall10.display();
 wall11.display();
 wall12.display();
 wall13.display();
 wall14.display();
 wall15.display();
 wall16.display();
 
console.log(mouseX,mouseY);
edges=createEdgeSprites();
corona1.velocityX=2;
corona1.collide(edges)

   image(bacGImage,500,0,250,100);
   image(schoolImage,1005,610,250,100);
   image(CCImage,1270,205,250,100);

   drawSprites();

   
   
}
