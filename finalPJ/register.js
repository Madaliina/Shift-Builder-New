/* const userNameElement = document.getElementById("userName");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const firstNameElement = document.getElementById("firstName");
const secondNameElement = document.getElementById("secondName");
const ageElement = document.getElementById("age");
const registerButtonElement = document.getElementById("registerButton");
const errorMsgBox = document.getElementById("errorMsgBox")

let users = JSON.parse(localStorage.getItem("users")) || [];


registerButtonElement.addEventListener("click", () => {

    const userNameValue = userNameElement.value;
    const emailValue = emailElement.value;
    const passwordValue = passwordElement.value;
    const firstNameValue = firstNameElement.value;
    const secondNameValue = secondNameElement.value;
    const ageValue = ageElement.value;
    

    function validateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailElement.value)) {

        } else {
            errorMsgBox.innerText = "You have entered a invalid email adress!"
            return
        }
    }

    if (userNameValue.length < 6) {
        errorMsgBox.innerText = "Your username must be at least 6 characters."
        return
    }
    if (passwordValue.length < 6) {
        errorMsgBox.innerText = "Your password must be at least 6 characters."
        return
    }
    if (firstNameValue.length < 2) {
        errorMsgBox.innerText = "Your first name must be at least 2 characters."
        return
    }
    if (secondNameElement.value.length < 2) {
        errorMsgBox.innerText = "Your second name must be at least 2 characters."
        return
    }
    const newRegisteredUser = {
        userName: userNameValue,
        email: emailValue,
        password: passwordValue,
        firstName: firstNameValue,
        secondName: secondNameValue,
        age: ageValue
    }
    validateEmail();
    users.push(newRegisteredUser);
    localStorage.setItem('users', JSON.stringify(users));
})

//////// conditions for validate register formular
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("succes");
};

const setSucces = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classList.add("succes");
  inputControl.classList.remove("error");
};

const validateInputs = () => {
  const newUserName = userNameElement.value.trim();
  const newEmail = emailElement.value.trim();
  const newPassword = passwordElement.value.trim();
  const newFirstName = firstNameElement.value.trim();
  const newSecondName = secondNameElement.value.trim();
  const newAge = ageElement.value.trim();

  if (newUserName === "") {
    setError(newUserName, "Username is required");
  } else {
    setSucces(newUserName);
  }
};

 */










// I  make new constants for all input and take all this from the HTML Page with get element
const formElement = document.getElementById("form");
const userNameElement = document.getElementById("userName");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const firstNameElement = document.getElementById("firstName");
const secondNameElement = document.getElementById("secondName");
const ageElement = document.getElementById("age");
const registerButtonElement = document.getElementById("registerButton");
const errorMsgBox = document.getElementById("errorMsgBox");

// miss save to Local Storage Code
registerButtonElement.addEventListener("click" , (e)  => { 
    e.preventDefault();
    const newUserName = userNameElement.value;
    const newEmail = emailElement.value;
    const newPassword = passwordElement.value;
    const newFirstName = firstNameElement.value;
    const newSecondName = secondNameElement.value;
    const newAge = ageElement.value;

console.log(newSecondName);

// cum fac sa imi apara eroarea daca userul nu respecta cerintele pana sa ajunga la botonul de register?

function validateEmail() {
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailElement.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

if (newUserName.length < 6) {
    errorMsgBox.innerText = "Your username must be at least 6 characters."
    return 
}
if (newPassword.length < 6) {
    errorMsgBox.innerText = "Your password must be at least 6 characters."
    return 
}
if (newFirstName.length < 2) {
    errorMsgBox.innerText = "Your first name must be at least 2 characters."
    return 
}
if (newSecondName.length < 2) {
    errorMsgBox.innerText = "Your second name must be at least 2 characters."
    return 
}

validateEmail();
});





