import * as basicLightbox from 'basiclightbox';

function openBigImg(event) {
  event.preventDefault();
  const img = event.target;
  const imgBigUrl = img.dataset.source;
  const instance = basicLightbox.create(
    `<img src= ${imgBigUrl} width="1200" >`,
  );
  instance.show();
}
export default openBigImg;
