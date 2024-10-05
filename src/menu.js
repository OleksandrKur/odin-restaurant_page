import {menuHeading, menuDescription, menu} from "./content.js"

class Menu{
    constructor(heading, description, menu){
        this.heading = heading;
        this.description = description;
        this.menu = menu;
        this.contentWrapper = document.querySelector(".content");
        this.menuHeading = document.createElement("h1");
        this.menuDescription = document.createElement("p");
    }
    generateContent(){
        this.clearContent()
        this.menuHeading.textContent = this.heading;
        this.menuDescription.innerHTML = this.description;
        this.contentWrapper.appendChild(this.menuHeading);
        this.contentWrapper.appendChild(this.menuDescription);
        let menuwrapper = document.createElement("div");
        menuwrapper.classList.add("menu-wrapper");
        this.contentWrapper.appendChild(menuwrapper);
        this.appendMenuElements(this.menu, menuwrapper);
    }
    appendMenuElements(menu, targetElement){
        for (const [key, value] of Object.entries(menu)){
            const menuCategory = document.createElement("div");
            menuCategory.classList.add("menu-category");
            targetElement.appendChild(menuCategory);
            const menuCategoryName = document.createElement("h3");
            menuCategoryName.textContent = key;
            menuCategoryName.classList.add("menu-category-name");
            menuCategory.appendChild(menuCategoryName);
            value.forEach(meal => {
                let mealWrapper = document.createElement("div");
                mealWrapper.classList.add("meal-wrapper");
                menuCategory.appendChild(mealWrapper);
                this.addMealItem("h5", "item-name", meal.name, mealWrapper);
                this.addMealItem("p", "item-description", meal.description, mealWrapper);
                this.addMealItem("p", "item-size", meal.size, mealWrapper);
                this.addMealItem("p", "item-price", meal.price, mealWrapper);
                
            });
        }



    }
    addMealItem(htmlElement, className, content, targetElement){
        const mealItem = document.createElement(htmlElement);
        mealItem.classList.add(className);
        mealItem.textContent = content;
        targetElement.appendChild(mealItem);
    }

    clearContent(){
        let child = this.contentWrapper.lastElementChild;
        while (child) {
            this.contentWrapper.removeChild(child);
            child = this.contentWrapper.lastElementChild;
        }
    }

}

export const menuPage = new Menu(menuHeading, menuDescription, menu);