import './TicTacToeBoard.css'
import PropTypes from 'prop-types'
import { useState } from 'react'

const col = 3
const row = 3
let squares = []
let activeSymbol = 'X'

function handleClick(setSquare, event){
    event.target.innerHTML = activeSymbol
    const newSquare = [...squares].map((row) => [...row])
    
    setSquare(newSquare)
}

const symbols = {pl1_sym : 'X',
                 pl2_sym : 'O'
                }

export default function TicTacToeBoard({...props}) {
    const [initSquare, setSquare] = useState(squares)

    const turnPly = props.activePl == 1? 2 : 1
    activeSymbol = turnPly == 1? symbols.pl1_sym : symbols.pl2_sym

    for (let rowInd = 0; rowInd < row; rowInd++){
        const row_li = []
        for (let colInd = 0; colInd < col; colInd++){
            row_li.push(<li key={colInd} ><button onClick={(event) => handleClick(setSquare, event)}>{null}</button></li>)
        }
        squares.push(<ol key={rowInd}>{row_li}</ol>)
    }
    console.log(' #### : ', initSquare)
    return (
        <div id='board-diagram'>
            <ol id="game-board">
                {initSquare}
            </ol>
        </div>
    )
}


TicTacToeBoard.propTypes = {
    activePl: PropTypes.number.isRequired,
    setPlayer: PropTypes.func.isRequired
}
