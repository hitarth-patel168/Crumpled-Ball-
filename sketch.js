
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
	paper = new Paper(100, 300, 10);

	ground = new Ground(400,665,800,20);

	leftSide = new Dustbin(525,600,20,100);
	bottom = new Dustbin(610,640,150,20);
	rightSide = new Dustbin(695,600,20,100);


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();
  
  ground.display();

  leftSide.display();
  bottom.display();
  rightSide.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{
			x:15,
			y:-15
		});
	}
}

