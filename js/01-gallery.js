import { galleryItems } from './gallery-items.js';

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

link.addEventListener('click', showImage);

function showImage(event) {
  event.preventDefault();
  const instance = basicLightbox.create(
    `<img src='${event.target.dataset.source}'/>`,
    {
      onShow: () => {
        document.addEventListener('keydown', closeModal);
      },
      onClose: () => {
        document.removeEventListener('keydown', closeModal);
      },
    }
  );
  instance.show();

  function closeModal(event) {
    if (event.key === 'Escape') {
      instance.close();
    }
  }
}
