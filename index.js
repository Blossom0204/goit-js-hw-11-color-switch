const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const startBtn = document.querySelector("[data-action='start']");
  const stopBtn = document.querySelector("[data-action='stop']");
  const body = document.querySelector("body");
  let interval= null;
  
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

function changeBgColor() {
    const color = randomIntegerFromInterval(0, colors.length);
    body.style.backgroundColor = colors[color];
}

function startСhange() {
    startBtn.disabled = true;
    interval = setInterval(changeBgColor, 1000);
}

function stopСhange() {
    startBtn.disabled = false;
    clearInterval(interval);
}

startBtn.addEventListener('click', startСhange);
stopBtn.addEventListener('click', stopСhange);
