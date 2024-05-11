// Elementos de perfil
const profileNameElement = document.querySelector(".profile__name");
const profileAboutElement = document.querySelector(".profile__about");

const profileName = profileNameElement.textContent;
const profileAbout = profileAboutElement.textContent;

const profileEditButton = document.querySelector(".profile__edit-button");
const editModalElement = document.querySelector(".modal");

const formElement = document.querySelector(".modal__form");
const nameInput = document.querySelector(".modal__input_name");
const aboutInput = document.querySelector(".modal__input_about");
const closeButtonModal = document.querySelector(".modal__close-button");

// Elementos de agregar imagen
const profileAddButton = document.querySelector(".profile__add-button");
const addImageModalElement = document.querySelector("#add-image-modal");
const titleInput = document.querySelector(".modal__input_title");
const imageInput = document.querySelector("#modal__input_image");

// Elementos de plantilla de tarjeta
const cardTemplate = document.querySelector(".template-card");
const cardArea = document.querySelector(".cards");

const groupImage = document.getElementById("add-image-modal");
const formCard = groupImage.querySelector(".modal__form");

// Tarjetas iniciales
const initialCards = [
  {
    name: "Forks",
    link: "https://images.unsplash.com/photo-1495439043526-adbb78cc5972?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Pennsylvania",
    link: "https://images.unsplash.com/photo-1603403452056-8606c747a06a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "New Orleans",
    link: "https://images.unsplash.com/photo-1571893544028-06b07af6dade?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Boston",
    link: "https://images.unsplash.com/photo-1609649820825-b0595212a8d4?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Brooklyn Bridge",
    link: "https://images.unsplash.com/photo-1559364435-0d00a3a6f55d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cleveland",
    link: "https://images.unsplash.com/photo-1604448446634-6afe5d3882c5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Elementos del modal de imagen
const modalImageOpen = document.querySelector("#modal_image-open");
const closeImage = document.querySelector("#modal__close-image");
const modalImageTitle = document.querySelector(".modal__image-title");
const modalImage = document.querySelector(".modal__image");

// Variables de perfil inicial
let initialProfileName = profileName;
let initialProfileAbout = profileAbout;

// Overlays
const overlayEdit = document.querySelector("#modal-overlay-edit");
const overlayAdd = document.querySelector("#modal-overlay-add");
const overlayImage = document.querySelector("#modal-overlay-image");

// Función para establecer los valores de entrada del modal
function setModalInput() {
  nameInput.value = initialProfileName;
  aboutInput.value = initialProfileAbout;
}

// Función para abrir el modal
function openModal() {
  editModalElement.classList.add("modal_opened");
  overlayEdit.addEventListener("click", handleOverlayClick);
}

// Manejador de eventos para abrir el modal
function handleModalClick(event) {
  setModalInput();
  openModal();
}

// Función para cerrar el modal
function closeModal() {
  editModalElement.classList.remove("modal_opened");
  overlayEdit.removeEventListener("click", handleOverlayClick);
}

// Manejador de eventos para enviar el formulario del perfil
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = nameInput.value;
  profileAboutElement.textContent = aboutInput.value;
  initialProfileName = nameInput.value;
  initialProfileAbout = aboutInput.value;
  closeModal();
}

// Función para abrir el modal de agregar imagen
function openAddImageModal() {
  addImageModalElement.classList.add("modal_opened");
  overlayAdd.addEventListener("click", handleOverlayClick);
}

// Manejador de eventos para abrir el modal de agregar imagen
function handleAddImageClick(event) {
  openAddImageModal();
}

// Función para cerrar el modal de agregar imagen
function closeAddImageModal() {
  addImageModalElement.classList.remove("modal_opened");
  overlayAdd.removeEventListener("click", handleOverlayClick);
}

// Manejador de eventos para enviar el formulario de agregar imagen
function handleAddImageFormSubmit(evt) {
  evt.preventDefault();
  const newImageTitle = titleInput.value;
  const newImageUrl = imageInput.value;
  closeAddImageModal();
}

// Función para generar una tarjeta
function cardGenerator(title, link) {
  const card = cardTemplate.cloneNode(true).content.querySelector(".card");
  const cardImage = card.querySelector(".card__photo");
  const cardTitle = card.querySelector(".card__info-name");
  const likeButton = card.querySelector(".card__like-button");
  const deleteButton = card.querySelector(".card__delete-button");
  cardImage.src = link;
  cardTitle.textContent = title;
  cardImage.alt = title;
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("card__like-button_active");
  });
  deleteButton.addEventListener("click", function () {
    card.remove();
  });
  cardImage.addEventListener("click", function () {
    handleOpenImage(title, link);
  });
  return card;
}

// Generar tarjetas iniciales
initialCards.forEach(function (element) {
  const newCard = cardGenerator(element.name, element.link);
  cardArea.append(newCard);
});

// Manejador de eventos para enviar el formulario de agregar tarjeta
function handleAddCardSubmit(evt) {
  evt.preventDefault();
  if (evt.submitter.classList.contains("modal__save-button")) {
    const newCard = cardGenerator(titleInput.value, imageInput.value);
    cardArea.prepend(newCard);
  }
  closeAddImageModal();
}

// Función para cerrar la modal de imagen
function handleCloseImage() {
  modalImageOpen.classList.remove("modal_opened");
  overlayImage.removeEventListener("click", handleOverlayClick);
}

// Función para abrir la modal de imagen
function handleOpenImage(title, link) {
  modalImage.src = link;
  modalImageTitle.textContent = title;
  modalImageOpen.classList.add("modal_opened");
  closeImage.addEventListener("click", handleCloseImage);
  overlayImage.addEventListener("click", handleOverlayClick);
}

// Función para manejar el clic en el overlay
function handleOverlayClick(event) {
  if (event.target.classList.contains("modal__overlay")) {
    closeModal();
    closeAddImageModal();
    handleCloseImage();
  }
}

// Función para cerrar con la tecla "Escape"
function closeWithEsc(event) {
  if (event.key === "Escape") {
    closeModal();
    closeAddImageModal();
    handleCloseImage();
  }
}

// Event listeners
profileEditButton.addEventListener("click", handleModalClick);
formElement.addEventListener("submit", handleProfileFormSubmit);

profileAddButton.addEventListener("click", handleAddImageClick);
formCard.addEventListener("submit", handleAddCardSubmit);

addImageModalElement
  .querySelector(".modal__close-button")
  .addEventListener("click", closeAddImageModal);
addImageModalElement
  .querySelector(".modal__form")
  .addEventListener("submit", handleAddImageFormSubmit);

// Event listeners para clics en overlay
overlayEdit.addEventListener("click", handleOverlayClick);
overlayAdd.addEventListener("click", handleOverlayClick);
overlayImage.addEventListener("click", handleOverlayClick);
document.addEventListener("keydown", closeWithEsc);
