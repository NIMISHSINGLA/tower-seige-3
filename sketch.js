const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var floor;
var blockstand1;
var block1,block2,block3,block4,block6,block7,block8;
var block9,block10,block11,block12,block13;
var block14,block15,block16;
var block17;
var polygon,polygonImg;
var sling;
var score = 0;


function preload(){
    polygonImg = loadImage("polygon.png");
 
 
}


function setup(){
createCanvas(850,625);
engine = Engine.create();
world = engine.world;

floor = new ground(425,600,850,20);
blockstand1 = new ground(310,550,270,15);

//first layer
block1 = new box(310,523);
block2 = new box(280,523);
block3 = new box(250,523);
block4 = new box(220,523);
block6 = new box(340,523);
block7 = new box(370,523);
block8 = new box(400,523);
//second layer
block9 = new box(310,483);
block10 = new box(280,483);
block11 = new box(250,483);
block12 = new box(340,483);
block13 = new box(370,483);
//third layer
block14 = new box(310,443);
block15 = new box(280,443);
block16 = new box(340,443);
//fourth layer
block17 = new box(310,403);


polygon = Bodies.circle(60,200,20);
World.add(world,polygon);

sling = new Slingshot(this.polygon,{x:100,y:200});






}

function draw(){
background("black");
textSize(30);
    fill("white");
    text("score = " + score,650,100);
Engine.update(engine);
floor.display();
blockstand1.display();
block1.display();
block1.score();
block2.display();
block2.score();
block3.display();
block3.score();
block4.display();
block4.score();
block6.display();
block6.score();
block7.display();
block7.score();
block8.display();
block8.score();
block9.display();
block9.score();
block10.display();
block10.score();
block11.display();
block11.score();
block12.display();
block12.score();
block13.display();
block13.score();
block14.display();
block14.score();
block15.display();
block15.score();
block16.display();
block16.score();
block17.display();
block17.score();


imageMode(CENTER);
image(polygonImg,polygon.position.x,polygon.position.y,50,50)
//console.log(polygon);

sling.display();

}


function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
 }
 
 function mouseReleased(){
     sling.fly()
 }
 

 function keyPressed(){
    if(keyCode === 32){
      sling.attach(polygon);
    }
}