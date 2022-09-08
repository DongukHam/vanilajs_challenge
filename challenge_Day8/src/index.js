const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];

  const body = document.querySelector("body");
  const button = document.querySelector("body button");

  function colorGradient(event) {
    event.preventDefault();
    const newColors = [].concat(colors);
    const colFir = newColors[Math.floor(Math.random() * newColors.length)];
    const colFirIndex = newColors.indexOf(colFir);
    newColors.splice(colFirIndex,1);
    const colSec = newColors[Math.floor(Math.random() * newColors.length)];
    const deg = 90;
    body.style.backgroundImage = `linear-gradient(${deg}deg,${colFir}, ${colSec})`;

  };

button.addEventListener("click", colorGradient);
