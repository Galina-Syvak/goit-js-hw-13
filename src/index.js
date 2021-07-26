import './sass/main.scss';
import { Notify } from 'notiflix';
import photoCardTemplate from './templates/card-template.hbs';
import { fetchImages } from './js/fetchImages';

const refs = {
  searchFormEl: document.querySelector('#search-form'),
  inputEl: document.querySelector('.search-input'),
  galleryEl: document.querySelector('.gallery'),
  loadMoreEl: document.querySelector('.load-more'),
};

refs.searchFormEl.addEventListener('submit', onSubmit);
refs.loadMoreEl.addEventListener('click', onButtonClick);

let page = 1;

function onSubmit(event) {
  event.preventDefault();

  page = 1;

  fetchImages(refs.inputEl.value, page)
    .then(value => {
      if (value.totalHits === 0) {
        Notify.failure('Sorry, there are no images matching your search query. Please try again.');
        return;
      }

      Notify.success(`Hooray! We found ${value.totalHits} images.`);
      refs.loadMoreEl.classList.remove('hidden');
      refs.galleryEl.innerHTML = photoCardTemplate(value);
    })
    .catch(error => {
      console.error(error);
    });
}

function onButtonClick() {
  page += 1;

  fetchImages(refs.inputEl.value, page)
    .then(value => {
      refs.galleryEl.insertAdjacentHTML('beforeend', photoCardTemplate(value));
    })
    .catch(error => {
      refs.loadMoreEl.classList.add('hidden');
      Notify.failure(`We're sorry, but you've reached the end of search results.`);
    });
}
