function startGame() {
  document.getElementById("startButton").classList.add("hidden");
  document.getElementById("status").style.display = "none";
  document.getElementById("controls").classList.remove("hidden");
}

function moveLeft() {
  console.log("왼쪽 이동");
}
function moveRight() {
  console.log("오른쪽 이동");
}
function jump() {
  console.log("점프");
}