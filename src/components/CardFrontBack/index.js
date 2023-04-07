import './style.css';

import CardGame from "../CardGame";

const cardIcon = "html.png";
const cardAlt = "logo do html";  


function CardFrontBack(icon = cardIcon, alt = cardAlt) {
    window.cardFrontBack = {};
    window.cardFrontBack.handleClick = (event) => {
        const $origin = event.target;
        const $cardFrontBack = $origin.closest('.card-front-back');

        $cardFrontBack.classList.toggle('-active');
    }      

    return /*html*/ `
        <article class="card-front-back" onClick="cardFrontBack.handleClick(event)"> 
            <div class="card -front">
                ${CardGame()}
            </<div>
            <div class="card -back">
                ${CardGame(icon, alt)}
            </<div>
        </article>
    `;
}

export default CardFrontBack;
