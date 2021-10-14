export default class InputHandler {
  ////input for game
  constructor(paddle) {
    //////detremines when the key gets pressed and moves the platform/////

    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 37:
          paddle.moveLeft();
          break;
        case 39:
          paddle.moveRight();
          break;

        default:
        ///do nothing///
      }
    });

    /////determines when the key is released and stops/////
    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        case 37:
          if (paddle.speed < 0) paddle.stop();
          break;
        case 39:
          if (paddle.speed > 0) paddle.stop();
          break;

        default:
        ///do nothing///
      }
    });
  }
}
