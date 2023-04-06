import './style.css';

import PlayerName from "../PlayerName";
import PlayerScore from "../PlayerScore";
import VsPlayer from '../VsPlayer';

function ScoreBoard() {
    return /*html*/ `
        <header class="score-board">
            ${PlayerName('Player 1')}
            ${PlayerScore()}
            ${VsPlayer()}
            ${PlayerName('Player 2')}
            ${PlayerScore()}
        </header>
    `
}

export default ScoreBoard;