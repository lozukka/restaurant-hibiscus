import "./styles.css";
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
import { renderAbout } from "./about.js";

const nav = document.querySelector("nav");

nav.addEventListener("click", updateScreen);

function updateScreen(e) {
  const clickedBtn = e.target.dataset.page;
  if (!clickedBtn) return;

  if (clickedBtn === "home") {
    renderHome();
  } else if (clickedBtn === "menu") {
    renderMenu();
  } else {
    renderAbout();
  }
}

renderHome();
