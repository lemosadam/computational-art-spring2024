let coralGroup = [];
let fishies = [];
let count = 0;
let branchRand;
let numFishies;
let target;
let bubbles = [];
let spawntimer = 0;



function setup() {
  
  target = createVector(width/4, height/2);
  numFishies = 100;
  createCanvas(600, 600);
  colorMode(HSB);
  
  // noFill();
  // drawCircle(width/2, height/2, 400);
  // console.log(count);

  background(200, 99, 100);

  branchRand = random();

  for (let i = 1; i < 20; i++)
  {
    coralGroup.push(new Coral());
  }

  for (let i = 1; i < numFishies; i++)
  {
    x = map(i, 1, numFishies, 0, width);
    y = height/2;
    let fishHue = random(1, 360)
    fishies.push(new Fish(x, y, target, fishies, fishHue));
    
  }

  for (fish of fishies)
  {
    console.log(fish.pos)
  }

  for (let i = 0; i < 10; i++) {
	  let x = random(width);
	  let y = height;
    let size = random(1, 10)
	  bubbles.push(new Bubble(x, y, size));
  }

  
  ellipse(width/2,height/2, 100)

  noStroke()
  fill(40, 30, 90)
  rect(0, height-100, width, 100)
}

function draw() {
  // put drawing code here


  background(200, 99, 100);
  noStroke()
  fill(40, 30, 90)
  rect(0, height-100, width, 100)
  target.x = mouseX; 
  target.y = mouseY;
  for (let coral of coralGroup)(
    coral.show()
  )

  console.log(fishies.length);
  for (let fish of fishies){
    fish.update();
    fish.show();
    
  }

  for (let bubble of bubbles){
    bubble.update();
    bubble.show();
  }

  spawntimer += deltaTime * 0.001;
  if ( spawntimer > 2)
  {
	  let x = random(1, width);
	 let y = height;
	 let size = random(1, 10)
	  bubbles.push(new Bubble(x, y, size));

	  spawntimer = 0;
  }
}
