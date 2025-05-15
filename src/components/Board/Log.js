import React from 'react'

function Log({ logs }) {
  return (
    <div className='logs'>
      <ul>
        {logs.length > 0 &&
          logs.map((lg, index) => {
            return <li key={index}>{lg}</li>
          })}
      </ul>
    </div>
  )
}

export default Log
