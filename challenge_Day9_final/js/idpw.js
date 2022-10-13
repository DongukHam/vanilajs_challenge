
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

function idpwHandler() {
    // const username = localStorage.getItem(USER_key);
    // const username = savedInfo.id;
    // console.log(username);
    const newIdPw = {
        id: idInput.value,
        password: pwInput.value,
    };
    console.log(idInput.value);
    const username = idInput.value;
    idpw.push(newIdPw);
    greetingHandler(username);
    localStorage.setItem(USER_INFO, JSON.stringify(idpw));
};



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
        console.log("실행완료")
    };
    
function submithandler(event){
    event.preventDefault();
    idpwHandler();
};

IdPw.addEventListener("submit", submithandler);


function idMatching(){
    
};



// if(savedUsername === null) {
//     LoginJoin.classList.remove(HIDDEN_CLASSNAME);
//     IdPw.classList.add(HIDDEN_CLASSNAME);
// }else{
//     greetingHandler(savedUsername);
// }


