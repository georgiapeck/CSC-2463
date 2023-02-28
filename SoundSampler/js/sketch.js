let sounds = new Tone.Players({

  "2020 Presidential Debate": "sounds/obamnasoda.mp3",
  "Terraria": "sounds/terraria.mp3",
  "Me when college": "sounds/mewhenthe.wav",
  "Vine Boom": "sounds/vine.mp3"

})

const delay = new Tone.FeedbackDelay("8n", 0.5);

let soundNames = ["2020 Presidential Debate", "Terraria", "Me when college", "Vine Boom"];
let buttons = [];

let dSlider;
let fSlider;

function setup() {
  createCanvas(400, 400);
  sounds.connect(delay);
  delay.toDestination();

  soundNames.forEach((word, index) => {
    buttons[index] = createButton(word);
    buttons[index].position(index, index*50);
    buttons[index].mousePressed( () => buttonSound(word))
  })

  dSlider = createSlider(0., 1., 0.5, 0.05);
  dSlider.mouseReleased( () => {
    delay.delayTime.value = dSlider.value();
  })

  fSlider = createSlider(0., 1., 0.5, 0.05);
  fSlider.mouseReleased( () => {
    delay.feedback.value = fSlider.value();
  })


}

function draw() {
  background(220, 120, 180);
  text('Press button to play sound', 0, 200)

}

function buttonSound(whichSound) {
    sounds.player(whichSound).start();
}