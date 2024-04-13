import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

// Add imports above this line

// Change code below this line

console.log(galleryItems);
const link = document.querySelector('.gallery');

for (const obj of galleryItems) {
  const div = document.createElement('div');
  div.classList.add('gallery__item');

  const anchor = document.createElement('a');
  anchor.classList.add('gallery__link');
  anchor.setAttribute('href', obj.original);

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = obj.preview;
  image.setAttribute('data-source', obj.original);
  image.alt = obj.description;

  link.appendChild(div);
  div.appendChild(anchor);
  anchor.appendChild(image);
}

var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });

link.addEventListener('click', event => {
  event.preventDefault();
});
