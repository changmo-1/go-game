function startGame() {
  document.getElementById("game").style.display = "none";
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  canvas.style.display = "block";

  let x = 10;
  let y = 100;
  let speed = 2;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fillRect(x, y, 20, 20); // 스틱맨 사각형

    x += speed;
    if (x > canvas.width) x = -20;

    requestAnimationFrame(draw);
  }

  draw();
}