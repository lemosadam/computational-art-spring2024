let dots = [];
let numDots = 10;


let gravitationalConstant = 0.00001;
let downwardGravity;
let wind;
let spawntimer = 0;
let timerticks = .005;


function setup() {
  createCanvas(600, 400);
  colorMode(HSB);

  downwardGravity = createVector(0, 0.38);
  wind = createVector(-0.1, 0);
  bounce = createVector(random(-50, 50), random(-100, -50));
  
  // Create all the dots
  for (let i = 0; i < numDots; i++) {
    let x = map(i, 0, numDots, 100, width-100);
    let y = 100;
    dots.push(new Dot(x, y, i+1));
  }

  background(0, 0, 100);
}

function draw() {
  background(0, 0, 100);//, 0.01);

  // Position the first dot where ever the mouse is. This allows will force the
  // springs to apply all sorts of forces to the dots.
 

  // Update and draw all the dots



  // Draw "water". Inside the dot, we apply "drag" force if the dot is overlapping
  noStroke();
  fill(50, 75, 60, .5);
  rect(0, height/2, width, height/2);

    for (let dot of dots) {
    dot.update();
    dot.show();
  }

  
 spawntimer += timerticks + deltaTime;

 if (spawntimer > 1000) 
 {
	spawntimer = 0;
    fill(random(1,360), random(1,360), random(1,360))
	dots.push(new Dot(random(0, width), 0, dots.length+1));
  }

}