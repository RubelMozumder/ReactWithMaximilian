import Player from "./components/player/Player.jsx"
import GameBoard from "./components/gameBoard/GameBoard.jsx"
import { useState } from 'react'

const playerObj = {
  player1: 'X',
  player2: 'O',
  turns: [{turn: null,
           cords: null,
           player: null,}]
}

function App() {
  const [player, setPlayer] = useState('player1')
  const [nodeCords, updateCords] = useState([0, 0])
  return (
    <>
    <header>
    <h1>React Tic-Tac-Toe</h1>
    </header>
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="player1" 
                  symbol={playerSymboles.player1} 
                  isActive={true}/>
          <Player name="player2" 
                  symbol={playerSymboles.player2} 
                  isActive={false}/>
        </ol>
        <GameBoard />
        {/* <PlayerLog /> */}
      </div>
    </main>
    </>
  )
}

export default App
