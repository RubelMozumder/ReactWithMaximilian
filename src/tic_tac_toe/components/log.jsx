export default function Log({ gameOverview }) {
  return (
    <>
      {gameOverview.player_log.length > 0 && (
        <ol id="game-log">
          {gameOverview.player_log.map((eachTurn, _) => (
            <li key={`${eachTurn.row},${eachTurn.col}`}>
              {eachTurn.name} selected {eachTurn.row},{eachTurn.col}
            </li>
          ))}
        </ol>
      )}
    </>
  );
}
