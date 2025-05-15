import React, { useState } from 'react'
import PlayerName from './PlayerName'
import BoardCell from './BoardCell'
import ResultPopup from './ResultPopup'
import Log from './Log'

function Board() {
  const [playerInfo, setPlayerInfo] = useState({
    p1: 'Player 1',
    p2: 'Player 2',
  })

  const [currentPlayer, setCurrentPlayer] = useState('p1')
  const [boardArray, setBoardArray] = useState(Array(9).fill(null))
  const [gameOver, setGameOver] = useState(false)
  const [resultMessage, setResultMessage] = useState('')
  const [logs, setLogs] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setPlayerInfo({ ...playerInfo, [name]: value })
  }

  const handleClick = (event) => {
    // let XorY = currentPlayer === 'p1' ? 'X' : 'O'
    if (event.target.innerHTML) return
    if (gameOver) return

    boardArray[event.target.dataset.index] = currentPlayer
    setBoardArray(boardArray)

    logs.unshift(
      `${playerInfo[currentPlayer]} selected  ${event.target.dataset.index}`
    )

    checkWinner()
    setCurrentPlayer(currentPlayer === 'p1' ? 'p2' : 'p1')
  }

  const checkWinner = () => {
    // alert('check winner')
    if (
      (boardArray[0] !== null &&
        boardArray[0] === boardArray[1] &&
        boardArray[1] === boardArray[2]) ||
      (boardArray[3] !== null &&
        boardArray[3] === boardArray[4] &&
        boardArray[4] === boardArray[5]) ||
      (boardArray[6] !== null &&
        boardArray[6] === boardArray[7] &&
        boardArray[7] === boardArray[8]) ||
      (boardArray[0] !== null &&
        boardArray[0] === boardArray[3] &&
        boardArray[3] === boardArray[6]) ||
      (boardArray[1] !== null &&
        boardArray[1] === boardArray[4] &&
        boardArray[4] === boardArray[7]) ||
      (boardArray[2] !== null &&
        boardArray[2] === boardArray[5] &&
        boardArray[5] === boardArray[8]) ||
      (boardArray[0] !== null &&
        boardArray[0] === boardArray[4] &&
        boardArray[4] === boardArray[8]) ||
      (boardArray[2] !== null &&
        boardArray[2] === boardArray[4] &&
        boardArray[4] === boardArray[6])
    ) {
      // alert(`${currentPlayer} Wins`)
      setGameOver(true)
      // const winnerName = playerInfo[currentPlayer] // 'Player 1' or 'Player 2'
      setResultMessage(`${playerInfo[currentPlayer]} wins! 🎉`)
      return
    }

    //check draw logic code start
    if (boardArray.every((cell) => cell !== null)) {
      // $('#status').html(`Game draw...!`)
      setGameOver(true)
      setResultMessage("It's a draw! 🤝")
      return
    }
    //check draw logic code end
  }

  const restartGame = () => {
    setCurrentPlayer('p1')
    setGameOver(false)
    setBoardArray(Array(9).fill(null))
    setResultMessage('')
    setLogs([])
  }

  const boardCells = () => {
    const cells = []
    for (let i = 0; i < 9; i++) {
      cells.push(
        <BoardCell
          key={i}
          index={i}
          handleClick={handleClick}
          value={boardArray[i]}
        />
      )
    }
    return cells
  }

  return (
    <>
      <div className='players-section'>
        <PlayerName
          symbol='X'
          inputValue={playerInfo.p1}
          handleChange={handleChange}
          playerName='p1'
          currentPlayer={currentPlayer}
        />
        <PlayerName
          symbol='O'
          inputValue={playerInfo.p2}
          handleChange={handleChange}
          playerName='p2'
          currentPlayer={currentPlayer}
        />
      </div>
      <div id='board' className='board'>
        {boardCells()}
      </div>
      {gameOver && (
        <ResultPopup restartGame={restartGame} resultMessage={resultMessage} />
      )}
      <Log logs={logs} />
    </>
  )
}

export default Board
