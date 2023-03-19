import './assets/css/settings.css';
import './assets/css/board.css';
import './assets/css/reset.css';

import CardGame from './src/components/CardGame';

const $root = document.querySelector("#root");
const $htmlCardGame = CardGame();

$root.insertAdjacentHTML("beforeend", $htmlCardGame);