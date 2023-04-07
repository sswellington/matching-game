const path = "./assets/img/"
const icon = "icon-arrowDown.png";
const alt = "Ícone de uma seta para baixo";

function ArrowDown() {
    return /*html*/ `
        <article class="arrow-down">
            <img src="${path}${icon}" alt="${alt}">
        </article>
    `;
}

export default ArrowDown;