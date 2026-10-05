// src/index.js
import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./MENU.JS";
import { loadAbout } from "./about.js";

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

function clearContent() {
  content.textContent = "";
}

// Carga inicial al abrir el sitio
loadHome();

// Listeners de los botones de navegación
homeBtn.addEventListener("click", () => {
  clearContent();
  loadHome();
});

menuBtn.addEventListener("click", () => {
  clearContent();
  loadMenu();
});

aboutBtn.addEventListener("click", () => {
  clearContent();
  loadAbout();
});