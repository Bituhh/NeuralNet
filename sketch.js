brain = new Perceptron()
pts = new Points()

function setup() {
  createCanvas(400, 400);
  brain.init();
  pts.init(1);
}

function draw() {
  brain.predict([0.5, -0.1]);
  background(100);
  translate(width / 2, height / 2)
  rotate(-PI / 2)
  pts.draw()
  strokeWeight(1)
  stroke(255)
  line(0, -height, 0, height);
  //console.log(brain.predict());
}