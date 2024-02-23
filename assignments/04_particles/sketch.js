
let stars = [];

function setup() {
  createCanvas(600, 400);
  colorMode(HSB);
  noStroke();
  background(0, 0, 100);
  rectMode(CENTER);

  //create stars
  for (let i = 0; i < 100; i++) {
	let x = random(width);
	let y = random(height);
	let s = random(1, 3);
	stars.push(new Star(x, y, s));
  }
  
}

function draw() {
  background(237, 83, 27)
  
  fill(230, 83, 27, 5);
  rect(width/2, height/2, width, height/2);
  fill(230, 63, 27, 5);
  rect(width/2, height-25, width, height);
  fill(230, 43, 27, 5);
  rect(width/2, height+50, width, height);
  fill(230, 23, 27, 5);
  rect(width/2, height+150, width, height);

  for (let i = 0; i < stars.length; i++) {
	stars[i].show()
  }

 }