import React, { useState } from 'react'

function PlayerName({
  symbol,
  inputValue,
  handleChange,
  playerName,
  currentPlayer,
}) {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className={`player ${currentPlayer === playerName ? 'active' : ''}`}>
      <span className='player-symbol'>{symbol}</span>
      {isEditing ? (
        <>
          <input
            className='player1-input player-input'
            type='text'
            value={inputValue}
            onChange={handleChange}
            name={playerName}
          />
          <button onClick={() => setIsEditing(false)}>Save</button>
        </>
      ) : (
        <>
          <span className='player-name'>{inputValue}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  )
}

export default PlayerName
