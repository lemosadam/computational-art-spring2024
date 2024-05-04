let coresArray = [];
let coreSprite;
let playerUnits = [];

function setup() {
  createCanvas(1000, 800)
  colorMode(HSB)
  background(0, 0, 100)
  

  
  coresArray.push(new Core(width - 100, height/2, "blue", 200, "playerCore"));
  coresArray.push(new Core(100, height/2, "red", 200, "enemyCore"));

  playerUnits.push(new Soldier(width/2, height/2, 10, 10, "blue", "playerSoldier1"))

  
  // coreSprite = new Sprite();
  // coreSprite.diameter = 50;
  // coreSprite.x = width/2;
  
}

function draw() {
  for (let cores of coresArray){
    cores.show();
  }

  for (let playerUnit of playerUnits){
    playerUnit.update();
  }
}
