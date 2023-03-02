let slider;

const synth = new Tone.PolySynth();
const drum = new Tone.MembraneSynth();
const metal = new Tone.MetalSynth({
	"frequency"  : 40 ,
	"envelope"  : {
		"attack"  : 0.001 ,
		"decay"  : 0.4 ,
		"release"  : 0.2
	}  ,
	"harmonicity"  : 100 ,
	"modulationIndex"  : 30 ,
	"resonance"  : 40 ,
	"octaves"  : 1.5
});
const reverb = new Tone.JCReverb(0.4);
synth.connect(reverb);
drum.connect(reverb);
metal.connect(reverb);

const osc = new Tone.OmniOscillator("C#4", "pwm").start();

const ampEnv = new Tone.AmplitudeEnvelope({
  attack: 0.5,
  decay: 0.6,
  sustain: 0.3,
  release: 0.2
})

let notes = {
  'a': 'C1',
  's': 'D1',
  'd': 'E1',
  'f': 'F1',
  'g': 'G1',
  'h': 'A1',
  'j': 'B1',
  'k': 'C2'
}

function setup() {
  createCanvas(400, 400);

  slider = new Nexus.Slider("#slider");
  reverb.toDestination();

  synth.release = 2;
  synth.resonance = 0.98;
  // synth.harmonicity.value = 1.25;
  //play a middle 'C' for the duration of an 8th note
  // synth.triggerAttackRelease("C4", "8n");

  slider.on('change', (v) =>  {
    reverb.roomSize.value = v;
  }); 

  osc.connect(ampEnv);
  ampEnv.connect(reverb);
}

function draw() {
  background(220);
}

function keyPressed() {
  let toPlay = notes[key];
  console.log(toPlay);

  osc.frequency.value = toPlay;
  ampEnv.triggerAttackRelease('8n');

  synth.triggerAttackRelease(toPlay, 0.5);
  //metal.triggerAttackRelease("C3", "8n", '+0.5');
  //drum.triggerAttackRelease("C2", "8n", '+1');
}