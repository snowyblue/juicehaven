
function createHeader() {

    console.log('create menu hero')

    const header = document.createElement('div')
    header.classList.add('header')

    const headerText = document.createElement('div')
    headerText.classList.add('headerText')

    const h1 = document.createElement('h1')
    h1.innerText = "Juice Haven Menu"
    const p = document.createElement('p')
    p.innerText = 'Fresh Smoothies and Juices'

    headerText.append(h1, p)

    header.append(headerText)

    return header
}

function displayMenu() {
    console.log('display menu')
    //loop through menu items to display
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const menuObjList = [
        {name: "Mango Passion", 
        description: "Fresh mango and passionfruit with a hint of lime"},
        {name: "Citrius Blast", 
        description: "Cas juice with orange"},
        {name: "Guanabana Strawberry",
        description: "Milky Guanabana with strawberry"},
        {name: "Berry Dreamland", 
        description: "Costa Rican blackberry milkshake"},
        {name: "Written in the Stars", 
        description: "Starfruit shake"},
        {name: "Endless Coco", 
        description: "Fresh Coconut with hint of pineapple"},

    ]

    menuObjList.forEach(drinkObj => {
        // console.log(drinkObj.description)
        let menuItem = createMenuItem(drinkObj.name, drinkObj.description)
        console.log(menuItem)
        menu.append(menuItem)
    })

    return menu

}

function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menuitem");
  
    const drinkName = document.createElement("h2");
    drinkName.textContent = name;
  
    const drinkDescription = document.createElement("p");
    drinkDescription.textContent = description;

    const drinkText = document.createElement("div");
    drinkText.append(drinkName, drinkDescription);
    drinkText.classList.add('drinkText')

    const drinkImage = document.createElement("img");
    drinkImage.src = `images/drinks/${name.toLowerCase()}.jpeg`;
    drinkImage.alt = `${name}`;
    drinkImage.classList.add('drinkImg')
  
    menuItem.append(drinkImage, drinkText);

    // console.log(menuItem)
  
    return menuItem;
  }

function loadMenu() {
    console.log('loadMenu function')
    const container = document.createElement('div')
    container.classList.add('container')
    container.append(createHeader())
    container.append(displayMenu())

    const maincontent = document.querySelector('#maincontent');
    maincontent.appendChild(container);

    return maincontent

}



export default loadMenu;