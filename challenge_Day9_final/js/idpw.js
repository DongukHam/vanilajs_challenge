const idInput = document.querySelector("#idpw-form input:first-child");
const pwInput = document.querySelector("#idpw-form input:nth-child(2)");
const submitButton = document.querySelector("#idpw-form input:last-child");


const USER_key = "username";
const USER_value = "password";

function idpwHandler() {
    // event.preventDefault();
    // const username = document.querySelector("#idpw-form input:first-child").value;
    // const password = pwInput.value;
    localStorage.setItem(USER_key, idInput.value);
        // localStorage.setItem(USER_value, password);
    greetingHandler(username);
};

submitButton.addEventListener("submit", idpwHandler);

const greeting = document.querySelector("#greeting");

function greetingHandler(username) {
    greeting.innerHTML = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USER_key);

if(savedUsername === null) {
    IdPw.classList.add(HIDDEN_CLASSNAME);
    IdPw.addEventListener("submit", idpwHandler);
}else{
    greetingHandler(savedUsername);

}

// function paintGreetings(username) {
//     greeting.innerHTML = `Hello ${username}`;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
//     const button = document.createElement("button");
//     button.innerText = "Logout";
//     greeting.appendChild(button);
//     button.addEventListener("click", deleteUser);
// // }

// if(savedUsername === null) {
//     loginForm.classList.remove(HIDDEN_CLASSNAME);
//     loginForm.addEventListener("submit", onLoginSubmit);
// }else{
//     paintGreetings(savedUsername);

// }

