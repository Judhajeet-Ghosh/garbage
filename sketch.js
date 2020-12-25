
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// function preload()
// {
	
// }
var paper;
var ground;
var dust1,dust2,dust3;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	//Engine.run(engine);
	paper = new Paper(100,520,80)
	ground = new Ground(100,650,800,20)
	dust1 = new Dustbin(500,610,20,65)
	dust2 = new Dustbin(680,610,20,65)
	dust3 = new Dustbin(590,650,200,20)

	//paper = loadImage("paper.png")
}


function draw() {
  
  background(255);
  Engine.update(engine); 
  
  
  
   paper.display()
   //image(paper,100,500)
  ground.display()
  dust1.display()
  dust2.display()
  dust3.display()
  //image(this.image,100,500)
 
  drawSprites();
 
}
function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50});
	}
}



