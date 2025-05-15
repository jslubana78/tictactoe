import React from 'react'
import TicTacToeImage from '../../assets/tictactoe.png'

function Banner() {
  return (
    <div className='banner'>
      <img src={TicTacToeImage} alt='TicTacToe' />
      <h1>Tic-Tac-Toe</h1>
    </div>
  )
}

export default Banner
