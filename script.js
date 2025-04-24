function startGame() {
  document.getElementById("message").style.display = "none";
  document.querySelector("button").style.display = "none";
  document.getElementById("stickman").classList.remove("hidden");
  document.getElementById("controls").classList.remove("hidden");
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
