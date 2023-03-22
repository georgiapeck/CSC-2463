let sparkle = new Tone.Player('sounds/sparkle.mp3')
let scribble = new Tone.Player('sounds/scribble.mp3')
let hooray = new Tone.Player('sounds/hooray.mp3')
let color = "white";
let previousX, previousY;

function setup() {
  createCanvas(700, 350);
  sparkle.toDestination();
  background("white");

  nxButton = Nexus.Add.Button('#nxUI', {
    'size': [1500, 100]
  });
  nxButton.on('change', () => {
    Tone.start();
    pattern.start(0);
    Tone.Transport.start();
  })
}

function draw() {

  text("Press button for background music ->",500,20)

  strokeWeight(5);
  stroke(color);

  if (mouseIsPressed) {
    line(previousX, previousY, mouseX, mouseY);
  }

  previousX = mouseX;
  previousY = mouseY;
strokeWeight(1);
  stroke("white");
  fill("red");
  rect(0, 0, 20, 20);

  fill("orange");
  rect(0, 20, 20, 20);

  fill("yellow");
  rect(0, 40, 20, 20);
  fill("green");
  rect(0, 60, 20, 20);

  fill("cyan");
  rect(0, 80, 20, 20);
  fill("blue");
  rect(0, 100, 20, 20);

  fill("magenta");
  rect(0, 120, 20, 20);
  fill("brown");
  rect(0, 140, 20, 20);

  fill("white");
  rect(0, 160, 20, 20);
  fill("black");
  rect(0, 180, 20, 20);
}

function mousePressed() {
if (MouseX >=20 && mouseX <=1700) {
  if (MouseY >=0 && mouseY <=800) {
    sparkle.start();
  }
}


}
function mousePressed() {
  if (mouseX >= 0 && mouseX <= 20) {
    if (mouseY >= 0 && mouseY <= 20) {
      color = "red";
      sparkle.start();
    } else if (mouseY >= 20 && mouseY <= 40) {
      color = "orange";
      sparkle.start();
    } else if (mouseY >= 40 && mouseY <= 60) {
      color = "yellow";
      sparkle.start();
    } else if (mouseY >= 60 && mouseY <= 80) {
      color = "green";
      sparkle.start();
    } else if (mouseY >= 80 && mouseY <= 100) {
      color = "cyan";
      sparkle.start();
    } else if (mouseY >= 100 && mouseY <= 120) {
      color = "blue";
      sparkle.start();
    } else if (mouseY >= 120 && mouseY <= 140) {
      color = "magenta";
      sparkle.start();
    } else if (mouseY >= 140 && mouseY <= 160) {
      color = "brown";
      sparkle.start();
    } else if (mouseY >= 160 && mouseY <= 180) {
      color = "white";
      sparkle.start();
    } else if (mouseY >= 180 && mouseY <= 200) {
      color = "black";
      sparkle.start();
    }
  }
  previousX = mouseX;
  previousY = mouseY;
}




let nxButton;

let synth = new Tone.PolySynth().toDestination();
let dSynth = new Tone.PolySynth().toDestination();

let pattern = new Tone.Pattern(function (time, note) {
  synth.triggerAttackRelease(note, 0.5, time);
}, ['C4', 'D4', 'C4', 'D4']);

const melody = new Tone.Sequence((time, note) => {
  synth.triggerAttackRelease(note, 0.1, time);
  // subdivisions are given as subarrays
}, [null, 'E5', 'A5', 'E5', 'A5', 'G5', 'A5', null, null]).start("0:0");

let chords = [
  {"time": "0:0", "note": ["C4", 'E3', "G4"]},
  {"time": "0:1", "note": ["F4", 'A4', "C4"]},
  {"time": "0:2", "note": ["G4", 'A5', "D4"]},
  {"time": "0:3", "note": ["A4", 'B3', "F4"]},
]

let chord = new Tone.Part((time, notes)=>{
  dSynth.triggerAttackRelease(notes.note, '2n', time)
}, chords);

chord.loop = 8;
chord.loopEnd = '2m';


const synthA = new Tone.FMSynth().toDestination();
const synthB = new Tone.AMSynth().toDestination();
//play a note every quarter-note
const loopA = new Tone.Loop(time => {
  synthA.triggerAttackRelease("C2", "8n", time);
}, "4n").start(0);
//play another note every off quarter-note, by starting it "8n"
const loopB = new Tone.Loop(time => {
  synthB.triggerAttackRelease("C4", "8n", time);
}, "4n").start("8n");

