import { useState } from "react"

export default function Team(){

    const addPlayers=()=>{
        const newPlayer=player+1;
        setPlayer(newPlayer);
    }

    const removePlayers=()=>{
        const subPlayer=player-1;
        setPlayer(subPlayer);
    }
    const[player,setPlayer]=useState(0);

    return(
        <div className="counter">
            <h3>Players:{player}</h3>
            <button onClick={addPlayers}>Add</button>
            <button className="remplayer" onClick={removePlayers}>Remove</button>
        </div>
    )
}