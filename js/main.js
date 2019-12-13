/* Вызов модалки "Обратная связь" */
var feedbacklink = document.querySelector(".feedback");
var popupfeedback = document.querySelector(".modal-feedback");
var feedbackclose = popupfeedback.querySelector(".modal-close");
var login = popupfeedback.querySelector("[name=yourname]");

var email = popupfeedback.querySelector("[name=email]");
var feedbackform = popupfeedback.querySelector(".feedback-form");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

feedbacklink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupfeedback.classList.add("modal-show");

  if (storage) {
    login.value = storage;
    email.focus();
  }
  else {
    login.focus();
  }
});

feedbackclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupfeedback.classList.remove("modal-show");
});

feedbackform.addEventListener("submit", function(evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    console.log("Нужно ввести логин и пароль");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popupfeedback.classList.contains("modal-show")) {
      evt.preventDefault();
      popupfeedback.classList.remove("modal-show");
    }
  }
})
