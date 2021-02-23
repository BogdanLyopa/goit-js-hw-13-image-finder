import './styles.css';
import newsService from './js/apiService';
import refs from './js/refs';
import updateMarkup from './js/update-hits';
import openBigImg from './js/openImg';
import 'basiclightbox/dist/basicLightbox.min.css';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  newsService.query = form.elements.query.value;

  refs.gallery.innerHTML = ' ';
  form.reset();

  newsService.resetPage();

  fetchHits();
});

refs.loadMore.addEventListener('click', fetchHits);

refs.gallery.addEventListener('click', openBigImg);

function fetchHits() {
  refs.loadMore.classList.add('is-hidden');

  refs.spinner.classList.remove('is-hidden');

  newsService
    .fetchHits()
    .then(hits => {
      updateMarkup(hits);

      refs.loadMore.classList.remove('is-hidden');
      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
      });
    })
    .finally(() => {
      refs.spinner.classList.add('is-hidden');
    });
}
