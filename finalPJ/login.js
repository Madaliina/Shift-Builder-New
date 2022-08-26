const loginForm = document.getElementById("login-form");
const loggedUserNameElement = document.getElementById("userName-login");
const loggedPasswordElement = document.getElementById("password-login");
const loginButton = document.getElementById("login-button");
const loginRegisterButton = document.getElementById("button-register");
const resetButtonLogin = document.getElementById("button-reset");


loginButton.addEventListener("click", () => {
    const loggedUserName = loggedUserNameElement.value;
    const loggedPassword = loggedPasswordElement.value; 


    console.log(loggedUserName);
    console.log(loggedPassword);
   /*  users.push(newLoginUser);
    localStorage.setItem('users', JSON.stringify(users)); */
});

//let loginUsers = JSON.parse(localStorage.getItem("users")) || [];





