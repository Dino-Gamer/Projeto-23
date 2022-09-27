
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

angle1=0.0;
angle2=0.0;
angle3=0.0;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.

var rotator_options={
	isStatic: true,
}

var plane_options={
	isStatic: true,
}

particle_options={
 restitution:0.4,
 friction:0.02,
}



//blocks
block1 = Bodies.rectangle(400,250,100,20,plane_options);
World.add(world, block1);
block2 = Bodies.rectangle(400,400,100,20,plane_options);
World.add(world, block2);

//rotators
rotator1 = Bodies.rectangle(400,150,100,20,rotator_options);
World.add(world, rotator1);
Matter.Body.rotate(rotator1,angle1)
push();
translate(rotator1.position.x,rotator1.position.y);
rotate(angle1);
rect(0,0,150,20);
pop();
angle1 +=0.2;

rotator2 = Bodies.rectangle(400,150,100,20,rotator_options);
World.add(world, rotator2);
Matter.Body.rotate(rotator2,angle2)
push();
translate(rotator2.position.x,rotator2.position.y);
rotate(angle2);
rect(0,0,150,20);
pop();
angle2 +=0.4;

rotator3 = Bodies.rectangle(400,150,100,20,rotator_options);
World.add(world, rotator3);
Matter.Body.rotate(rotator3,angle3)
push();
translate(rotator3.position.x,rotator3.position.y);
rotate(angle3);
rect(0,0,150,20);
pop();
angle3 +=0.6;

//particles
//particle1 = Bodies.circle()

	Engine.run(engine);
  
}


function draw() {

Engine.update(engine);

  rectMode(CENTER);
  background(0);

  block1.rectMode(block1.position.x,block2.position.y,100,20,plane_options);
  
  drawSprites();
 
}



