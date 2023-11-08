import Notiflix from 'notiflix';
import { getRandomHexColor } from './fn-random-color';

const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

// const originalColor = refs.body.style.backgroundColor;
let id = null;

refs.start.addEventListener('click', clickStart);
refs.stop.addEventListener('click', clickStop);

function clickStart() {
  refs.start.setAttribute('disabled', 'true');
  id = setInterval(() => {
    const color = getRandomHexColor();
    refs.body.style.backgroundColor = color;
    Notiflix.Notify.success(color, {
      timeout: 500,
    });
  }, 1000);
}

function clickStop() {
  clearInterval(id);
  refs.start.removeAttribute('disabled');
//   refs.body.style.backgroundColor = originalColor;
}
