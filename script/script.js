const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal__content");
const inputNameUser = document.querySelector(".modal__input");
const inputAboutUser = document.querySelectorAll(".modal__input")[1];
const saveButton = document.querySelector(".modal__submit");
const closeButton = document.querySelector(".modal__close");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const editProfileButton = document.querySelector(".profile__button-edit");

editProfileButton.addEventListener("click", () => {
  modal.classList.add("modal_open");
});

closeButton.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("modal_open");
});

function handleProfileFormSubmit(e) {
  e.preventDefault();
  modal.classList.remove("modal_open");
  profileName.textContent = inputNameUser.value;
  profileAbout.textContent = inputAboutUser.value;
}

modalContent.addEventListener("submit", handleProfileFormSubmit);
