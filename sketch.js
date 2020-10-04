var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground, groundSprite;
var box1, box2, box3;
var boxBody1, boxBody2, boxBody3;
var engine, world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG=loadImage("helicopter.png");

	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);

	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	
	box1 = createSprite(400, 650, 200, 20);
	box1.shapeColor = "red";

	box2 = createSprite(510, 610, 20, 100);
	box2.shapeColor = "red";

	box3 = createSprite(290, 610, 20, 100);
	box3.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 640, width, 10 , {isStatic:true} );
	World.add(world, ground);

	var boxBody1_options = {
		isStatic: true
	}
	boxBody1 = Bodies.rectangle(400, 650, 200, 20, boxBody1_options);
	World.add(world, boxBody1);

	var boxBody2_options = {
		isStatic: true
	}
	boxBody2 = Bodies.rectangle(510, 610, 20, 100, boxBody2_options);
	World.add(world, boxBody2);

	var boxBody3_options = {
		isStatic: true
	}
	boxBody3 = Bodies.rectangle(290, 610, 20, 100, boxBody3_options);
	World.add(world, boxBody3);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);

  background(0);

  Engine.update(engine);

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  keyPressed();

  drawSprites();
}

function keyPressed() {
	if(keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody, false);
	}
}