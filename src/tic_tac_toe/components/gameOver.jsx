export default function GameOver({
  gameOverview,
  gameState,
  setGameState,
  ...props
}) {
  let winner = gameOverview.winner;
  let resultElem = <h4>Draw!</h4>;
  if (winner === "X" || winner === "O") {
    resultElem = <h4>Congrats! {gameState[winner]} is winner.</h4>;
  }
  return (
    <div id={props.id}>
      <h2>Game Over</h2>
      {resultElem}
      <button
        onClick={() => {
          gameState.restart = true;
          setGameState(() => ({ ...gameState }));
        }}
      >
        Restart!
      </button>
    </div>
  );
}
