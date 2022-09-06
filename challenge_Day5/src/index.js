const maxNum = document.querySelector(".maxNumber input");
const resultMent = document.querySelector(".resultMent");
const selectNum = document.querySelector(".inputNumber input");
const button = document.querySelector("button");
const BODY = document.querySelector("body")

const H3 = document.createElement("h3");
resultMent.appendChild(H3);

const H2 = document.createElement("h2");
resultMent.appendChild(H2);

button.addEventListener("click",event => {
    event.preventDefault();
    
    const ranNum = Math.ceil(Math.random() * parseInt(maxNum.innerHTML));
    H3.innerText = `You chose: ${parseInt(selectNum.value)}, the machine chose: ${parseInt(ranNum)}.`;
   
    if(parseInt(selectNum.value) == ranNum){
        H2.innerText = "You Win!";
    } else {
        H2.innerText = "You Lost!";}
    });
    

console.log(document)