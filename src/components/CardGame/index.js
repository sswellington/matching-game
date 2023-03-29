import './style.css';

const path = "./assets/img/logo-"
const aluraIcon = "alura.png";
const aluraAlt = "logo da alura";

function CardGame(icon = aluraIcon, alt = aluraAlt) {
    return /*html*/ `
        <article class="card-game">
            <img src="${path}${icon}" alt="${alt}">
        </article>
    `;
} 

export default CardGame;
