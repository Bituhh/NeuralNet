// Perceptron - Capable of multiclass classification.
class Perceptron {
  constructor() {
    this.weights = []
  }

  init() {

    for (var i = 0; i < 2; i++) {
      this.weights.push(random(-1, 1));
    }
  }

  predict(inputs) {
    let sum = 0;
    for (var i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i];
    }
    console.log(sum);
    return this.activation(sum);
  }

  activation(value) {
    return (value >= 0) ? 1 : -1; // Change to consider a multiclass percepitron.
  }
}