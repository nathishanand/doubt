var ground,box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

 
function setup() {
	createCanvas(800, 700);

   
	engine = Engine.create();
	world = engine.world;

	//ground = new Ground(350,100,10.200)


	box1 = new Box(380,650,200,20);
	
	
	box2 = new Box(280,585,20,150)
   

	box3=new Box(480,585,20,150)
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	ground = new Ground(width/2, 650, width, 10 );
 	//World.add(world, ground);

	Engine.run(engine);
    
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  ground.display()
  box1.display()
  box2.display()
  box3.display()

  drawSprites();
}
  
 

 
