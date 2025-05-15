import React from 'react'

function ResultPopup({ restartGame, resultMessage }) {
  return (
    <div className='modal-overlay' id='modal'>
      <div className='modal'>
        <h1>Game Over</h1>
        <p>{resultMessage}</p>
        <button onClick={() => restartGame()}>Restart</button>
      </div>
    </div>
  )
}

export default ResultPopup
