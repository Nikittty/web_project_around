// Card.js
class Card {
  constructor({ name, link }, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _handleLikeButton() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  _handleDeleteButton() {
    this._element.remove();
    this._element = null;
  }

  _handleOpenImage() {
    const modalImage = document.querySelector(".modal__image");
    const modalImageTitle = document.querySelector(".modal__image-title");
    const modalImageOpen = document.querySelector("#modal_image-open");

    modalImage.src = this._link;
    modalImage.alt = this._name;
    modalImageTitle.textContent = this._name;
    modalImageOpen.classList.add("modal_opened");

    const closeImage = document.querySelector("#modal__close-image");
    closeImage.addEventListener("click", () => {
      modalImageOpen.classList.remove("modal_opened");
    });
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => this._handleLikeButton());
    this._deleteButton.addEventListener("click", () =>
      this._handleDeleteButton()
    );
    this._cardImage.addEventListener("click", () => this._handleOpenImage());
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".card__photo");
    this._likeButton = this._element.querySelector(".card__like-button");
    this._deleteButton = this._element.querySelector(".card__delete-button");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(".card__info-name").textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}

export default Card;
