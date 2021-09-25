class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
  }

  show() {
    if (keyIsDown(DOWN_ARROW) && this.angle < 0.35) {
      this.angle += 0.02;
    }

    if (keyIsDown(UP_ARROW) && this.angle > -1.45) {
      this.angle -= 0.02;
    }

    fill("#676e6a");
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    rect(-10, -20, this.width, this.height);
    pop();
    arc(this.x - 30, this.y + 90, 200, 300, PI, TWO_PI);
    noFill();
  }
}