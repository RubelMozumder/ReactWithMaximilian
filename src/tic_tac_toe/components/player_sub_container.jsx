import "../tic_tac_toe.css";
import BoardCell from "./BoardCell";
import Player from "./player";
import { useState } from "react";
import Log from "./log";
import GameOver from "./gameOver";

const rowLen = 3;
const colLen = 3;
let boardCellTmp;
function constructGameboard() {
  boardCellTmp = [];
  for (let i = 0; i < rowLen; i++) {
    let colElm = [];
    boardCellTmp.push(colElm);
    for (let j = 0; j < colLen; j++) {
      colElm.push(null);
    }
  }
}

function initializeGame() {
  let gameState = {
    activeSymbol: "O",
    X: "Player-1", // symbol: X
    O: "Player-2", // symbol: O
    restart: false,
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
    player_log: [], // list of object of 'name', row, col
    winner: "",
    gameOver: false,
    start: false,
  };
  return [gameState, gameOverview];
}

let [gameState, gameOverview] = initializeGame();
let cleanUpCell = false;
constructGameboard();

export default function BoardContainerWithPlayerSubContainer() {
  const [previousState, setGameState] = useState(gameState);
  cleanUpCell = false;

  // Restart after game over
  if (previousState.restart) {
    [gameState, gameOverview] = initializeGame();
    constructGameboard();
    setGameState(() => ({ ...gameState }));
  }

  function handleChangePlrName(symbol, modName) {
    setGameState(() => ({ ...previousState, [symbol]: modName }));
  }

  if (gameOverview.winner || gameOverview.gameOver) {
    console.log(" #### from player sub container : ", gameOverview);
  }

  return (
    <>
      {(gameOverview.winner === "X" ||
        gameOverview.winner === "O" ||
        gameOverview.gameOver) && (
        <GameOver
          gameOverview={gameOverview}
          gameState={previousState}
          setGameState={setGameState}
          id="game-over"
        ></GameOver>
      )}
      <div id="player-board-container">
        <ol id="players">
          <Player
            name={previousState.X}
            symbol="X"
            set_plr_name={handleChangePlrName}
            started={gameOverview.start}
          />
          <Player
            name={previousState.O}
            symbol="O"
            set_plr_name={handleChangePlrName}
            started={gameOverview.start}
          />
        </ol>

        <BoardCell
          gameState={cleanUpCell ? gameState : previousState}
          setGameState={setGameState}
          gameOverview={gameOverview}
          boardCellTmp={boardCellTmp}
        />
        <Log gameOverview={gameOverview} />
      </div>
    </>
  );
}
