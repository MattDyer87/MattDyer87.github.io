function setup() {
  createCanvas(500, 500);
  strokeWeight(8);
}

function draw() {
  stroke(0);
  background(135, 206, 235);
  fill(255, 255, 0);
  ellipse(250, 250, 150, 150);
  stroke(255, 255, 0);
  strokeCap(SQUARE);
  line(250, 329, 250, 400);
  line(250, 171, 250, 100);
  line(329, 250, 400, 250);
  line(171, 250, 100, 250);
}
  