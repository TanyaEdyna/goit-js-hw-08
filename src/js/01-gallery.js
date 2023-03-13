
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryEl = document.querySelector('.gallery');


function createMarkupGallery() {
    const pictureCard = galleryItems.map(({ preview, original, description }) => {
        return `
        
          <a class="gallery__item" href="${original}">
            <img style="display: block" class="gallery__image" src="${preview}" alt="${description}"/>
          </a>
        
  `;
    }).join('');
    return pictureCard;
}

const newGallery = createMarkupGallery(galleryItems);



galleryEl.innerHTML = newGallery;


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',//отримую заголовок із атрибута alt
    captionDelay: 250,//роблю затримку в 250ms

});

