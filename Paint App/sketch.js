let color = "white";
let previousX, previousY;

function setup() {
  createCanvas(700, 350);
  background("white");
}

function draw() {
  strokeWeight(10);
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
  if (mouseX >= 0 && mouseX <= 20) {
    if (mouseY >= 0 && mouseY <= 20) {
      color = "red";
    } else if (mouseY >= 20 && mouseY <= 40) {
      color = "orange";
    } else if (mouseY >= 40 && mouseY <= 60) {
      color = "yellow";
    } else if (mouseY >= 60 && mouseY <= 80) {
      color = "green";
    } else if (mouseY >= 80 && mouseY <= 100) {
      color = "cyan";
    } else if (mouseY >= 100 && mouseY <= 120) {
      color = "blue";
    } else if (mouseY >= 120 && mouseY <= 140) {
      color = "magenta";
    } else if (mouseY >= 140 && mouseY <= 160) {
      color = "brown";
    } else if (mouseY >= 160 && mouseY <= 180) {
      color = "white";
    } else if (mouseY >= 180 && mouseY <= 200) {
      color = "black";
    }
  }
  previousX = mouseX;
  previousY = mouseY;
}  