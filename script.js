const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = {
  x: 100,
  y: 300,
  width: 40,
  height: 40,
  color: "#fff",
  dy: 0,
  dx: 0,
  jumpPower: -10,
  gravity: 0.5,
  grounded: false,
  speed: 3
};

const keys = {};

document.addEventListener("keydown", e => keys[e.code] = true);
document.addEventListener("keyup", e => keys[e.code] = false);

function update() {
  // 좌우 이동
  player.dx = 0;
  if (keys["ArrowLeft"]) player.dx = -player.speed;
  if (keys["ArrowRight"]) player.dx = player.speed;

  // 점프
  if (keys["Space"] && player.grounded) {
    player.dy = player.jumpPower;
    player.grounded = false;
  }

  // 중력
  player.dy += player.gravity;

  // 이동 적용
  player.x += player.dx;
  player.y += player.dy;

  // 바닥 충돌
  if (player.y + player.height >= canvas.height) {
    player.y = canvas.height - player.height;
    player.dy = 0;
    player.grounded = true;
  }

  // 벽 밖 제한
  if (player.x < 0) player.x = 0;
  if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();