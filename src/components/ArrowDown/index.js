import './style.css'

const alt = "Ícone de uma seta para baixo";
const icon = "icon-arrowDown.png";
const path = "./assets/img/"

function ArrowDown(currentPlayer = 1) {
    return /*html*/ `
        <img class="arrow-down" data-currentPlayer=${"currentPlayer"} src="${path}${icon}" alt="${alt}">
    `;
}

export default ArrowDown;