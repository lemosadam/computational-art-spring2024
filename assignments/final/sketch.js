let coresArray = [];
let coreSprite;
let playerUnits = [];
let enemyUnits = [];
let bluePawnSS;
let bluePawnWalk;
let round;
let startofRound;
let currentState;
let chosenLane;
let UIDisplays = [];
let spawnButton;
let spawnKnightButton;
let KnightAttackIMG;
let endPlayerTurn;
let chooseLaneA;
let chooseLaneB;
let gold;
let UIText;
let textToDisplay = "String"
let topBanner;
let UIHeaders = [];
let startOfPlayerTurn;
let goldRibbon;
let goldSpawn;
let goldBags = [];
let musicLoop;
let loopInterval = 1;
let scale = "pentatonic major"
let root = 76;
let musicSynth;
let intervalInSeconds
let particles = [];



function preload(){
  pawnWalkGIF = loadImage("./images/pawnWalkGIF.gif");
  redWalkGIF = loadImage("./images/redWalkGIF.gif");
  pawnAttackGIF = loadImage("./images/pawnAttackGIF.gif");
  redAttackGIF = loadImage("./images/RedAttackGif.gif");
  blueCastle = loadImage("./images/Castle_Blue.png");
  redCastle = loadImage("./images/Castle_Red.png");
  grassTile = loadImage("./images/GrassTile.png");
  barrierIMG = loadImage("./images/RockImg.png");
  bannerIMG = loadImage("./images/banner.png");
  goldSackIMG = loadImage("./images/G_Idle.png");
  yellowBanner = loadImage("./images/yellowRibbon.png");
  pixelFont = loadFont("./images/TwistyPixel.ttf");
  coinSample = loadSound("./samples/Coin 1.wav");
  hit2Sample = loadSound("./samples/Hit 2.wav");
  deathSample = loadSound("./samples/Enemy 1.wav");
  selectSample = loadSound("./samples/Menu_Select.wav");
  select2Sample = loadSound("./samples/Menu_Select2.wav");
  powerUpSample = loadSound("./samples/Power Up 1.wav");
  knightWalkIMG = loadImage("./images/KnightWalk.gif");
  KnightAttackIMG = loadImage("./images/KnightAttack.gif");
  redKnightWalkIMG = loadImage("./images/RedKnightWalk.gif");
  redKnightAttackIMG = loadImage("./images/RedKnightAttack.gif");
  tree1 = loadImage("./images/tree1.png");
  tree2 = loadImage("./images/tree2.png");
  tree3 = loadImage("./images/tree3.png");
}

function setup() {
  chosenLane = createVector(0,0)
  enemySpawn1 = createVector(320, 160)
  enemySpawn2 = createVector(320, 480)
  textFont(pixelFont)
  
  new Canvas(1280, 640);
  gold = 15;
  
  colorMode(HSB)
  push();
  background(0, 0, 100)
  
  for (let x = 0; x < width; x += grassTile.width) { 
    for (let y = 0; y < height; y += grassTile.height) { 
        image(grassTile, x, y); 
    }
}

tree1Sprite = new Sprite();
tree1Sprite.collider = 'n';
tree1Sprite.img = tree2;
tree1Sprite.x = width - 100
tree1Sprite.y = 100

tree2Sprite = new Sprite();
tree2Sprite.collider = 'n';
tree2Sprite.img = tree2;
tree2Sprite.x = width - 150
tree2Sprite.y = 200

tree3Sprite = new Sprite();
tree3Sprite.collider = 'n';
tree3Sprite.img = tree3;
tree3Sprite.x = width - 250
tree3Sprite.y = height - 100

tree3Sprite = new Sprite();
tree3Sprite.collider = 'n';
tree3Sprite.img = tree1;
tree3Sprite.x = 50
tree3Sprite.y = height - 100

decorativeBoulder = new Sprite();
decorativeBoulder.collider = 'n';
decorativeBoulder.img = barrierIMG;
decorativeBoulder.x = 120
decorativeBoulder.y = height - 100;

text(gold, 50, 100);
pop();
  

  coresArray.push(new Core(width - 50, height/2, "blue", 500, "playerCore"));
  coresArray.push(new Core(50, height/2, "red", 500, "enemyCore"));
  UIDisplays.push(new HPDisplay(width - 50, height/2, coresArray[0]));
  UIDisplays.push(new HPDisplay(50, height/2, coresArray[1]));

  UIHeaders.push(new UIHeader (width/2, 50))

  for(let x = 320; x < 1000; x+= 64){
    push(new Barrier(x, height/2))
  }

  state_1 = new state1();
  state_2 = new state2();
  state_3 = new state3();
  state_4 = new state4();

  currentState = state_1;

  goldRibbon = new Sprite();
  goldRibbon.x = 100;
  goldRibbon.y = 50;
  goldRibbon.img = yellowBanner;
  
  goldRibbon.textSize = 50;

  //didn't copy-paste but heavily leaned on p5 reference for music
  polySynth = new p5.PolySynth();
  musicSynth = new p5.PolySynth();
  let intervalInSeconds = .2;
  bassLoop = new p5.SoundLoop(onBassLoop, intervalInSeconds)
  melodyLoop = new p5.SoundLoop(onMelodyLoop, intervalInSeconds)
  userStartAudio();
  bassLoop.start();
  melodyLoop.start();
}

function spawnSoldier() {
  playerUnits.push(new Soldier(chosenLane, 64, 64, "blue", 30, coresArray[1], enemyUnits))
}

function spawnEnemySoldier(){
  enemyUnits.push(new Soldier(100, height/2, 64, 64, "red", 30, coresArray[0], playerUnits))
}
function draw() {
goldRibbon.text = gold + "GP";
 currentState.draw();
 
 for (let display of UIDisplays){
  display.draw();
}

for (let header of UIHeaders){
  header.draw();
}

for (let bags of goldBags){
  bags.draw();
}

for (let cores of coresArray){
  cores.update();
}

   push();
        background(0, 0, 100)

        for (let x = 0; x < width; x += grassTile.width) { 
          for (let y = 0; y < height; y += grassTile.height) { 
              image(grassTile, x, y); 
          }
      }
      
      pop();
if (keyIsPressed === true){
  if (keyCode === BACKSPACE)
  {
      
  }
}
}

// function mousePressed(){
//   coresArray[1].hp--
// }
function onBassLoop(timeFromNow){
  let note = floor(random(root, scales[scale].length))
  musicSynth.play(note, 1, timeFromNow, 1)
}

function onMelodyLoop(timeFromNow){
  let note = midiToFreq(floor(random(root, root+scales[scale].length)))
  musicSynth.play(note, 10, timeFromNow, .2)
}


