function startGame() {
  document.getElementById("game").style.display = "none";
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  canvas.style.display = "block";

  let x = 100;
  let y = 160;
  let vx = 0;
  let vy = 0;
  const gravity = 0.5;
  let onGround = false;

  const keys = {};

  document.addEventListener("keydown", (e) => {
    keys[e.code] = true;
  });

  document.addEventListener("keyup", (e) => {
    keys[e.code] = false;
  });

  function update() {
    if (keys["ArrowLeft"]) vx = -2;
    else if (keys["ArrowRight"]) vx = 2;
    else vx = 0;

    if (keys["Space"] && onGround) {
      vy = -10;
      onGround = false;
    }

    vy += gravity;
    x += vx;
    y += vy;

    if (y >= 160) {
      y = 160;
      vy = 0;
      onGround = true;
    }

    if (x < 0) x = 0;
    if (x > canvas.width - 20) x = canvas.width - 20;
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    ctx.fillRect(x, y, 20, 20);
  }

  function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
  }

  loop();
}