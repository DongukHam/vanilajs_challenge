const LoginJoin = document.querySelector("#login-join");

const HIDDEN_CLASSNAME = "hidden";

function buttonHandler(event) {
    event.preventDefault();
    LoginJoin.classList.add(HIDDEN_CLASSNAME);
};

LoginJoin.addEventListener("submit", buttonHandler);
