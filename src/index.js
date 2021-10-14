import "./styles.css";
import Paddle from "./paddle";
import InputHandler from "./input";
/////everything in game
let canvas = document.getElementById("gameScreen");
///gamescreen
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 700;
const GAME_HEIGHT = 450;
///paddle input
let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(paddle);

let lastTime = 0;

///images
let imgBall = document.getElementById("img_ball");

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, 700, 450);
  paddle.update(deltaTime);
  paddle.draw(ctx);
  ctx.drawImage(imgBall, 10, 10);
  requestAnimationFrame(gameLoop);
}

gameLoop();
