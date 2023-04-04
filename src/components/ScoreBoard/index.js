import './style.css';

import PlayerName from "../PlayerName";
import VsPlayer from '../VsPlayer';

function ScoreBoard() {
    return /*html*/ `
        <header class="score-board">
            ${PlayerName('Player 1')}
            ${VsPlayer()}
            ${PlayerName('Player 2')}
        </header>
    `
}

export default ScoreBoard;