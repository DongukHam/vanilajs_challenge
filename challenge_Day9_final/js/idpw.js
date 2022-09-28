
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
    greetingHandler(username);
};

IdPw.addEventListener("submit", idpwHandler);

const greeting = document.querySelector("#greeting");

function greetingHandler(username) {
    // const savedUsername = localStorage.getItem(USER_INFO);
    // if(savedUsername.id !== idInput.value || savedUsername.password !== pwInput) {
    //     alert("Please check your ID and PW");
    // } else{
        const savedUsername = localStorage.getItem(USER_INFO);
        const parsedUserInfo = JSON.parse(savedUsername);
    if(savedUsername === null) {
        // localStorage.setItem(USER_INFO, JSON.stringify(idpw));   
        alert("옵션1");
        // greetingHandler(username); 
    }else if((savedUsername !== null) && (parsedUserInfo.id === stringify(idInput.value) && parsedUserInfo.password === stringify(pwInput))){
        
        alert(`welcome back ${username}`);
        console.log("옵션2");
    }else if((savedUsername !== null) && (parsedUserInfo.id !== idInput.value || parsedUserInfo.password !== pwInput)){
        alert("Please check your ID and PW");
        console.log("옵션3");
    };

        LoginJoin.classList.add(HIDDEN_CLASSNAME);
        IdPw.classList.add(HIDDEN_CLASSNAME);
        // if(newIdPw.id === idInput.value && newIdPw.password === pwInput.value) {
        greeting.innerHTML = `Hello ${username}`;
        const button = document.createElement("button");
        button.innerHTML = "Logout"
        button.style.marginLeft = "15px";
        greeting.appendChild(button);
        button.addEventListener("click", deleteUser);
        console.log("실행완료")
    // }
    
    
    // } else {
    //     alert("Please check your ID and Password")
    };
    
// }



// --------------------------------------------------------------------------





// if(savedUsername === null) {
//     LoginJoin.classList.remove(HIDDEN_CLASSNAME);
//     IdPw.classList.add(HIDDEN_CLASSNAME);
// }else{
//     greetingHandler(savedUsername);
// }


