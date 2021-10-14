export default class Paddle {
  ///the paddle itself

  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.width = 150;

    this.height = 20;

    this.maxSpeed = 10;
    this.speed = 0;

    this.postion = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10
    };
  }
  //movement
  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }
  ///image of
  draw(ctx) {
    ctx.fillStyle = "#00f";
    ctx.fillRect(this.postion.x, this.postion.y, this.width, this.height);
  }
  ///borders
  update(deltaTime) {
    if (!deltaTime) return;

    this.postion.x += this.speed;

    if (this.postion.x < 0) this.postion.x = 0;
    if (this.postion.x + this.width > this.gameWidth)
      this.postion.x = this.gameWidth - this.width;
  }
}
