// I  make new constants for all input and take all this from the HTML Page with get element
const formElement = document.getElementById("form");
const userNameElement = document.getElementById("userName");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
//const repeatpasswordElement = document.getElementById("repeat-password");
const firstNameElement = document.getElementById("firstName");
const secondNameElement = document.getElementById("secondName");
const ageElement = document.getElementById("age");
const registerButtonElement = document.getElementById("registerButton");
const errorMsgBox = document.getElementById("errorMsgBox");

let users = JSON.parse(localStorage.getItem("users")) || [];

registerButtonElement.addEventListener("click", (e) => {
  e.preventDefault();
  const newUserName = userNameElement.value;
  const newEmail = emailElement.value;
  const newPassword = passwordElement.value;
  const newFirstName = firstNameElement.value;
  const newSecondName = secondNameElement.value;
  const newAge = ageElement.value;

  if (newUserName.length < 6) {
    errorMsgBox.innerText = "Your username must be at least 6 characters.";
    return;
  }
  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailElement.value) ) {
  } else {
    errorMsgBox.innerText = "You have entered a invalid email adress!";
    return;
  }
  if (newPassword.length < 6) {
    errorMsgBox.innerText = "Your password must be at least 6 characters.";
    return;
  }
  if (newFirstName.length < 2) {
    errorMsgBox.innerText = "Your first name must be at least 2 characters.";
    return;
  }
  if (newSecondName.length < 2) {
    errorMsgBox.innerText = "Your second name must be at least 2 characters.";
    return;
  }

  const registeredUsers = {
    registeredUserName : userNameElement.value,
    registeredEmail : emailElement.value,
    registeredPassword : passwordElement.value,
    registeredFirstName : firstNameElement.value,
    registeredSecondName : secondNameElement.value,
    registeredAge : ageElement.value
  };


  //After a successful registration, the user will go to the home page, which includes a top bar menu.

  users.push(registeredUsers);
  localStorage.setItem(registeredUsers.registeredEmail, JSON.stringify(registeredUsers));
});



