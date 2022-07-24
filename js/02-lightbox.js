import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const imgMarkup = addGalleryElements(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", imgMarkup);
galleryEl.addEventListener("click", notOpenNewPage);

function addGalleryElements(elements) {
  return elements
    .map((el) => {
      return `<a class="gallery__item" href="${el.original}">
    <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
              </a>`;
    })
    .join("");
}

function notOpenNewPage(evt) {
  evt.preventDefault();
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: "250",
});
