const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var rocks = [];
var rock;
var backgroundImg;
var cannon;
var ground;

function preload() {
  backgroundImg = loadImage("assets/Background_image.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angle = -PI / 4;

  engine = Engine.create();
  world = engine.world;

  for(var rock in rocks) {
   rock = new Rock(width/2 - 440, height/2 + 100);
  }

  ground = new Ground(width/2, height, width, 30);
  cannon = new Cannon(180, 460, 150, 50, angle);
}


function draw() {
  background(51);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  for (var i = 0; i < rocks.length; i++) {
    showRocks(rocks[i]);
  }

  cannon.show();
  ground.show();
}

function showRocks(rock) {
  rock.show();
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW) {
    rocks[i].shoot();
  }
}

