import { useState } from 'react';
import PropTypes from 'prop-types';
import './Player.css';

export default function Player({name, symbol}){

    const [initName, setName] = useState(name);
    const [isEditing, editDone] = useState(false);
    let buttonName = 'Edit';

    let playerName;
    playerName = <span className='player-name'>{initName}</span>;
    function editPlayer(){
        if (!isEditing) {
            editDone((edit)=>!edit);

        }
        else{
            editDone((edit)=>!edit);
        }
    }
    function renamePlayer(event){
        setName(()=>event.target.value);

    }

    if (isEditing){
        playerName = <input type='text' required value={initName} onChange={renamePlayer}/>
    }

    return (
        <li>
            <span className='ind-player'>
                {playerName}
                {/* <span className='player-name'>{name}</span> */}
                <span className='player-symbol'>{symbol}</span>
                <button onClick={editPlayer}>{isEditing? 'Save' : 'Edit'}</button>

            </span>
        </li>
    )
}

Player.propTypes = {
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired
}
