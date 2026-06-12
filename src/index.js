import "./styles.css";
import { renderHome } from "./home.js";

const nav = document.querySelector("nav");

nav.addEventListener("click", updateScreen);

function updateScreen(e) {
  const clickedBtn = e.target.dataset.page;

  if (clickedBtn === "home") {
    console.log("you clicked home-button");
    renderHome();
  } else if (clickedBtn === "menu") {
    console.log("you clicked menu-button");
  } else {
    console.log("you clicked about-button");
  }
}
