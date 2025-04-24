window.onload = () => {
  document.getElementById("game").style.display = "block";
  document.getElementById("controls").style.display = "none";
};

function startGame() {
  document.getElementById("game").style.display = "none";
  document.getElementById("controls").style.display = "flex";
  // 여기에 게임 로직 시작 코드 추가 가능
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