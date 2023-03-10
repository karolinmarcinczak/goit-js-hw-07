import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

//Tworzenie i renderowanie znacznika zgodnie z tablicą danych galleryItems i dostarczonym szablonem elementu galerii.
galleryItems.forEach((image) => {
  galleryList.insertAdjacentHTML(
    "beforeend",
    `<li class="gallery__item">
      <a class="gallery__link"
      href="${image.original}">
        <img
        src="${image.preview}" 
        alt="${image.description}" 
        class="gallery__image"/>
      </a>
    </li>`
  );
});

//dodaj wyświetlanie podpisów do obrazków z atrybutu alt. Niech podpis będzie pod spodem i pojawia się po 250 milisekundach po otwarciu obrazka.
var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

