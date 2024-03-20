import Player from './player/Player';
import './TicTacToeBoard.css';

export default function TicTacToeBorad() {
    // function 
    return (
        <div id="game-container">
            <ol id="players">
                <Player name='Player 1' symbol='X'/>
                <Player name='Player 2' symbol='O'/>
            </ol>
            <div id="square-board">

            </div>
                
        </div>
    )
}


/*
<gameContainer>
    <>
        <player1>
        <player2>
        <gameBoard> //With player contributions
    <>
    <result> // Cell cords, player logo
    <result>
*/