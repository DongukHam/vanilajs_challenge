const LoginJoin = document.querySelector("#login-join");
const IdPw = document.querySelector("#idpw-form");

const HIDDEN_CLASSNAME = "hidden";

function buttonHandler(event) {
    event.preventDefault();
    LoginJoin.classList.add(HIDDEN_CLASSNAME);
    IdPw.classList.remove(HIDDEN_CLASSNAME);
};

LoginJoin.addEventListener("submit", buttonHandler);


