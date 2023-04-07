import './style.css';

const path = "./assets/img/logo-"
const cardIcon = "card";
const cardAlt = "estampa do cartão";

function CardGame(icon = cardIcon, alt = cardAlt) {
    return /*html*/ `
        <article class="card-game">
            <img src="${path}${icon}.png" alt="${alt}">
            </article>
    `;
} 

export default CardGame;
