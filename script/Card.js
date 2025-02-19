class Card {
  constructor({ name, link }, templateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => this._handleLikeButton());
    this._deleteButton.addEventListener("click", () => this._handleDeleteButton());
    this._cardImage.addEventListener("click", () => this._handleCardClick(this._name, this._link));
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
