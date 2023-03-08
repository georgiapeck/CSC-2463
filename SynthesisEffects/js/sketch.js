let initTone = true;
let pitch = 10 
let mario;


let osc = new Tone.AMOscillator(pitch, 'triangle', 'sawtooth').start();
let gain = new Tone.Gain().toDestination();
let pan = new Tone.Panner().connect(gain);
let ampEnv = new Tone.AmplitudeEnvelope({
  attack: 0.1,
  decay: 0.1,
  sustain: 0.1,
  release: 1
}).connect(pan);
osc.connect(ampEnv);

let noise = new Tone.Noise('pink').start();
let noiseEnv = new Tone.AmplitudeEnvelope({
  attack: 0.1,
  decay: 0.1,
  sustain: 0.1,
  release: 1
}).connect(gain); 

function setup() {
  createCanvas(400, 400);
  mario = loadImage('assets/mario.png');
}

function draw() {
  background(220);
  if (mouseIsPressed) {
  image(mario, 0, 0);
  }
  text('press spacebar to initialize audio!', 100, 100);
  text('click to get a coin!', 100, 200);
}

function keyPressed() {
  if (keyCode === 32 && initTone === true) {
    console.log('spacebar pressed');
    Tone.start();
    initTone = false;
  }
}

function mousePressed() {
  console.log('pressed');
  ampEnv.triggerAttackRelease('8n');
  osc.frequency.setValueAtTime(pitch+800, '+0.5');
  ampEnv.triggerAttackRelease('8n', '+0.5');
  osc.frequency.setValueAtTime(pitch+100);



  if (mouseY > 200) {
    noiseEnv.triggerAttackRelease(1);
  }

}