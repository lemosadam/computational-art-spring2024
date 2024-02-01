let dots = [];
let numDots = 4800;

// p5 calls this function right away when the webpage is loaded
function setup() {
  createCanvas(800, 600);
  colorMode(HSB);
  noStroke();
  let x = -5;
  let y = 5;
 
  for (let i = 0; i < numDots; i++) {
    
    x = x + 10;
    
    if (x >= width)
    {

      x = 5
      y = y + 10;
    }
    dots[i] = new Dot(x, y, 10, i);
    
  }
}

// The draw function is called over and over again really fast by p5
function draw() {
  background(0, 0, 100, 0.08);

  // Loop through the array of dots that we created on inside the start function, and 
  // call their update function.
  for (let i = 0; i < dots.length; i++) {
    dots[i].update();
  }
}



// Below, we define the Dot class, which defined the objects we instantiate inside the
// setup function above.
class Dot {
  constructor(x, y, diameter, id) {

    this.position = createVector(x, y);

    this.velocity = createVector(0, 0);

    this.id = id;

    this.diameter = 5;

    this.hue = 255;
    

  
  }

  // This is the function that is called in the draw function above.
  update() {
  
 this.hue = this.id % mouseX;
 if (this.hue > 360)
 {
     this.hue = 0
 }
   
    fill(this.hue, 50, 100);
    ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
  }
}