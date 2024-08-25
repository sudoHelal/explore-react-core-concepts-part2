import { useState } from "react";
    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '40px'
    }
export default function Team(){
const [team, setTeam] = useState(11);
const handleTeam = () =>{
    const newTeam = team + 1;
    setTeam(newTeam);
}
const handleRemove = () =>{
    
    setTeam(team-1);
}
return (
    <div style={teamStyle}>
        <h4>player: {team}</h4>
        <button onClick={handleTeam}>Add</button>
        <button onClick={handleRemove}>Remove</button>
    </div>
)    
}