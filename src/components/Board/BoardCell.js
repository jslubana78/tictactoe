import React from 'react'

function BoardCell({ index, handleClick, value }) {
  return (
    <div className='col' data-index={index} onClick={handleClick}>
      {value === 'p1' ? 'X' : value === 'p2' ? 'O' : ''}
    </div>
  )
}

export default BoardCell
