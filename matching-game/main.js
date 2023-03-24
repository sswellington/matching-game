import './assets/css/reset.css';
import './assets/css/settings.css';
import './assets/css/base.css';

import './assets/css/player.css';
import './assets/css/board.css';

import BoardGame from './src/components/objects/BoardGame';
import ScoreBoard from './src/components/ScoreBoard';


const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    "beforeend", 
    `
        ${ScoreBoard()}
        ${BoardGame(6)}
    `
);