import './TicTacToe.css';
import TicTacToeBorad from '../components/tictactoe/TicTacToeBoard.jsx';
import PropTypes from 'prop-types';

export default function TicTacToe() {
  return (
    <div id="tic-tac-toe" className="center-align">
        <header id="project-header">
            <img src="game-logo.png" alt="Hands on TicTacToe with React." />
            <h1>Tic-Tac-Toe</h1>
        </header>
        <TicTacToeBorad />
    </div>
  )
}

// props vaidation
TicTacToe.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
//