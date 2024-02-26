
let stars = [];
let fireworks = [];
let spawntimer = 0;
let spawnrate = .05;
let numFireworks = 5;
let gravity;
let shimmerfireworks = [];
let shimmertimer = 0;

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
	shimmertimer += deltaTime * 0.001;
  
  if ( spawntimer > 2)
  {
	  let x = random(1, width);
	 let y = height;
	 
	  fireworks.push(new firework(x, y));

	  spawntimer = 0;
  }

   if ( shimmertimer > 5)
  {
	  
	  console.log("shimmer")
	  let x = random(width);
	 let y = height;
	 
	  shimmerfireworks.push(new shimmerfirework(x, y));
	  shimmertimer = 0;
	  
  }

  for (let i = 0; i < stars.length; i++) {
	stars[i].show()
  }

    for (let i = 0; i < fireworks.length; i++) {
	fireworks[i].update();
	if(this.lifetime <= 0)
	{
		fireworks.splice(i, 1)
	}
	}

    for (let i = 0; i < shimmerfireworks.length; i++) {
	shimmerfireworks[i].update();
	if(this.lifetime <= 0)
	{
		shimmerfireworks = [];
	}
	}


 }