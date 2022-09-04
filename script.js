const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submitButton = document.querySelector("button");

const firstNameError = document.querySelector(".first-name-error");
const lastNameError = document.querySelector(".last-name-error");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const enableButton = () => {
  submitButton.classList.remove("disabled");
  submitButton.disabled = false;
};

const disableButton = () => {
  submitButton.classList.add("disabled");
  submitButton.disabled = true;
};

// if no first name, show first name error

// check if there's a first name entered
firstName.addEventListener("blur", (event) => {
  const firstName = event.target.value;

  if (!firstName) {
    firstNameError.classList.remove("hidden");
    disableButton();
  }
});

// if no last name, show last name error
lastName.addEventListener("blur", (event) => {
  const lastName = event.target.value;

  if (!lastName) {
    lastNameError.classList.remove("hidden");
    disableButton();
  } else {
    enableButton();
  }
});

// if email format is bad, show email error
email.addEventListener("blur", (event) => {
  const email = event.target.value;
  const isValid = validateEmail(email);

  if (email || !isValid) {
    emailError.classList.remove("hidden");
    disableButton();
  } else {
    enableButton();
  }
});

// if no password, show password error
password.addEventListener("blur", (event) => {
  const password = event.target.value;

  if (!password) {
    passwordError.classList.remove("hidden");
    disableButton();
  } else {
    enableButton();
  }
});
