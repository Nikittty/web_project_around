// index.js
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { openModal, closeModal, handleOverlayClick } from "./utils.js";

// Profile elements
const profileNameElement = document.querySelector(".profile__name");
const profileAboutElement = document.querySelector(".profile__about");
const profileEditButton = document.querySelector(".profile__edit-button");
const editModalElement = document.querySelector("#edit-profile-modal");
const formElement = document.querySelector(".modal__form");
const nameInput = document.querySelector(".modal__input_name");
const aboutInput = document.querySelector(".modal__input_about");

// Add image elements
const profileAddButton = document.querySelector(".profile__add-button");
const addImageModalElement = document.querySelector("#add-image-modal");
const titleInput = document.querySelector(".modal__input_title");
const imageInput = document.querySelector("#modal__input_image");

// Card template and area
const cardTemplateSelector = ".template-card";
const cardArea = document.querySelector(".cards");

// Initial cards data
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

// Function to set modal input values
const setModalInput = () => {
  nameInput.value = profileNameElement.textContent;
  aboutInput.value = profileAboutElement.textContent;
};

// Handle profile form submission
const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();
  profileNameElement.textContent = nameInput.value;
  profileAboutElement.textContent = aboutInput.value;
  closeModal(editModalElement);
};

// Render initial cards
const renderInitialCards = () => {
  initialCards.forEach((data) => {
    const card = new Card(data, cardTemplateSelector);
    cardArea.append(card.generateCard());
  });
};

// Form validation configuration
const validationConfig = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

// Initialize form validators
const formValidators = {};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute("name");
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

// Event listeners
profileEditButton.addEventListener("click", () => {
  setModalInput();
  openModal(editModalElement);
});

formElement.addEventListener("submit", handleProfileFormSubmit);

profileAddButton.addEventListener("click", () => {
  openModal(addImageModalElement);
});

addImageModalElement
  .querySelector(".modal__close-button")
  .addEventListener("click", () => {
    closeModal(addImageModalElement);
  });

document.querySelectorAll(".modal__close-button").forEach((button) => {
  button.addEventListener("click", (evt) => {
    closeModal(evt.target.closest(".modal"));
  });
});

document.querySelectorAll(".modal__overlay").forEach((overlay) => {
  overlay.addEventListener("click", handleOverlayClick);
});

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    document.querySelectorAll(".modal").forEach((modal) => {
      closeModal(modal);
    });
  }
});

renderInitialCards();
enableValidation(validationConfig);
