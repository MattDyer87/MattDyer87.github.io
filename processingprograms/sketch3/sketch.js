var x = 0;
var y = 0;
var px = 0;
var py = 0;
var easing = 0.05;

function setup() {
    createCanvas(1400,475);
    stroke(102);
}
function draw() {
    var targetX = mouseX;
    x += (targetX - x) * easing;
    var targetY = mouseY;
    y += (targetY - y) * easing;
    var weight = dist(x, y, px, py);
    strokeWeight(weight);
    py = y;
    px = x;
    if (mouseIsPressed) {
        line(x, y, px, py);
    }
}