window.onload = function () {
  document.getElementById("startBtn").addEventListener("click", startGame);
};

function startGame() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("game-ui").style.display = "block";
}

function moveLeft() {
  alert("왼쪽으로 이동!");
}
function moveRight() {
  alert("오른쪽으로 이동!");
}
function jump() {
  alert("점프!");
}