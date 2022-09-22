
const idInput = document.querySelector("#idpw-form .id");
const pwInput = document.querySelector("#idpw-form .password");
const submitButton = document.querySelector("#idpw-form input:last-child");


const USER_key = "username";
const USER_value = "password";

function idpwHandler(event) {
    event.preventDefault();
    const username = idInput.value;
    // const password = pwInput.value;
    localStorage.setItem(USER_key, username);
        // localStorage.setItem(USER_value, password);
    greetingHandler(username);
    username= " ";
};

submitButton.addEventListener("submit", idpwHandler);

const greeting = document.querySelector("#greeting");

function greetingHandler(username) {
    LoginJoin.classList.add(HIDDEN_CLASSNAME);
    IdPw.classList.add(HIDDEN_CLASSNAME);
    greeting.innerHTML = `Hello ${username}`;
};

const savedUsername = localStorage.getItem(USER_key);

if(savedUsername === null) {
    LoginJoin.classList.add(HIDDEN_CLASSNAME);
    IdPw.classList.remove(HIDDEN_CLASSNAME);
}else{
    greetingHandler(savedUsername);
};

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

