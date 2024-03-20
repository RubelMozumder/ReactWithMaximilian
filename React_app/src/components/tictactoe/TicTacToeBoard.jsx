import './TicTacToeBoard.css'


const col = 3
const row = 3

let squares = []

for (let i = 0; i < row; i++){
    const row_li = []
    for (let j = 0; j < col; j++){
        // const index = i * col + j
        row_li.push(<li><button>{j}</button></li>)
    }
    squares.push(<ol id="">{row_li}</ol>)
}

export default function TicTacToeBoard() {
    return (
        <div id='board-diagram'>
            <ul id="game-board">
                {squares}
            </ul>
        </div>
    )
}