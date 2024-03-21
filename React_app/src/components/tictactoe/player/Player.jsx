import { useState } from 'react';
import PropTypes from 'prop-types';
import './Player.css';

export default function Player({...props}){

    const [isEditing, editDone] = useState(false);

    let playerName;
    playerName = <span className='player-name'>{props.name}</span>;
    function editPlayer(){
        if (!isEditing) {
            editDone((edit)=>!edit);

        }
        else{
            editDone((edit)=>!edit);
        }
    }
    function renamePlayer(event){
        props.rename(()=>event.target.value);

    }

    if (isEditing){
        playerName = <input type='text' required value={props.name} onChange={renamePlayer}/>
    }

    return (
        <li>
            <span className='ind-player'>
                {playerName}
                {/* <span className='player-name'>{name}</span> */}
                <span className='player-symbol'>{props.symbol}</span>
                <button onClick={editPlayer}>{isEditing? 'Save' : 'Edit'}</button>

            </span>
        </li>
    )
}

Player.propTypes = {
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    rename: PropTypes.func.isRequired
}
