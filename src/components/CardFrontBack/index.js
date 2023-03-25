import CardGame from "../CardGame";

const iconPath = "logo-html.png";
const describe = "logo do html para carta";

function CardFrontBack(icon = iconPath, alt = describe) {
    return /*html*/ `
        <article class="card-front-back"> 
            ${CardGame()}
        </article>
    `;
}

export default CardFrontBack;
