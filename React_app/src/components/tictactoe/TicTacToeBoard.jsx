import './TicTacToeBoard.css'
import PropTypes from 'prop-types'
import { useState } from 'react'

// const col = 3
// const row = 3
// let squares = []
// let activeSymbol = 'X'

const squares = [[null, null, null],
                 [null, null, null],
                 [null, null, null]]        

function handleClick(setSquare, event, activeSymbol, setPlayer){
    if (event.target.innerHTML == null){
        return
    }
    else{

    event.target.innerHTML = activeSymbol
    const newSquare = [...squares].map((row) => [...row])
    console.log(' #### from handleClick : ', newSquare)   
    setSquare(newSquare)
    setPlayer()
    }
}

const symbols = {pl1_sym : 'X',
                 pl2_sym : 'O'
                }

export default function TicTacToeBoard({...props}) {
    const [initSquare, setSquare] = useState(squares)

    const turnPly = props.activePl == 1? 2 : 1
    const activeSymbol = turnPly == 1? symbols.pl1_sym : symbols.pl2_sym

    console.log(' #### from : ', initSquare)
    return (
        <div id='board-diagram'>
            <ol id="game-board">
                {squares.map((row, rowInd) => 
                <ol key={rowInd}>{row.map((col, colInd) => 
                    <li key={colInd}>
                        <button onClick={(event) => handleClick(setSquare, event, activeSymbol, ()=>props.setPl(turnPly))}></button>
                    </li>)}
                </ol>)}
            </ol>
        </div>
    )
}


TicTacToeBoard.propTypes = {
    activePl: PropTypes.number.isRequired,
    setPlayer: PropTypes.func.isRequired,
    setPl: PropTypes.func.isRequired
}
