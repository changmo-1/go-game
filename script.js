const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = {
  x: 150,
  y: 160,
  width: 20,
  height: 20,
  dx: 0,
  dy: 0,
  gravity: 0.6,
  jumpPower: -10,
  grounded: false,
  speed: 2
};

const keys = {};

document.addEventListener("keydown", e => keys[e.code] = true);
document.addEventListener("keyup", e => keys[e.code] = false);

function update() {
  player.dx = 0;

  if (keys["ArrowLeft"]) player.dx = -player.speed;
  if (keys["ArrowRight"]) player.dx = player.speed;

  if (keys["Space"] && player.grounded) {
    player.dy = player.jumpPower;
    player.grounded = false;
  }

  player.dy += player.gravity;
  player.x += player.dx;
  player.y += player.dy;

  // 바닥 충돌
  if (player.y + player.height >= canvas.height) {
    player.y = canvas.height - player.height;
    player.dy = 0;
    player.grounded = true;
  }

  // 화면 경계 제한
  if (player.x < 0) player.x = 0;
  if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();

// 모바일 조작
document.getElementById("leftBtn").addEventListener("touchstart", () => keys["ArrowLeft"] = true);
document.getElementById("leftBtn").addEventListener("touchend", () => keys["ArrowLeft"] = false);
document.getElementById("rightBtn").addEventListener("touchstart", () => keys["ArrowRight"] = true);
document.getElementById("rightBtn").addEventListener("touchend", () => keys["ArrowRight"] = false);
document.getElementById("jumpBtn").addEventListener("touchstart", () => {
  if (player.grounded) {
    player.dy = player.jumpPower;
    player.grounded = false;
  }
});