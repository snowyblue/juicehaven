
function createHero() {

    console.log('create hero func')

    const hero = document.createElement('div')
    hero.classList.add('hero')

    const heroText = document.createElement('div')
    heroText.classList.add('heroText')

    const h1 = document.createElement('h1')
    h1.innerText = "Juice Haven"
    const p = document.createElement('p')
    p.innerText = 'Fresh Smoothies and Juices from exotic fruits'

    heroText.append(h1, p)

    const juiceImage = document.createElement("img");
    juiceImage.classList.add('juiceImg')
    juiceImage.src = "images/juicehero.jpeg";
    juiceImage.alt = "juice and fruit";

    hero.append(heroText, juiceImage)

    return hero
}



function loadHome() {
    console.log('loadhome function')

    const maincontent = document.querySelector('#maincontent');
    maincontent.appendChild(createHero());

    return maincontent

}
export default loadHome;