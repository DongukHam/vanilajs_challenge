
const idInput = document.querySelector("#idpw-form .id");
const pwInput = document.querySelector("#idpw-form .password");
const submitButton = document.querySelector("#idpw-form input:last-child");


const USER_key = "username";
const USER_value = "password";

function idpwHandler(event) {
    // event.preventDefault();
    const username = idInput.value;
    // const password = pwInput.value;
    localStorage.setItem(USER_key, username);
        // localStorage.setItem(USER_value, password);
    greetingHandler(username);

}

IdPw.addEventListener("submit", idpwHandler);

const greeting = document.querySelector("#greeting");

function greetingHandler(username) {
    LoginJoin.classList.add(HIDDEN_CLASSNAME);
    IdPw.classList.add(HIDDEN_CLASSNAME);
    greeting.innerHTML = `Hello ${username}`;
    const button = document.createElement("button");
    button.innerHTML = "Logout"
    button.style.marginLeft = "15px";
    greeting.appendChild(button);
    button.addEventListener("click", deleteUser);
    
}

const savedUsername = localStorage.getItem(USER_key);

if(savedUsername === null) {
    LoginJoin.classList.remove(HIDDEN_CLASSNAME);
    IdPw.classList.add(HIDDEN_CLASSNAME);
}else{
    greetingHandler(savedUsername);
}

function deleteUser() {
    localStorage.removeItem(USER_key);
    window.location.reload()
}

