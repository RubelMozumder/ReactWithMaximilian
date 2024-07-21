import "../tic_tac_toe.css";
import BoardCell from "./BoardCell";
import Player from "./player";
import { useState } from "react";

const gameState = {
  activeSymbol: null,
  X: "Player-1", // symbol: X
  O: "Player-2", // symbol: O
};

let gameOverview = {
  X: {
    row: { 0: [], 1: [], 2: [] },
    col: { 0: [], 1: [], 2: [] },
    xx: [],
    turns: [],
  },
  O: {
    col: { 0: [], 1: [], 2: [] },
    row: { 0: [], 1: [], 2: [] },
    xx: [],
    turns: [],
  },
  player_log: {},
  winner: null,
  gameOver: false,
};

export default function BoardContainerWithPlayerSubContainer() {
  const [previousState, setGameState] = useState(gameState);

  function handleChangePlrName(symbol, modName) {
    setGameState(() => ({ ...previousState, [symbol]: modName }));
  }
  return (
    <div id="player-board-container">
      <ol id="players">
        <Player
          name={previousState.X}
          symbol="X"
          set_plr_name={handleChangePlrName}
        />
        <Player
          name={previousState.O}
          symbol="O"
          set_plr_name={handleChangePlrName}
        />
      </ol>
      <BoardCell
        gameState={previousState}
        setGameState={setGameState}
        gameOverview={gameOverview}
      />
    </div>
  );
}
