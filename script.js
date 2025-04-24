let stickman;
let position = 0;
let isJumping = false;

window.onload = () => {
  document.getElementById("startBtn").addEventListener("click", () => {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    stickman = document.getElementById("stickman");
    position = 0;
    stickman.style.left = position + "px";
  });

  document.getElementById("leftBtn").addEventListener("click", () => {
    position -= 10;
    stickman.style.left = position + "px";
  });

  document.getElementById("rightBtn").addEventListener("click", () => {
    position += 10;
    stickman.style.left = position + "px";
  });

  document.getElementById("jumpBtn").addEventListener("click", () => {
    if (isJumping) return;
    isJumping = true;
    stickman.style.top = "-30px";
    setTimeout(() => {
      stickman.style.top = "0px";
      isJumping = false;
    }, 300);
  });
};