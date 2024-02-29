let numCellsWidth = 40;
let numCellsHeight = 40;
let cellWidth;
let cellHeight;
let hue;
let x;
let y;
let t;
let cX;
let cY;
let g;
let slider;


function setup() {
  createCanvas(400, 400);
  colorMode(HSB);


  cellWidth = width / numCellsWidth;
  cellHeight = height / numCellsHeight;

  
  //noStroke();
  drawGrid();

  slider = createSlider(0, 360);
  slider.position (10, 10);
  slider.size(80);
}

function draw() {
  g = slider.value();
  drawGrid()
  //ellipse(mouseX, mouseY, 20, 20);
   t = frameCount;
   cX = width/2
   cY = height * sin(t*0.005);
  if (cY < 0){
      cY = cY *-1;
  }
  
  //circle(cX, cY, 20);
  
}

//function mouseClicked(){

// 
 //drawGrid();
 //ellipse(mouseX, mouseY, 20, 20);
//}

function drawGrid() {
  for (let xIndex = 0; xIndex < numCellsWidth; xIndex++) {
    for (let yIndex = 0; yIndex < numCellsHeight; yIndex++) {
      x = cellWidth * xIndex;
      y = cellHeight * yIndex;

      push();

      translate(x, y);
      hue = map(noise(x*0.01, y*0.01), 0, 1, 0, 360);
      noStroke();
      fill(hue, cY*100, 100);
      square(0, 0, cellWidth);

        let colorOffset = 40;

      hue = (hue + 180 - colorOffset) % g;
      //hue = hue * (cY*100);
      hue = map(hue, 1, 360, 0, cY);

      stroke(1);
      fill(hue, 50, 100);
     
      ellipse(cellWidth/2, cellHeight/2, cellWidth, cellHeight);
      

      pop();
    }
  }
}