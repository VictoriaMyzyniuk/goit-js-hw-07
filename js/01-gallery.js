import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const imgMarkup = addGalleryElements(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", imgMarkup);
galleryEl.addEventListener("click", onGalleryClick);

let bigImgEl;

function addGalleryElements(elements) {
  return elements
    .map((el) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function notOpenNewPage(evt) {
  evt.preventDefault();
}

function onGalleryClick(evt) {
  notOpenNewPage(evt);
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  onModalOpen(evt);
}

function onEscapePress(evt) {
  const isEscKey = evt.code === "Escape";
  if (isEscKey) {
    onModalClose();
  }
}

function onModalOpen(evt) {
  bigImgEl = basicLightbox.create(
    `
       <img src="${evt.target.dataset.source}">
  `,
    {
      onClose: () => {
        window.removeEventListener("keydown", onEscapePress);
      },
    }
  );

  bigImgEl.show();
  window.addEventListener("keydown", onEscapePress);
}

function onModalClose() {
  bigImgEl.close();
  window.removeEventListener("keydown", onEscapePress);
}
