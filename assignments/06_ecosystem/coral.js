class Coral{

constructor(){
    this.coralX = random(0, width)
    this.branchRand = random();
    this.coralSize = random(10, 90);
    this.coralColor = random(1, 360);
}


branch(l) {
  count++;

  stroke(this.coralColor, 50, 80);
  strokeWeight(10 - count * 0.1);
  line(0,0,0,-l);

  translate(0, -l);

  l = l * 0.6;

  if (l > 5) {
    push();
    rotate(radians(-45 + map(noise(frameCount * 0.01), 0, 1, -2, 2)));
    this.branch(l);
    pop();

    push();
    rotate(radians(45 + map(noise(frameCount + 100) * 0.01, 0, 1, -2, 2)));
    this.branch(l);
    pop();
  } 
}

show() {
  push();
  resetMatrix();
  count = 0;
  translate(this.coralX, height);
  this.branch(this.coralSize);
  pop();
}
}