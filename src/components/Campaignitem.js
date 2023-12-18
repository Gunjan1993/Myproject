import React from 'react'
import '../styles/Campaign.css'
import {Link} from 'react-router-dom'
function Campaignitem({image, name, price,path}) {
  console.log(path);
  return (
   
      <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {price} </p>
      
        <Link to={path}><button type='submit'>Read more</button></Link>
       <Link to="/donatenow"> <button type='submit'>Donate now</button></Link>
        
      </div>
    
    
  )
}

export default Campaignitem
