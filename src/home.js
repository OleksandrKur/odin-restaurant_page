import {city, homeHeading, homeDescription} from "./content.js"

class Home{
    constructor(heading, description){
        this.heading = heading;
        this.description = description;
        this.contentWrapper = document.querySelector(".content");
        this.homeHeading = document.createElement("h1");
        this.homeDescription = document.createElement("p");
    }
    generateContent(){
        this.clearContent()
        this.homeHeading.textContent = this.heading;
        this.homeDescription.innerHTML = this.description;
        this.contentWrapper.appendChild(this.homeHeading);
        this.contentWrapper.appendChild(this.homeDescription);
    }
    clearContent(){
        let child = this.contentWrapper.lastElementChild;
        while (child) {
            this.contentWrapper.removeChild(child);
            child = this.contentWrapper.lastElementChild;
        }
    }

}


export const home = new Home(homeHeading, homeDescription);