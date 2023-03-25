import './style.css';

const path = "./assets/img/"
const iconPath = "logo-alura.png";
const describe = "logo da alura para carta";

function CardGame(icon = iconPath, alt = describe) {
    return /*html*/ `
        <article class="card-game">
            <img src="${path}/${icon}" alt="${describe}">
        </article>
    `;
} 

export default CardGame;
