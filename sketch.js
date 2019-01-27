brain = Perceptron()

function setup() {
  createCanvas(800, 600);
  brain.build();
}

function draw() {
  background(100);
  console.log(brain.weights);
}