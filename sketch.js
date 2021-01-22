// constants that i will need for adding everthing to the world
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//variables that i will need 
var engine, world;
var hexagon
var score = 0 
function preload() {
    backgroundImg = loadImage("background.jpg");
}
function setup(){
//creating canvas
    var canvas = createCanvas(700,400);
    engine = Engine.create();
    world = engine.world;
    
//Creating Ground
    ground = new Ground(390,275,190,20);
//creating all boxes
//last layer
    box1 = new Box(330,235,30,40);
    box2 = new Box(360,235,30,40);
    box3 = new Box(390,235,30,40);
    box4 = new Box(420,235,30,40);
    box5 = new Box(450,235,30,40);
    //second last layer
    box6 = new Box(360,195,30,40);
    box7 = new Box(390,195,30,40);
    box8 = new Box(420,195,30,40);
   //first layer
    box9 = new Box(390,155,30,40);
//creating hexagon
    hexagon = new Hexagon(100,200,70,70)
    //creating slingshot
    slingshot = new SlingShot(hexagon.body,{x:100, y:200});
}

function draw(){
    Engine.update(engine);
    background(backgroundImg);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    hexagon.display();
    slingshot.display();    
    ground.display();
    console.log(score);
    textSize(25);
    text ("score =" + score, 360,100)
}
//function for dragging the mouse 
function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}
//function to release the mouse when the hexagon is released
function mouseReleased(){
   slingshot.fly();
}
//function to get the hexagon back to where it was so that we can play again
function keyPressed(){
if (keyCode == 32 ){
   slingshot.attach(hexagon.body);
}
}
