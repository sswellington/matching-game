import './style.css';

const path = "./assets/img/logo-"
const alura = "alura.png";
const describe = "logo da alura";

function CardGame(icon = alura, alt = describe) {
    return /*html*/ `
        <article class="card-game">
            <img src="${path}${icon}" alt="${describe}">
        </article>
    `;
} 

export default CardGame;
