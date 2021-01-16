
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
var ground
var box1, box2, box3;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(400,600,800,20)
	box1 = new Box(600,580,200,20)
	box2 = new Box(500,540,20,100)
	box3 = new Box(700,540,20,100)
	 
	paper= new Paper(200,200,10)
	
	
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine)
 ground.display();
 box1.display();
 box2.display();
 box3.display();
 
  paper.display();
  
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		//Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



