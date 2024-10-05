import {location, aboutUsHeading, aboutUstext, followUsHeading, followUsText} from "./content.js"

class AboutUs{
    constructor(heading, description, heading2, description2){
        this.heading = heading;
        this.description = description;
        this.heading2 = heading2;
        this.description2 = description2;
        this.contentWrapper = document.querySelector(".content");
        this.aboutUsHeading = document.createElement("h1");
        this.aboutUsDescription = document.createElement("p");
        this.aboutUsHeading2 = document.createElement("h1");
        this.aboutUsDescription2 = document.createElement("p");
    }
    generateContent(){
        this.clearContent()
        this.aboutUsHeading.textContent = this.heading;
        this.aboutUsDescription.innerHTML = this.description;
        this.aboutUsHeading2.textContent = this.heading2;
        this.aboutUsDescription2.innerHTML = this.description2;
        this.contentWrapper.appendChild(this.aboutUsHeading);
        this.contentWrapper.appendChild(this.aboutUsDescription);
        this.contentWrapper.appendChild(this.aboutUsHeading2);
        this.contentWrapper.appendChild(this.aboutUsDescription2);
    }
    clearContent(){
        let child = this.contentWrapper.lastElementChild;
        while (child) {
            this.contentWrapper.removeChild(child);
            child = this.contentWrapper.lastElementChild;
        }
    }

}


export const aboutUs = new AboutUs(aboutUsHeading, aboutUstext, followUsHeading, followUsText);