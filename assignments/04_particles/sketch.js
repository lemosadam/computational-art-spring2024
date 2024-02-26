
let stars = [];
let fireworks = [];
let spawntimer = 0;
let spawnrate = .05;
let numFireworks = 5;
let gravity;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB);
  noStroke();
  background(0, 0, 100);
  rectMode(CENTER);

  gravity = createVector(0, 0.1);
  //create stars
  for (let i = 0; i < 100; i++) {
	let x = random(width);
	let y = random(height);
	let s = random(1, 3);
	stars.push(new Star(x, y, s));
  }

  //create fireworks
  for (let i = 0; i < 10; i++) {
	  let x = random(width);
	  let y = height;
	  fireworks.push(new firework(x, y));
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
  
  spawntimer += deltaTime * 0.001;
  print(spawntimer);
  if ( spawntimer > 2)
  {
	  
	  let x = random(width);
	 let y = height;
	 rect(100, width/2, height /2);
	  fireworks.push(new firework(x, y));

	  spawntimer = 0;

	  
  }

  for (let i = 0; i < stars.length; i++) {
	stars[i].show()
  }

    for (let i = 0; i < fireworks.length; i++) {
	fireworks[i].update();
  }


 }