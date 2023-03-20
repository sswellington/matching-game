import './assets/css/settings.css';
import './assets/css/board.css';
import './assets/css/reset.css';

import BoardGame from './src/components/objects/BoardGame';

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(3);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);
