const BODY = document.querySelector("body");
const H2 = document.createElement("h2");
H2.innerText = "Hello!";
BODY.appendChild(H2);

function bgColorChange() {
  const windowWidth = window.innerWidth;
  const WIDE = "wide";
  const MEDIUM = "medium";
  const SHORT = "short";
  if (windowWidth > 800) {
    // BODY.className = WIDE;

    BODY.classList.add(WIDE);
    BODY.classList.remove(MEDIUM);
    BODY.classList.remove(SHORT);
  } else if (windowWidth <= 800 && windowWidth > 600) {
    // BODY.className = MEDIUM;
    BODY.classList.add(MEDIUM);
    BODY.classList.remove(WIDE);
    BODY.classList.remove(SHORT);
  } else if (windowWidth < 600) {
    // BODY.className = SHORT;
    BODY.classList.add(SHORT);
    BODY.classList.remove(WIDE);
    BODY.classList.remove(MEDIUM);
  }
}

bgColorChange();
window.onresize = function () {
  bgColorChange();
};

// window.addEventListener("resize", bgColorChange);

// window.onresize = function(event){
//   bgColorChange();
// }
