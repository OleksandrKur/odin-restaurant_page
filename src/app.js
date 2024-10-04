import {greeting} from './greeting.js';
import'./styles.css';

const body = document.querySelector("body");
const heading = document.createElement("h1");
heading.textContent = greeting;
body.appendChild(heading)
