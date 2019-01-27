class Points {
  constructor() {
    this.points = []
  }

  init(n) {
    for (var i = 0; i < n; i++) {
      this.points.push({
        x: random(-width / 2, width / 2),
        y: random(-height / 2, height / 2)
      })
    }
  }

  draw() {
    for (var i = 0; i < this.points.length; i++) {
      if (this.points[i].x >= 0 && this.points[i].y > 0) {
        fill(0, 0, 0)
        ellipse(this.points[i].x, this.points[i].y, 8, 8);
      } else if (this.points[i].x >= 0 && this.points[i].y < 0) {
        fill(0, 255, 0)
        ellipse(this.points[i].x, this.points[i].y, 8, 8);
      } else if (this.points[i].x <= 0 && this.points[i].y > 0) {
        fill(0, 0, 255)
        ellipse(this.points[i].x, this.points[i].y, 8, 8);
      } else {
        fill(255, 255, 255)
        ellipse(this.points[i].x, this.points[i].y, 8, 8);
      }
    }
  }
}