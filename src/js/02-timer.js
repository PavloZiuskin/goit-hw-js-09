import flatpickr from 'flatpickr';

const input = document.querySelector('#datetime-picker');

const refs = {
  btnStart: document.querySelector('button[data-start]'),
  dataDays: document.querySelector('span[data-days]'),
  dataHours: document.querySelector('span[data-hours]'),
  dataMinutes: document.querySelector('span[data-minutes]'),
  dataSeconds: document.querySelector('span[data-seconds]'),
};

refs.btnStart.disabled = true;
let selectDay = 0;
let nowDay = 0;
let intervalId = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    selectDay = Number(selectedDates[0]);
    nowDay = Number(options.defaultDate);

    if (selectDay > nowDay) {
      refs.btnStart.disabled = false;
    } else if (selectDay <= nowDay) {
      alert('Please choose a date in the future');
    }
  },
};

refs.btnStart.addEventListener('click', onStartTimerBtnClick);

const fp = flatpickr(input, options);

function onStartTimerBtnClick(a, b) {
  a = nowDay;
  b = selectDay;
  let timeTo = b - a;

  intervalId = setInterval(() => {
    convertMs(timeTo);
    timeTo -= 1000;
    if (timeTo <= 0) {
      clearInterval(intervalId);
    }
  }, 1000);
  refs.btnStart.disabled = true;
  input.disabled = true;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  addLeadingZero(days, hours, minutes, seconds);
  return { days, hours, minutes, seconds };
}
console.log(Number(options.defaultDate));
// const selectDay = options.onClose();
// console.log(selectDay);
function addLeadingZero(day, hour, minute, second) {
  refs.dataDays.textContent = day.toString().padStart(2, '0');
  refs.dataHours.textContent = hour.toString().padStart(2, '0');
  refs.dataMinutes.textContent = minute.toString().padStart(2, '0');
  refs.dataSeconds.textContent = second.toString().padStart(2, '0');
}
