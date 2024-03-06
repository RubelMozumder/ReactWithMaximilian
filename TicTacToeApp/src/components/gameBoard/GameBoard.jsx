import "./GameBoard.css";

const rowLength = 3;
const colLength = 3;

export function GameCellBtn({
  rowInd,
  colInd,
  player,
  setPlayer,
  players_obj,
  setPlayers_obj,
}) {
  // Add symbol in players_obj, player's cell track, winner check
  let symbol = null;
  let cellCord = [rowInd, colInd];
  const handleCell = () => {
    if (player === "player1") {
      symbol = "X"; //players_obj.player1
      player = "player2";
      // add player cell cord
    } else {
      symbol = "O"; //players_obj.player2
      player = "player1";
    }
  };
  setPlayer(player);
  setPlayers_obj(players_obj);

  return <button onClick={handleCell}>{symbol}</button>;
}

export function UpdateBoard({
  row,
  col,
  activePlayer,
  setPlayer,
  players_obj,
  setPlayers_obj,
}) {
  const val = null;
  return (
    <ol id="row">
      {Array.from({ length: row }).map((item, rowInd) => (
        <li key={rowInd}>
          <ol id="col">
            {Array.from({ length: col }).map((item, colInd) => (
              <li key={colInd}>
                <GameCellBtn
                  rowInd={rowInd}
                  colInd={colInd}
                  player={activePlayer}
                  setPlayer={setPlayer}
                  players_obj={players_obj}
                  setPlayers_obj={setPlayers_obj}
                />
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default function GameBoard(
  activePlayer,
  setPlayer,
  players_obj,
  setPlayers_obj
) {
  //console.log(board)

  return (
    <div id="game-board1">
      <UpdateBoard
        row={rowLength}
        col={colLength}
        activePlayer={activePlayer}
        setPlayer={setPlayer}
        players_obj={players_obj}
        setPlayers_obj={setPlayers_obj}
      />
    </div>
  );
}
