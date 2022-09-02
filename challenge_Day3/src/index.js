// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const contents = document.querySelector("body h2");

const superEventHandler = {
  mouseoverHandler: function () {
    contents.innerText = "The mouse is here!";
    contents.style.color = colors[Math.floor(Math.random() * colors.length)];
  },
  mouseoutHandler: function () {
    contents.innerText = "The mouse is gone!";
    contents.style.color = colors[Math.floor(Math.random() * colors.length)];
  },
  resizeHandler: function () {
    contents.innerText = "You just resized!";
    contents.style.color = colors[Math.floor(Math.random() * colors.length)];
  },
  contextmenuHandler: function () {
    contents.innerText = "That was a right click!";
    contents.style.color =
      contents[Math.floor(Math.random() * contents.length)];
  }
};

contents.addEventListener("mouseover", superEventHandler.mouseoverHandler);
contents.addEventListener("mouseout", superEventHandler.mouseoutHandler);
window.addEventListener("resize", superEventHandler.resizeHandler);
window.addEventListener("contextmenu", superEventHandler.contextmenuHandler);

// contents.addEventListener("mouseover", (event) => {
//   event.target.innerText = "The mouse is here!";
//   event.target.style.color = colors[Math.floor(Math.random() * colors.length)];
// });

// contents.addEventListener("mouseout", (event) => {
//   event.target.innerText = "The mouse is gone!";
//   event.target.style.color = colors[Math.floor(Math.random() * colors.length)];
// });

// window.addEventListener("resize", function () {
//   contents.innerText = "You just resized!";
//   contents.style.color = colors[Math.floor(Math.random() * colors.length)];
// });

// window.addEventListener("contextmenu", (event) => {
//   contents.innerText = "That was a right click!";
//   contents.style.color = contents[Math.floor(Math.random() * contents.length)];
// });
