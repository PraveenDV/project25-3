
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,ball,ground,invisbleWall;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	ball=new PAPER(100,200,40);
	
	
	ground= new GROUND(750,580,1500,10);

	invisibleWall=new wall(1200,530,10,100);

	invisbleWall2=new wall(1100,530,10,100);

	
	dustbin=new DUSTBIN(1150,530,100,100);
	

	Engine.run(engine);



  
}


function draw() {
  rectMode(CENTER);
  background("white");
	
  Engine.update(engine);

	

	ground.display();
	
	dustbin.display();
	
	ball.display();

	

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:300,y:-300});
	}
}

//function Istouching(object1,object2){
	//if(object1.x-object2.x<(object2.x+object1.x)/width && 
	//object2.x-object1.x<(object2.x+object1.x)/width){
		//return true;
	//}else{
		//return false;
	//}
//}