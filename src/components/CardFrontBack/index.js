import './style.css';

import CardGame from "../CardGame";

const iconPath = "logo-html.png";
const describe = "logo do html para carta";

function CardFrontBack(icon = iconPath, alt = describe) {
    return /*html*/ `
        <article class="card-front-back"> 
            <div class="card -front">
                ${CardGame()}
            </<div>
            <div class="card -back">
                ${CardGame(iconPath, describe)}
            </<div>
        </article>
    `;
}

export default CardFrontBack;
