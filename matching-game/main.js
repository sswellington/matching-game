import './assets/css/generic/reset.css';
import './assets/css/settings/colors.css';
import './assets/css/settings/font.css';
import './assets/css/elements/base.css';

import BoardGame from './src/objects/BoardGame';
import ScoreBoard from './src/components/ScoreBoard';


const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    "beforeend", 
    `
        ${ScoreBoard()}
        ${BoardGame(6)}
    `
);