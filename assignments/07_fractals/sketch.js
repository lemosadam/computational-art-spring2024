let count = 0;

function setup() {
  createCanvas(720, 400);
  colorMode(HSB)
}

function draw() {
  
  
  background(0, 0, 0, .06);

  stroke(0, 0, 100)
  fill(0,0,100)
  
  textSize(90)
  textAlign(CENTER)
  text("BE NOT AFRAID", width/2, 100)

  for (i = 0; i < 20; i++){
    textFill = random(0,360)
    fontSize = random(1,30)
    x = random(0, width)
    y = random(0, height)
    writeText(textFill, fontSize, x, y)
  }
  
  push();
  
  translate(width/2, height/2);
  rotate(frameCount / -100.0);
  drawStars(0, 0, height/2, height/4, 5)
  pop();
  
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function drawStars(x, y, radius1, radius2, npoints) {
  count++;

  let h = map(count + frameCount * 0.1, 0, 24, 0, 100) % 100;
  let f = map(count + frameCount * 0.1, 0, 24, 0, 360) % 360;
  fill(0,0,0)

  stroke(0, 0, h);

  if (count % 2 === 0) {
 

    star(x, y, radius1, radius2, npoints); 

    let angle = TWO_PI / npoints;
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius1;
      let sy = y + sin(a) * radius1;

      fill(f, 80, 100)
      ellipse(sx, sy, 10);
      ellipse(sx, sy, 5) 
    }
  } 

  if (npoints < 100) {
    drawStars(x, y, radius1/1.1, radius2/1.1, npoints + 1);
  } else {
    // console.log(count);
  }
}




function writeText(textFill, fontSize, x, y){
  stroke(0, 0, 100)
  fill(textFill,80,100)
  
  textSize(fontSize)
  textAlign(CENTER)
  text("BE NOT AFRAID", x, y)
}