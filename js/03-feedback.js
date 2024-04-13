import _ from 'lodash';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name=email]');
const mess = document.querySelector('[name=message]');

const data = {};

const dataStorage = JSON.parse(localStorage.getItem('feedback-form-state'));

if (dataStorage) {
  email.value = dataStorage.email;
  data.email = dataStorage.email;

  mess.value = dataStorage.message;
  data.message = dataStorage.message;
}

form.addEventListener(
  'input',
  _.throttle(e => {
    if (e.target.name === 'email') {
      data.email = e.target.value;
    }
    if (e.target.name === 'message') {
      data.message = e.target.value;
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
  }, 500)
);

form.addEventListener('submit', ev => {
  ev.preventDefault();
  console.log(data);
  form.reset();
  localStorage.clear();
});
