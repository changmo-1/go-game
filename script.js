let player = null;
let position = 0;

function startGame() {
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("status").classList.add("hidden");
  document.getElementById("controls").classList.remove("hidden");
  document.getElementById("player").classList.remove("hidden");
  player = document.getElementById("player");
  position = 0;
}

function moveLeft() {
  position -= 10;
  player.style.left = position + "px";
}

function moveRight() {
  position += 10;
  player.style.left = position + "px";
}

function jump() {
  player.style.transition = "bottom 0.2s ease";
  player.style.position = "relative";
  player.style.bottom = "30px";
  setTimeout(() => {
    player.style.bottom = "0px";
  }, 200);
}