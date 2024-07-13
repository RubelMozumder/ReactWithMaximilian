import "../tic_tac_toe.css";
import Player from "./player";
import { useState } from "react";
export default function BoardContainerWithPlayerSubContainer() {
  const [plr_name1, set_plr_name1] = useState("Player-1");
  const [plr_name2, set_plr_name2] = useState("Player-2");
  const [isEditing1, setEditMode1] = useState(false);
  const [isEditing2, setEditMode2] = useState(false);

  return (
    <div id="edit-player-container">
      <ol id="players">
        <Player
          name={plr_name1}
          symbol="O"
          set_plr_name={set_plr_name1}
          editMode={isEditing1}
          changeEditMode={setEditMode1}
        />
        <Player
          name={plr_name2}
          symbol="X"
          set_plr_name={set_plr_name2}
          editMode={isEditing2}
          changeEditMode={setEditMode2}
        />
      </ol>
    </div>
  );
}
