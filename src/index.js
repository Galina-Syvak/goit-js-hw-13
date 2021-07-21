import './sass/main.scss';

const refs = {
  searchFormEl: document.querySelector('#search-form'),
  inputEl: document.querySelector('.search-input'),
};

refs.searchFormEl.addEventListener('submit', event => {
  event.preventDefault();
  console.log(refs.inputEl.value);
});
