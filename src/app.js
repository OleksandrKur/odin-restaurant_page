import'./styles.css';
import {home} from "./home.js"
import {menuPage} from "./menu.js"
import {aboutUs} from "./about.js"


const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");


home.generateContent();
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