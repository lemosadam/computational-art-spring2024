
let prevTimeStamp;
let playerObj = []
let gravity;
let marioIMG;
let loopStarted = false;
let synth1; 
let synth2; 
let note;
let currentPart = [];
let currentPartIndex = 0;
let part1 = [76, 12, 76, 12, 20, 12, 76, 12, 20, 12, 72, 12, 76, 12, 20, 12, 79, 12, 20, 36, 67, 12, 20, 36];
//midi part 2
let part2 = [72, 12, 20, 24, 67, 12, 20, 24, 64, 12, 20, 24, 69, 12, 20, 12, 71, 12, 20, 12, 70, 12, 69, 12, 20, 12, 67, 16, 76, 16, 79, 16, 81, 12, 20, 12, 77, 12, 79, 12, 20, 12, 76, 12, 20, 12, 72, 12, 74, 12, 71, 12, 20, 24 ]
let part3 = [72, 12, 20, 24, 67, 12, 20, 24, 64, 12, 20, 24, 69, 12, 20, 12, 71, 12, 20, 12, 70, 12, 69, 12, 20, 12, 67, 16, 76, 16, 79, 16, 81, 12, 20, 12, 77, 12, 79, 12, 20, 12, 76, 12, 20, 12, 72, 12, 74, 12, 71, 12, 20, 24 ]
//midi part 3
let part4 = [48, 12, 20, 12, 79, 12, 78, 12, 77, 12, 75, 12, 60, 12, 76, 12, 53, 12, 68, 12, 69, 12, 72, 12, 60, 12, 69, 12, 72, 12, 74, 12, 48, 12, 20, 12, 79, 12, 78, 12, 77, 12, 75, 12, 55, 12, 76, 12, 20, 12, 84, 12, 20, 12, 84, 12, 84, 12 ]
let part5 = [48, 12, 20, 12, 79, 12, 78, 12, 77, 12, 75, 12, 60, 12, 76, 12, 53, 12, 68, 12, 69, 12, 72, 12, 60, 12, 69, 12, 72, 12, 74, 12, 48, 12, 20, 12, 79, 12, 78, 12, 77, 12, 75, 12, 55, 12, 76, 12, 20, 12, 84, 12, 20, 12, 84, 12, 84, 12 ]
//midi part 4
let harmonyPart4 = [55, 12, 20, 12, 48, 12, 20, 12, 79, 12, 78, 12, 77, 12, 75, 12, 60, 12, 76, 12, 53, 12, 68, 12, 69, 12, 72, 12, 60, 12, 69, 12, 72, 12, 74, 12, 48, 12, 20, 12, 75, 24, 20, 12, 74, 24, 20, 12, 72, 24, 20, 12, 55, 12, 55, 12, 20, 12, 48, 12]
let harmonyPart5 = [55, 12, 20, 12, 48, 12, 20, 12, 79, 12, 78, 12, 77, 12, 75, 12, 60, 12, 76, 12, 53, 12, 68, 12, 69, 12, 72, 12, 60, 12, 69, 12, 72, 12, 74, 12, 48, 12, 20, 12, 75, 24, 20, 12, 74, 24, 20, 12, 72, 24, 20, 12, 55, 12, 55, 12, 20, 12, 48, 12]
//midi part 5
let part6 = [72, 12, 72, 12, 20, 12, 72, 12, 20, 12, 72, 12, 74, 12, 20, 12, 76, 12, 72, 12, 20, 12, 69, 12, 67, 12, 20, 12, 43, 12, 20, 12, 72, 12, 72, 12, 20, 12, 72, 12, 20, 12, 72, 12, 74, 12, 76, 12, 55, 12, 20, 24, 48, 12, 20, 24, 43, 12, 20, 12, 72, 12, 72, 12, 20, 12, 72, 12, 20, 12, 72, 12, 74, 12, 20, 12, 76, 12, 72, 12, 20, 12, 69, 12, 67, 12, 20, 12, 43, 12, 20, 12, 76, 12, 76, 12, 20, 12, 76, 12, 20, 12, 72, 12, 76, 12, 20, 12, 79, 12, 20, 36, 67, 12, 20, 36]
// midi part 2 plays twice again
let part7 = [72, 12, 20, 24, 67, 12, 20, 24, 64, 12, 20, 24, 69, 12, 20, 12, 71, 12, 20, 12, 70, 12, 69, 12, 20, 12, 67, 16, 76, 16, 79, 16, 81, 12, 20, 12, 77, 12, 79, 12, 20, 12, 76, 12, 20, 12, 72, 12, 74, 12, 71, 12, 20, 24 ]
let part8 = [72, 12, 20, 24, 67, 12, 20, 24, 64, 12, 20, 24, 69, 12, 20, 12, 71, 12, 20, 12, 70, 12, 69, 12, 20, 12, 67, 16, 76, 16, 79, 16, 81, 12, 20, 12, 77, 12, 79, 12, 20, 12, 76, 12, 20, 12, 72, 12, 74, 12, 71, 12, 20, 24 ]
// midi part 6 plays twice
let part9 = [76, 12, 72, 12, 20, 12, 67, 12, 55, 12, 20, 12, 68, 12, 20, 12, 69, 12, 77, 12, 53, 12, 77, 12, 69, 12, 60, 12, 53, 12, 20, 12, 71, 16, 81, 16, 81, 16, 81, 16, 79, 16, 77, 16, 76, 12, 72, 12, 55, 12, 69, 12, 67, 12, 60, 12, 55, 12, 20, 12, 76, 12, 72, 12, 20, 12, 67, 12, 55, 12, 20, 12, 68, 12, 20, 12, 69, 12, 77, 12, 53, 12, 77, 12, 69, 12, 60, 12, 53, 12, 20, 12, 71, 12, 77, 12, 20, 12, 77, 12, 77, 16, 76, 16, 74, 16, 72, 12, 64, 12, 55, 12, 64, 12, 60, 12, 20, 36]
let part10 = [76, 12, 72, 12, 20, 12, 67, 12, 55, 12, 20, 12, 68, 12, 20, 12, 69, 12, 77, 12, 53, 12, 77, 12, 69, 12, 60, 12, 53, 12, 20, 12, 71, 16, 81, 16, 81, 16, 81, 16, 79, 16, 77, 16, 76, 12, 72, 12, 55, 12, 69, 12, 67, 12, 60, 12, 55, 12, 20, 12, 76, 12, 72, 12, 20, 12, 67, 12, 55, 12, 20, 12, 68, 12, 20, 12, 69, 12, 77, 12, 53, 12, 77, 12, 69, 12, 60, 12, 53, 12, 20, 12, 71, 12, 77, 12, 20, 12, 77, 12, 77, 16, 76, 16, 74, 16, 72, 12, 64, 12, 55, 12, 64, 12, 60, 12, 20, 36]
//midi part 5 plays again
let part11 = [72, 12, 72, 12, 20, 12, 72, 12, 20, 12, 72, 12, 74, 12, 20, 12, 76, 12, 72, 12, 20, 12, 69, 12, 67, 12, 20, 12, 43, 12, 20, 12, 72, 12, 72, 12, 20, 12, 72, 12, 20, 12, 72, 12, 74, 12, 76, 12, 55, 12, 20, 24, 48, 12, 20, 24, 43, 12, 20, 12, 72, 12, 72, 12, 20, 12, 72, 12, 20, 12, 72, 12, 74, 12, 20, 12, 76, 12, 72, 12, 20, 12, 69, 12, 67, 12, 20, 12, 43, 12, 20, 12, 76, 12, 76, 12, 20, 12, 76, 12, 20, 12, 72, 12, 76, 12, 20, 12, 79, 12, 20, 36, 67, 12, 20, 36]
//part 6 plays once
let part12 = [76, 12, 72, 12, 20, 12, 67, 12, 55, 12, 20, 12, 68, 12, 20, 12, 69, 12, 77, 12, 53, 12, 77, 12, 69, 12, 60, 12, 53, 12, 20, 12, 71, 16, 81, 16, 81, 16, 81, 16, 79, 16, 77, 16, 76, 12, 72, 12, 55, 12, 69, 12, 67, 12, 60, 12, 55, 12, 20, 12, 76, 12, 72, 12, 20, 12, 67, 12, 55, 12, 20, 12, 68, 12, 20, 12, 69, 12, 77, 12, 53, 12, 77, 12, 69, 12, 60, 12, 53, 12, 20, 12, 71, 12, 77, 12, 20, 12, 77, 12, 77, 16, 76, 16, 74, 16, 72, 12, 64, 12, 55, 12, 64, 12, 60, 12, 20, 36]
//midi part 7
let part13 = [72, 12, 20, 24, 67, 12, 20, 24, 64, 24, 69, 16, 71, 16, 69, 16, 68, 24, 70, 24, 68, 24, 67, 12, 65, 12, 67, 48 ]
let currentNoteIndex = 0;
let noteDuration = 400; 
let parts = [part1, part2, part3, part4, part5, part6, part7, part8, part9, part10, part11, part12]
let harmonyParts = [harmonyPart4, harmonyPart5]

