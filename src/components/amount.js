import React from 'react'
import '../styles/amount.css'

function Amount({title}) {
  return (
    <div className="amount">
    <p>AMOUNT ENTERED</p><span id='rupee'>₹</span><input type='number' placeholder='₹' value={title} id='buttonin'></input>
  </div>
  )
}

export default Amount
