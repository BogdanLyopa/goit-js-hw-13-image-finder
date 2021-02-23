import refs from '../js/refs';
import imageCard from '../templates/image-card.hbs';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

function updateMarkup(hits) {
  if (hits.length === 0) {
    error({
      title: 'No such images found',
    });
  }
  const markup = imageCard(hits);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}
export default updateMarkup;
