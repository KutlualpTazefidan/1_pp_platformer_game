class Player {
  constructor() {
    this.position = {
      x: 10,
      y: 10,
    };
    this.width = 10;
    this.height = 10;
    this.sides = {
      bottom: this.position.y + this.height,
    };
  }
  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update() {
    if (this.sides.bottom < canvas.height) {
      this.position.y++;
      this.sides.bottom = this.position.y + this.height;
    }
  }
}
