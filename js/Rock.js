class Rock {
  constructor(x, y) {
   var options = {
    restitution: 0.8,
    isStatic: true
   };

   this.r = 30;
   this.body = Bodies.circle(x, y, this.r, options);
   this.image = loadImage("./assets/rock.png");
   World.add(world, this.body);
  }

  shoot() {
    var velocity = p5.Vector.fromAngle(cannon.angle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
  }
  
  show() {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    fill("white");
    pop();
  }
}

