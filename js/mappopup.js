var mapLink = document.querySelector(".contact-map");
var popupMap = document.querySelector(".modal-map");
var mapClose = popupMap.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
  popupMap.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupMap.classList.contains("modal-show")) {
      evt.preventDefault();
      popupMap.classList.remove("modal-show");
    }
  }
})
