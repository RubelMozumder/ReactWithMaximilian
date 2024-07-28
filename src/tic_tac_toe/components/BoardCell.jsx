export default function boardCell({
  gameState,
  setGameState,
  gameOverview,
  boardCellTmp,
}) {
  function handleSelectSquare(rowInd, colInd) {
    if (!gameOverview.start) {
      return null;
    }

    const preActiveSymbol = gameState.activeSymbol;
    const newSymbol = preActiveSymbol === "X" ? "O" : "X";
    boardCellTmp[rowInd][colInd] = newSymbol;
    //Store Plyers contribution
    let xxIndArray = [];
    if (rowInd === colInd) {
      // Three diagonal cell acquired by a single player
      xxIndArray = gameOverview[newSymbol].xx;
      xxIndArray.push(rowInd);
    }

    let colIndArray = gameOverview[newSymbol]["row"][rowInd];
    let rowIndArray = gameOverview[newSymbol]["col"][colInd];
    colIndArray.push(colInd);
    rowIndArray.push(rowInd);
    //check three acquired by a player on a single row or col
    gameOverview.winner =
      colIndArray.length === 3 ||
      rowIndArray.length === 3 ||
      xxIndArray.length === 3
        ? newSymbol
        : null;

    const plrTurns = gameOverview[newSymbol].turns;

    plrTurns.push([rowInd, colInd]);

    gameOverview.player_log = [
      { name: gameState[newSymbol], row: rowInd, col: colInd },
      ...gameOverview.player_log,
    ];
    if (gameOverview.player_log.length === 9) {
      gameOverview.gameOver = true;
    }
    setGameState(() => ({ ...gameState, ["activeSymbol"]: newSymbol }));

    console.log(gameOverview);
  }
  return (
    <>
      <div>
        <ol id="game-board">
          {boardCellTmp.map((row, rowInd) => (
            <li key={rowInd}>
              <ol>
                {row.map((col, colInd) => (
                  <li key={[rowInd, colInd]}>
                    <button
                      onClick={() => handleSelectSquare(rowInd, colInd)}
                      disabled={col !== null}
                    >
                      {col}
                    </button>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
        <div id="game-start">
          <button
            className={gameOverview.start ? "started" : null}
            onClick={() => {
              gameOverview.start = true;
              return null;
            }}
            disabled={gameOverview.start ? true : false}
          >
            {gameOverview.start ? "STARTED" : "START"}
          </button>
        </div>
      </div>
    </>
  );
}
