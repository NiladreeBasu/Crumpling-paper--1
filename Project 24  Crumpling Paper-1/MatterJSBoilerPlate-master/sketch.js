
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bar1,bar2,bar3;
var paper,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bar1 = new Bin(650,560,200,15)
	bar2 = new Bin(750,525,15,70)
	bar3 = new Bin(550,525,15,70)
	ground = new Grb()
  paper = new Sheet()

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  bar1.display();
  bar2.display();  
  bar3.display();
  paper.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
    if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x: 85,y: -85});
	}
}

