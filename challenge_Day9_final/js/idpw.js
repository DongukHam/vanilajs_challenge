
const idInput = document.querySelector("#idpw-form .id");
const pwInput = document.querySelector("#idpw-form .password");
const submitButton = document.querySelector("#idpw-form input:last-child");


const USER_key = "username";
const USER_value = "password";
const USER_INFO = "userinfo";
let idpw = [];

// function saveUserinfo() {
//     localStorage.setItem(USER_INFO, JSON.stringify(idpw));
// };

function deleteUser() {
    localStorage.removeItem(USER_INFO);
    window.location.reload()
};

function idpwHandler(event) {
    const username = idInput.value;
    // const pw = pwInput.value;
    const newIdPw = {
        id: idInput.value,
        password: pwInput.value,
    };
        // const parsednewIdPw = JOSN.parse(newIdPw);
    idpw.push(newIdPw);
    // event.preventDefault();
    // const password = pwInput.value;
    localStorage.setItem(USER_INFO, JSON.stringify(idpw));
        // localStorage.setItem(USER_value, password);
    greetingHandler(username);
};

IdPw.addEventListener("submit", idpwHandler);

const greeting = document.querySelector("#greeting");

function greetingHandler(username) {
    const savedUsername = localStorage.getItem(USER_INFO);
    if(savedUsername.id !== idInput.value || savedUsername.password !== pwInput) {
        alert("Please check your ID and PW");
    } else{
        LoginJoin.classList.add(HIDDEN_CLASSNAME);
        IdPw.classList.add(HIDDEN_CLASSNAME);
        // if(newIdPw.id === idInput.value && newIdPw.password === pwInput.value) {
        greeting.innerHTML = `Hello ${username}`;
        const button = document.createElement("button");
        button.innerHTML = "Logout"
        button.style.marginLeft = "15px";
        greeting.appendChild(button);
        button.addEventListener("click", deleteUser);
    }
    
    
    // } else {
    //     alert("Please check your ID and Password")
    }
    
// }



// --------------------------------------------------------------------------





// if(savedUsername === null) {
//     LoginJoin.classList.remove(HIDDEN_CLASSNAME);
//     IdPw.classList.add(HIDDEN_CLASSNAME);
// }else{
//     greetingHandler(savedUsername);
// }


