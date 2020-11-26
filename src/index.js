// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const Colors = ["#f7ca18", "#8c14fc", "#1f3a93"];

window.addEventListener("resize", handleSizeChange);

function handleSizeChange() {
  if (1300 < window.innerWidth) {
    document.body.style.backgroundColor = Colors[0];
  } else if (900 < window.innerWidth && window.innerWidth <= 1299) {
    document.body.style.backgroundColor = Colors[1];
  } else {
    document.body.style.backgroundColor = Colors[2];
  }
}

function init() {
  handleSizeChange();
}

init();