function preload() {
  jumpSample = loadSound("./samples/jump.wav");
  marioIMG = loadImage("./images/Mario-Sprite.png");
  jumpIMG = loadImage("./images/mario-jump.png");
  

}

function setup() {
  createCanvas(800, 400)
  colorMode(HSB)
  background(200, 60, 100)
  
  fill(40, 80, 100)
  rect(0, height/2, width, height/2)
  gravity = createVector(0, 3);
  playerObj.push(new player(width/2, 175, 50));
  
  currentPart = part1;

  userStartAudio();

  synth1 = new p5.PolySynth();
  synth2 = new p5.PolySynth();

  loop = new p5.SoundLoop(soundLoop);

  loop.start(); 
  playMarioTheme();
}

function draw() {
  background(200, 60, 100)
  fill(40, 80, 100)
  rect(0, height/2, width, height/2)
 
  // console.log(deltaTime);

  prevTimeStamp = millis();
  

  for (let player of playerObj){
    player.update();
    player.show();
    
  }
}

function soundLoop(timeFromNow) {

    if (keyIsDown(32)) {
      jumpSample.play(timeFromNow);
    }

}

function playMarioTheme() {

  // failed attempt at 2 synth harmonizing where required 
  // if (currentPartIndex === 4){
  //   let note1 = currentPart[currentNoteIndex];
  //   let duration1 = currentPart[currentNoteIndex + 1] * noteDuration / 12; // Convert MIDI duration to milliseconds
  //   let harmony = harmonyParts[currentPartIndex - 4]; // Access harmony part based on currentPartIndex
  //   let note2 = harmony[currentNoteIndex];
  //   let duration2 = harmony[currentNoteIndex + 1] * noteDuration / 12;
  //   // Play the note
  //   synth1.play(midiToFreq(note1), 0.5, 0, duration1 / 1000);
  //   synth2.play(midiToFreq(note2), .5, 0, duration2 / 1000 );

  //   // Move to the next note
  //   currentNoteIndex += 2;

  //   setTimeout(playMarioTheme, duration1);
  // }
  // if (currentPartIndex === 5){
  //   let note1 = currentPart[currentNoteIndex];
  //   let duration1 = currentPart[currentNoteIndex + 1] * noteDuration / 12; // Convert MIDI duration to milliseconds
  //   let harmony = harmonyParts[currentPartIndex - 4]; // Access harmony part based on currentPartIndex
  //   let note2 = harmony[currentNoteIndex];
  //   let duration2 = harmony[currentNoteIndex + 1] * noteDuration / 12;
  //   // Play the note
  //   synth1.play(midiToFreq(note1), 0.5, 0, duration1 / 1000);
  //   synth2.play(midiToFreq(note2), .5, 0, duration2 / 1000 );

  //   // Move to the next note
  //   currentNoteIndex += 2;

  //   setTimeout(playMarioTheme, duration1);
  // }
  if (currentNoteIndex < currentPart.length) {
    let note = currentPart[currentNoteIndex];
    let duration = currentPart[currentNoteIndex + 1] * noteDuration / 12; // Convert MIDI duration to milliseconds

    // Play the note
    synth1.play(midiToFreq(note), 0.5, 0, duration / 1000);

    // Move to the next note
    currentNoteIndex += 2;

    setTimeout(playMarioTheme, duration *.4);
  } else {
    currentPartIndex++;
    if (currentPartIndex < parts.length) {
      currentPart = parts[currentPartIndex];
      currentNoteIndex = 0; 
      playMarioTheme(); 
    } else {
   
      currentPartIndex = 0;
      playMarioTheme();
    }
  }
}


