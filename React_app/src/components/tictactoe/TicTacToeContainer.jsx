import Player from './player/Player';
import './TicTacToeContainer.css';
import TicTacToeBoard from './TicTacToeBoard.jsx';

export default function TicTacToeContainer() {
    // function 
    return (
        <div id="game-container">
            <ol id="players">
                <Player name='Player 1' symbol='X'/>
                <Player name='Player 2' symbol='O'/>
            </ol>
            <div id="square-board">
                <TicTacToeBoard/>
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