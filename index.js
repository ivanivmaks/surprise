const container = document.getElementById("buttons-container");
const startButton = document.getElementById("start-button");
let clickCount = 0;

function getRandomPosition() {
  const offset = 50;
  const maxX = window.innerWidth - offset;
  const maxY = window.innerHeight - offset;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  return { x: randomX, y: randomY };
}

function generateLove() {
  if (clickCount < 10) {
    const currentButton = container.querySelector("button");

    if (currentButton) {
      container.removeChild(currentButton);
    }

    const button = document.createElement("button");
    button.textContent = "Ну та клікни";
    button.addEventListener("click", generateLove);

    const position =
      clickCount === 0
        ? { x: window.innerWidth / 2, y: window.innerHeight / 2 }
        : getRandomPosition();
    button.style.left = `${position.x}px`;
    button.style.top = `${position.y}px`;

    container.appendChild(button);

    clickCount++;
  } else {
    container.innerHTML = '<p class="love-message">❤️ I LOVE YOU ❤️</p>';
  }
}

startButton.addEventListener("click", generateLove);
