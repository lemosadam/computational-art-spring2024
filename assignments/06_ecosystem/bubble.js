class Bubble {

constructor(x, y, size) {
    this.pos = createVector(x, y);

    this.size = size;
    this.speed = random(-1, -3);

    this.hue = color(0, 0, 100);
}

update() { 
    
this.pos.x += map(noise(frameCount), 0, 1, -2, 2);
this.pos.y += this.speed;
}

draw(){
noStroke();
fill(this.hue);

ellipse(this.pos.x, this.pos.y, this.size);
}
}// JavaScript source code
