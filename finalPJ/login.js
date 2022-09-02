const loginForm = document.getElementById("login-form");
const loggedUserNameElement = document.getElementById("username-login");
const loggedPasswordElement = document.getElementById("password-login");
const loginButton = document.getElementById("login-button");
const loginRegisterButton = document.getElementById("button-register");
const resetButtonLogin = document.getElementById("button-reset"); //If the user forgets the password, he can reset it. But resetting the password at this point will delete all user data.


const errorMsgBox = document.getElementById("errorMsgBox");

let loggedUsers = JSON.parse(localStorage.getItem("loggedUsers")) || [];

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const loggedUserName = loggedUserNameElement.value;
    const loggedPassword = loggedPasswordElement.value; 
    
if(loggedUserName.length < 6) {
    errorMsgBox.innerText = "Your username must be at least 6 characters.";
    return;
}
if (loggedPassword.length < 6) {
    errorMsgBox.innerText = "Your password must be at least 6 characters.";
return;//cum fac sa nu imi mai apara eroarea la final chiar daca validarile sunt corecte?
}
console.log(loggedPassword);
const loginUsers = {
    loginUser : loggedUserNameElement.value,
    loginPassword : loggedPasswordElement.value
}
loggedUsers.push(loginUsers);
localStorage.setItem(loginUsers.loginUser, JSON.stringify(loginUsers));
});


// There should be a button to confirm registration??





