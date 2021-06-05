const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const body = document.querySelector('body');
console.log(body);
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

let thatInterval;

function onStartBtnClick() {
  thatInterval = setInterval(changeColor, 1000);
  startBtn.disabled = true;
}

function changeColor() {
  body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

function onStopBtnClick() {
  clearInterval(thatInterval);
  startBtn.disabled = false;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};