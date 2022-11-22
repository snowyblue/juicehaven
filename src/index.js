import loadHome from "./home";
import loadMenu from "./menu";
// import loadContact from "./contact";
import './style.css';

console.log('Heyo! Welcome to my restaurant')

function navigation() {
    // const element = document.querySelector('#content');
    // console.log(element)
    const navbar = document.createElement('nav')
    navbar.setAttribute("id", "nav");

    const buttonObj = [{text: "Home", buttonFunc: () => loadHome()}, {text: "Menu", buttonFunc: () => loadMenu()}] //{contact: loadContact}
    buttonObj.forEach(function(obj) {
        const navButton = document.createElement("button");
        navButton.classList.add('nav-button')
        navButton.innerText = obj.text;
        navButton.addEventListener("click", (e) => {
            if (e.target.classList.contains("active")) return;

            console.log("nav button clicked")

            //if not active, set as active and return the new page
            setActiveButton(navButton);
            //need to wipe the page
            const maincontent = document.querySelector('#maincontent');
            maincontent.innerHTML= ""
            obj.buttonFunc()

        })
        navbar.appendChild(navButton)
    })

    return navbar
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".nav-button");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
}


function initialize() {
    const content = document.querySelector('#content');
    const maincontent = document.querySelector('#maincontent');
    
    content.insertBefore(navigation(), maincontent);
    loadHome()

    // element.appendChild(loadHome());
}

initialize();