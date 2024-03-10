import { useState } from "react"

export default function Team() {

  const [team, setTeam] = useState(11)

  const handleAdd = () => {
       const newTeam = team+1;
       setTeam(newTeam)
  }
  const handleRemove = () => {
    const newTeam = team-1;
    setTeam(newTeam)
    //setTeam(team-1) eivabe o kora zay
  }

  const teamStyle = {
    border: '2px solid purple',
    borderRadius: '15px',
    margin: '15px',
    padding: '14px'
  }
  return (
    <div style={teamStyle}>
      <h3>Players: {team}</h3>
      <button onClick={handleAdd} className="btn">Add</button>
      <button onClick={handleRemove} className="btn">Remove</button>
    </div>
  )
}