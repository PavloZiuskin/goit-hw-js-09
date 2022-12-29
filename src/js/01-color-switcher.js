const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};
let intervalId = null;

refs.btnStart.addEventListener('click', onStartChengeBodyColorSetIntervalClick);
refs.btnStop.addEventListener('click', onStopRandomColorIntervalBtnStopClick);

function onStartChengeBodyColorSetIntervalClick() {
  refs.btnStart.disabled = true;
  intervalId = setInterval(() => {
    return (refs.body.style.backgroundColor = getRandomHexColor());
  }, 1000);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStopRandomColorIntervalBtnStopClick() {
  refs.btnStart.disabled = false;
  clearInterval(intervalId);
}
