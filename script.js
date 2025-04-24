const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let x = 150;
let y = 120;
let vx = 0;
let vy = 0;
let isJumping = false;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0f0";
  ctx.fillRect(x, y, 20, 20);
}

function update() {
  x += vx;
  y += vy;
  if (y < 120) {
    vy += 1;
  } else {
    vy = 0;
    y = 120;
    isJumping = false;
  }
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

document.getElementById("leftBtn").addEventListener("touchstart", () => vx = -2);
document.getElementById("leftBtn").addEventListener("touchend", () => vx = 0);
document.getElementById("rightBtn").addEventListener("touchstart", () => vx = 2);
document.getElementById("rightBtn").addEventListener("touchend", () => vx = 0);
document.getElementById("jumpBtn").addEventListener("touchstart", () => {
  if (!isJumping) {
    vy = -12;
    isJumping = true;
  }
});

gameLoop();