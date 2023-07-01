// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const createGalleryMarkup = items => {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>
      `;
    })
    .join('');
};

galleryList.innerHTML = createGalleryMarkup(galleryItems);

const handleImageClick = event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const originalImage = event.target.dataset.source;
  const description = event.target.alt;

  const instance = new SimpleLightbox()(`
    <img src="${originalImage}" alt="${description}">
  `);

  instance.show();
};

galleryList.addEventListener('click', handleImageClick);
