let scale = "natural major"
let prevTimeStamp;

function setup() {
  createCanvas(800, 400)
  colorMode(HSB)
  background(0, 0, 100)
}

function draw() {
  // put drawing code here
  let deltaTime = millis() - prevTimeStamp;
  // console.log(deltaTime);

  prevTimeStamp = millis();
}

function soundLoop(timeFromNow) {
  note = floor(random(0, scales[scale].length));

  
    synth.play(midiToFreq(48+ scales[scale][note]), 1, timeFromNow, random(0.1, 0.4));

}

function mousePressed() {
  userStartAudio();

  synth = new p5.PolySynth();

  loop = new p5.SoundLoop(soundLoop);

  loop.start(); 
}
