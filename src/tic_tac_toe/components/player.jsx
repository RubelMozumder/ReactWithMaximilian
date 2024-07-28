import { useState } from "react";

export default function Player({ name, symbol, set_plr_name, started }) {
  const [editMode, changeEditMode] = useState(false);

  let player_name_elm = <span className="player-name">{name}</span>;

  if (editMode && !started) {
    player_name_elm = (
      <input
        type="text"
        required
        value={name}
        onChange={(clickEvent) => {
          set_plr_name(symbol, clickEvent.target.value);
        }}
      />
    );
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
          changeEditMode((editMode) => !editMode);
        }}
      >
        {editMode ? "Save" : "Edit"}
      </button>
    </li>
  );
}
