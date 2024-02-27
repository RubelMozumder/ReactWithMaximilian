import './TicTacToe.css';
import TicTacToeBorad from '../components/tictactoe/TicTacToeBoard.jsx';

export default function TicTacToe() {
  return (
    <div id="tic-tac-toe">
        <div id="projectHeader">
            <img src="game-logo.png" alt="Hands on TicTacToe with React." />
            <h1>Tic-Tac-Toe</h1>
        </div>
            <TicTacToeBorad />
    </div>
  )
}
