(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelectorAll("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  for (let i = 0; i < refs.closeModalBtn.length; i += 1) {
    refs.closeModalBtn[i].addEventListener("click", toggleModal);
  };

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();