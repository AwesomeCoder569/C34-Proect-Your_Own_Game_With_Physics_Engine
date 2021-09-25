class Block {
    constructor(x, y, width, height) {
     var options = {
      isStatic: true
     };
  
     this.width = width;
     this.height = height;
     this.body = Bodies.rectangle(x, y, this.width, this.height, options);
     this.image = loadImage("./assets/Block.png");
     World.add(world, this.body);
    }
    
    show() {
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, );
      pop();
    }
}