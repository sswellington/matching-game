import './assets/css/reset.css';
import './assets/css/settings.css';
import './assets/css/base.css';
import './assets/css/player.css';
import './assets/css/board.css';

import BoardGame from './src/components/objects/BoardGame';
import PlayerName from './src/components/PlayerScore/PlayerName';


const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    "beforeend", 
    `
        ${PlayerName('Player 1')}
        ${PlayerName('Player 2')}
        ${BoardGame(6)}
    `
);