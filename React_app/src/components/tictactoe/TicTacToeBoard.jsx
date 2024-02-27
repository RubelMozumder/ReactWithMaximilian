
import './TicTacToeBoard.css';

export default function TicTacToeBorad() {
    return (
        <div id="game-container">
            <ol id="players">
                <li><span className='Player-name'>Player 1</span>
                    <span className='Player-symbol'>X</span>
                </li>
                <li><span className='Player-name'>Player 2</span>
                    <span className='Player-symbol'>O</span>
                </li>
            </ol>
        </div>
    )
}