
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var button1,button2;
let engine;
let world;
var ball;
var ground;
var ball2;
var wall1,wall2,wall3;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  var ball_options = {
    restitution: 1.1,
    frictionAir:0.01
  }
   
  
  wall1= new Boundary(390,200,20,400);

  wall2=new Boundary(10,200,20,400);

  wall3=new Boundary(200,10,400,20);

  ground = new Boundary(200,390,400,20);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ball2=Bodies.circle(300,20,10,ball_options);
  World.add(world,ball2);
  ellipseMode(RADIUS);

  button1=createImg("up.png");
  button1.position(20,30);
  button1.size(50,50);

  button2=createImg("right.png");
  button2.position(220,30);
  button2.size(50,50);

  button1.mouseClicked(vF);
  button2.mouseClicked(hF);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  push();
  fill("red");
  ellipse(ball.position.x,ball.position.y,20);
  pop();

  wall1.display();
  wall2.display();
  wall3.display();
  ground.display();

  ellipse(ball2.position.x,ball2.position.y,10);
} 

function hF (){
  Body.applyForce(ball2,{x:0,y:0},{x:0.05,y:0});
}
function vF(){
  Body.applyForce(ball1,{x:0,y:0},{x:0,y:-2});
}