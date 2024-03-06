import React from 'react'
import { useState } from 'react'
import './Player.css'

let btnName = "Edit"
export default function Player({ name, symbol }) {
    // TODO: Add state to track whether the player's name is being edited
    const isGameStarted = false
    const [inputName, changeName] = useState(name)
    const [isEditing, setIsEditing] = useState(false)

    function resetEdit(){
        setIsEditing((isEditing) => !isEditing)
        if (btnName === "Edit"){
            btnName = "Save"
        }else{
            btnName = "Edit"
        }
    }
    function userGivenName(event){
        changeName(event.target.value)
    }

    let player_ele
    if (isEditing){
        player_ele = <input type="text" value={inputName} required onChange={userGivenName}/>
    } else {
        player_ele = <span className="player-name">{inputName}</span> 
    }
  return (
    <li>
        <span className="player">
        {player_ele}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button id="reset" onClick={resetEdit}>{btnName}</button>
    </li>
  )
}
