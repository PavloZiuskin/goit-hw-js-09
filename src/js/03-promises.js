import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
};
refs.form.addEventListener('submit', onCreateAmountPromiseFormSubmit);

let delay = 0;
let step = 0;
let amount = 0;
let position = 0;

function onCreateAmountPromiseFormSubmit(e) {
  e.preventDefault();
  const elementOfInput = e.target.elements;
  delay = Number(elementOfInput.delay.value);
  step = Number(elementOfInput.step.value);
  amount = Number(elementOfInput.amount.value);
  console.log(delay, step, amount);
  delay -= step;
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, (delay += step))
      .then(resp => Notiflix.Notify.success(`${resp}`))
      .catch(resp => Notiflix.Notify.failure(`${resp}`));
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        res(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        rej(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
  return promise;
}
