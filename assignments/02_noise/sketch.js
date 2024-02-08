let dots = [];
let numDots = 700;

// p5 calls this function right away when the webpage is loaded
function setup() {
  
  frameRate(120);
  createCanvas(250, 250);
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
  
 //this.hue = this.id % mouseX;

 fill(this.hue, 50, 0);

 for (let i = 0; i < dots.length; i++) {
  
  this.hue = 360;
  
  let distance = dist(this.position.x, this.position.y, mouseX, mouseY);

  distance = distance * noise(.1 * frameCount);

   if (distance < 10)
   {
    
  
  this.hue = map(this.hue, 1, 360, 0, 360);
  this.hue = this.hue * noise(.1 *frameCount);
  fill(this.hue, 50, 100);
  }
}

   
 if (this.hue > 360)
 {
     this.hue = random(1, 360)
 }
   
    
    ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
  }
}