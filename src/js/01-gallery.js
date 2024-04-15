// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const link = document.querySelector('.gallery');

for (const obj of galleryItems) {
  const li = document.createElement('li');
  li.classList.add('gallery__item');

  const anchor = document.createElement('a');
  anchor.classList.add('gallery__link');
  anchor.setAttribute('href', obj.original);

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = obj.preview;
  image.setAttribute('data-source', obj.original);
  image.title = obj.description;

  link.appendChild(li);
  li.appendChild(anchor);
  anchor.appendChild(image);
}

var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });

link.addEventListener('click', event => {
  if (event.target.tagName === 'IMG') {
    event.preventDefault();
  }
});
