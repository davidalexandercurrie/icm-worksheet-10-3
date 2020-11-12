let mic;
let randomColor;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create an Audio input
  mic = new p5.AudioIn();
  randomColor = color(random(255), random(255), random(255));
  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  background(200);
  console.log(mic.getLevel());
  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();
  if (vol > 0.4) {
    randomColor = color(random(255), random(255), random(255));
  }
  fill(randomColor);
  ellipse(width / 2, height / 2, vol * 500);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
