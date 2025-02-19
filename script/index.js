import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import { openModal, closeModal, handleOverlayClick } from "./utils.js";

// Perfil
const profileNameElement = document.querySelector(".profile__name");
const profileAboutElement = document.querySelector(".profile__about");
const profileEditButton = document.querySelector(".profile__edit-button");
const editModalElement = document.querySelector("#edit-profile-modal");
const formElement = document.querySelector(".modal__form");
const nameInput = document.querySelector(".modal__input_name");
const aboutInput = document.querySelector(".modal__input_about");

// Agregar imagen
const profileAddButton = document.querySelector(".profile__add-button");
const addImageModalElement = document.querySelector("#add-image-modal");
const titleInput = document.querySelector(".modal__input_title");
const imageInput = document.querySelector("#modal__input_image");

// Área de tarjetas
const cardTemplateSelector = ".template-card";
const cardArea = document.querySelector(".cards");

// Popup de imagen
const imagePopup = new PopupWithImage("#modal_image-open");
imagePopup.setEventListeners();

// Manejo de la información del usuario
const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__about",
});

// Formulario de edición de perfil
const editProfilePopup = new PopupWithForm("#edit-profile-modal", (formData) => {
  userInfo.setUserInfo({ name: formData.name, job: formData.job });
});
editProfilePopup.setEventListeners();

profileEditButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  aboutInput.value = userData.job;
  editProfilePopup.open();
});

// Formulario para agregar una nueva tarjeta
const addCardPopup = new PopupWithForm("#add-image-modal", (formData) => {
  const newCard = new Card(
    { name: formData.title, link: formData.image },
    cardTemplateSelector,
    (name, link) => imagePopup.open(name, link)
  );
  section.addItem(newCard.generateCard());
});
addCardPopup.setEventListeners();

profileAddButton.addEventListener("click", () => addCardPopup.open());

// Inicializar tarjetas
const section = new Section(
  {
    items: [
      { name: "Forks", link: "https://images.unsplash.com/photo-1495439043526-adbb78cc5972" },
      { name: "Pennsylvania", link: "https://images.unsplash.com/photo-1603403452056-8606c747a06a" }
    ],
    renderer: (item) => {
      const card = new Card(item, cardTemplateSelector, (name, link) => imagePopup.open(name, link));
      section.addItem(card.generateCard());
    }
  },
  ".cards"
);

section.renderItems();
