// Canvas
const canvasDIV = document.querySelector(".snake-canvas");
const ctx = canvasDIV.getContext("2d");

let screenWidth = window.innerWidth;

class Canvas {
  width = 900; //900
  height = 900; //900
  bgColor = "#fff";
}

class Snake {
  width = 10;
  height = 5;
  //   color = "#fff";

  posX = 10;
  posY = 10;

  movementSize = 5;
  color = "#999";

  checkWin() {
    if (snake.posX == apple.posX && snake.posY == apple.posY) {
      apple.count++;

      //   textDiv.textContent = apple.count;
      apple.createApple();
    }
  }

  //   Movements
  goLeft() {
    ctx.fillStyle = snake.color;
    ctx.clearRect(snake.posX, snake.posY, snake.width, snake.height);
    snake.posX -= snake.movementSize;

    if (snake.posX <= -5) {
      snake.posX = 295;
    }

    snake.checkWin();
    ctx.fillRect(snake.posX, snake.posY, snake.width, snake.height);
  }

  goRight() {
    ctx.fillStyle = snake.color;
    ctx.clearRect(snake.posX, snake.posY, snake.width, snake.height);
    snake.posX += snake.movementSize;

    if (snake.posX >= 295) {
      snake.posX = 0;
    }

    snake.checkWin();
    ctx.fillRect(snake.posX, snake.posY, snake.width, snake.height);
  }

  goUp() {
    ctx.fillStyle = snake.color;
    ctx.clearRect(snake.posX, snake.posY, snake.width, snake.height);
    snake.posY -= snake.movementSize;

    if (snake.posY < 0) {
      snake.posY = 145;
    }

    snake.checkWin();
    ctx.fillRect(snake.posX, snake.posY, snake.width, snake.height);
  }

  goDown() {
    ctx.fillStyle = snake.color;
    ctx.clearRect(snake.posX, snake.posY, snake.width, snake.height);
    snake.posY += snake.movementSize;

    if (snake.posY > 145) {
      snake.posY = 0;
    }

    snake.checkWin();
    ctx.fillRect(snake.posX, snake.posY, snake.width, snake.height);
  }
}

class Apple {
  posX = 50;
  posY = 50;

  width = 10;
  height = 5;

  count = 0;
  color = "#555";

  createApple() {
    let randomX = Math.floor(Math.random() * 290);

    while (randomX % 5 != 0) {
      randomX--;

      if (randomX % 5 == 0) {
        break;
      }
    }

    apple.posX = randomX;

    let randomY = Math.floor(Math.random() * 140);

    while (randomY % 5 != 0) {
      randomY--;

      if (randomY % 5 == 0) {
        break;
      }
    }

    apple.posY = randomY;

    ctx.fillStyle = apple.color;
    ctx.fillRect(apple.posX, apple.posY, apple.width, apple.height);
  }
}

class AI {
  fixAI(e) {
    e.preventDefault();

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    apple.createApple();
  }

  // calculates closest way
  makeDecide() {
    let width = 295;
    let height = 145;

    // let normal way = appleposx - snakeposx
    // if snakeposx + (width - appleposx) <= normal way

    // snake        apple
    if (snake.posX < apple.posX) {
      let normalWay = apple.posX - snake.posX;
      let otherWay = snake.posX + (width - apple.posX);
      if (otherWay < normalWay) {
        snake.goLeft();
      } else {
        snake.goRight();
      }

      // console.log("normalX:", normalWay, "otherX", otherWay);
    }

    // apple      snake
    if (snake.posX > apple.posX) {
      let normalWay = snake.posX - apple.posX;
      let otherWay = width - snake.posX + apple.posX;
      if (otherWay < normalWay) {
        snake.goRight();
      } else {
        snake.goLeft();
      }

      // console.log("normalX:", normalWay, "otherX", otherWay);
    }

    // snake
    //
    // apple
    if (snake.posY < apple.posY) {
      let normalWay = apple.posY - snake.posY;
      let otherWay = snake.posY + (height - apple.posY);

      if (otherWay < normalWay) {
        snake.goUp();
      } else {
        snake.goDown();
      }

      // console.log("normalY:", normalWay, "otherY", otherWay);
    }

    // apple
    //
    // snake
    if (snake.posY > apple.posY) {
      let normalWay = snake.posY - apple.posY;
      let otherWay = height - snake.posY + apple.posY;
      if (otherWay < normalWay) {
        snake.goDown();
      } else {
        snake.goUp();
      }

      // console.log("normalY:", normalWay, "otherY", otherWay);
    }
  }
}

const canvas = new Canvas();
const snake = new Snake();
const apple = new Apple();
const ai = new AI();

if (innerWidth <= 1000) {
  canvas.width = 400;
  canvas.height = 400;
}

setInterval(ai.makeDecide, 1000 / 30);

setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  apple.createApple();
}, 10000);

canvasDIV.style.width = `${canvas.width}px`;
canvasDIV.style.height = `${canvas.height}px`;
// canvasDIV.style.backgroundColor = `${canvas.bgColor}`;

// Movement
document.addEventListener("keydown", (e) => {
  if (e.keyCode == 87) {
    snake.goUp();
  } else if (e.keyCode == 65) {
    snake.goLeft();
  } else if (e.keyCode == 83) {
    snake.goDown();
  } else if (e.keyCode == 68) {
    snake.goRight();
  }
});

// Snake
ctx.fillStyle = snake.color;
ctx.fillRect(snake.posX, snake.posY, snake.width, snake.height);

// apple
apple.createApple();
