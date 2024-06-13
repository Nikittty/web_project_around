// utils.js
export function openModal(modalElement) {
  modalElement.classList.add("modal_opened");
}

export function closeModal(modalElement) {
  modalElement.classList.remove("modal_opened");
}

export function handleOverlayClick(event) {
  if (event.target.classList.contains("modal__overlay")) {
    closeModal(event.target.closest(".modal"));
  }
}
