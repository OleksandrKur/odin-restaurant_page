import'./styles.css';
import {home} from "./home.js"
import {menuPage} from "./menu.js"
import {aboutUs} from "./about.js"

home.generateContent()

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");

homeButton.addEventListener("click", (event) => {
    event.preventDefault();
    home.generateContent();
})
menuButton.addEventListener("click", (event) => {
    event.preventDefault();
    menuPage.generateContent();
})
aboutButton.addEventListener("click", (event) => {
    event.preventDefault();
    aboutUs.generateContent();
})