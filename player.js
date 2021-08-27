class Player {
  constructor() {
    this.size = 80;
    this.x = 50;
    this.y = height - this.size;
    this.velocityY = 0;
    this.gravity = 1.75;
  }
  show() {
    image(playerImg, this.x, this.y, this.size, this.size);
  }
  jump() {
    if (this.y == height - this.size) {
      this.velocityY = -25;
    }
  }
  move() {
    this.velocityY = this.velocityY + this.gravity;
    this.y = this.y + this.velocityY;
    this.y = constrain(this.y, 0, height - this.size);
  }
  collided(currentObs) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size - 30,
      this.size - 30,

      currentObs.x,
      currentObs.y,
      currentObs.size - 30,
      currentObs.size - 30
    );
    return isColliding;
  }
}
