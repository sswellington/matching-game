function flipCard() {
    console.log("preciso trocar a imagem");
}

function CardGame() {
    return /*html*/ `
        <article class="card-game" onclick="flipCard()">
            <img src="./assets/img/logo-alura.png" alt="logo da alura para carta">
        </article>
    `;
} 

export default CardGame;
