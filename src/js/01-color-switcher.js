import Notiflix from 'notiflix';
import { getRandomHexColor } from './fn-random-color';

const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

// const originalColor = refs.body.style.backgroundColor;

refs.start.addEventListener('click', clickStart);
refs.stop.addEventListener('click', clickStop);
const DELEY = 1000;
let id = null;

function clickStart() {
  refs.start.setAttribute('disabled', 'true');
  id = setInterval(() => {
    const color = getRandomHexColor();
    refs.body.style.backgroundColor = color;
    Notiflix.Notify.success(color, {
      timeout: DELEY - 500,
    });
  }, DELEY);
}

function clickStop() {
  clearInterval(id);
  refs.start.removeAttribute('disabled');
  // refs.body.style.backgroundColor = originalColor;
}
