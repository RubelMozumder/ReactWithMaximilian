import Player from './player/Player';
import './TicTacToeContainer.css';
import TicTacToeBoard from './TicTacToeBoard.jsx';
import { useState } from 'react';


const pl1 = 'Player 1'
const pl2 = 'Player 2'
const RandActivePl = Math.floor(Math.random() * 2) + 1
const symbols = {pl1_sym : 'X',
                 pl2_sym : 'O'
                }
export default function TicTacToeContainer() {
    const [pl1_nm, renamePl1] = useState(pl1)
    const [pl2_nm, renamePl2] = useState(pl2)
    const [activePl, setPlayer] = useState(RandActivePl)
    return (
        <div id="game-container">
            <ol id="players">
                <Player active={activePl==1} name={pl1_nm} rename={renamePl1} symbol={symbols.pl1_sym}/>
                <Player active={activePl==2} name={pl2_nm} rename={renamePl2} symbol={symbols.pl2_sym}/>
            </ol>
            <div id="square-board">
                <TicTacToeBoard activePl={activePl} setPl={setPlayer}/>
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