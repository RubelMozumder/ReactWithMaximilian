const rowLen = 3;
const colLen = 3;
const boardCellTmp = [];
function constructGameboard() {
  for (let i = 0; i < rowLen; i++) {
    let colElm = [];
    boardCellTmp.push(colElm);
    for (let j = 0; j < colLen; j++) {
      colElm.push(null);
    }
  }
}

constructGameboard();

export default function boardCell({ gameState, setGameState, gameOverview }) {
  function handleSelectSquare(rowInd, colInd) {
    const preActiveSymbol = "X"; //gameState.activeSymbol;
    const newSymbol = preActiveSymbol === "X" ? "O" : "X";
    boardCellTmp[rowInd][colInd] = preActiveSymbol;
    //Store Plyers contribution
    let xxIndArray;
    if (rowInd === colInd) {
      // Three diagonal cell acquired by a single player
      xxIndArray = gameOverview[preActiveSymbol].xx;
      xxIndArray.push(rowInd);
      gameOverview.winner = xxIndArray.length === 3 ? preActiveSymbol : null;
    }
    let colIndArray = gameOverview[preActiveSymbol]["row"][rowInd];
    let rowIndArray = gameOverview[preActiveSymbol]["col"][colInd];
    colIndArray.push(colInd);
    rowIndArray.push(rowInd);
    //check three acquaied by a player on a single row or col
    gameOverview.winner =
      colInd.length === 3 || rowInd.length === 3 ? preActiveSymbol : null;

    const plrTurns = gameOverview[preActiveSymbol].turns;

    plrTurns.push([rowInd, colInd]);
    setGameState(() => ({ ...gameState, ["activeSymbol"]: newSymbol }));
    if (plrTurns.length === 9) {
      gameOverview.gameOver = true;
    }
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
          <button onClick={() => null}>START</button>
        </div>
      </div>
    </>
  );
}
