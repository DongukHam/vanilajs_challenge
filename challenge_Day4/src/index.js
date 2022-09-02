const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

// document.creatElement("h2");
document.body.appendChild("h2");

const windowWidth = window.innerWidth;
const widthFirst = windowWidth * 0.8;
const widthSecond = windowWidth * 0.5;


function bgColorChange() {
  if(windowWidth > widthFirst){
    document.body.h2.classList.add("main");
  } else if(windowWidth <= widthFirst && windowWidth > widthSecond){
    // document.body.h2.classList.remove();
    document.body.h2.classList.add("mid");
  } else {
    document.body.h2.classList.add("last");    
  }
};



    
// document.body.style.backgroundColor = colors[Math.floor(Math.random,() * colors.length)];
