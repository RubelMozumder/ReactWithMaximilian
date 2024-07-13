import { useState } from "react";

export default function Player({
  name,
  symbol,
  set_plr_name,
  editMode,
  changeEditMode,
}) {
  let player_name_elm = <span className="player-name">{name}</span>;

  if (editMode) {
    player_name_elm = (
      <input
        type="text"
        required
        value={name}
        onChange={(clickEvent) => {
          set_plr_name(clickEvent.target.value);
        }}
      />
    );
  }
  function handleButton() {
    if (!editMode) {
      changeEditMode(() => !editMode);
      console.log(" Hello : ", name);

      console.log(player_name_elm);
    } else {
      changeEditMode(() => !editMode);
    }
  }

  return (
    <li>
      {/* todo check to replace the className to class */}
      <span className="player">
        {player_name_elm}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button
        onClick={() => {
          console.log("From On Click.");
          return handleButton();
        }}
      >
        {editMode ? "Save" : "Edit"}
      </button>
    </li>
  );
}
