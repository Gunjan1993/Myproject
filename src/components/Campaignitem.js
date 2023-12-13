import React from 'react'
import '../styles/Campaign.css'
function Campaignitem({image, name, price}) {
  return (
   
      <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {price} </p>
      
        <button type='submit'>Read more</button>
        <button type='submit'>Donate now</button>
        
      </div>
    
    
  )
}

export default Campaignitem
