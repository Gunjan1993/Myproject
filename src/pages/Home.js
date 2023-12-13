import React from 'react'
import {Link} from 'react-router-dom'
import Campaign from './campaign';


import '../styles/Home.css'

function Home() {
  return (
    <div>
    <div className="home" >
      <div className="headerContainer">
        
        <Link to="/donatenow">
          <button> Donate Now </button>
        </Link>
      </div>
    </div>
    <Campaign/>
    </div> 
    
    
  );
}

export default Home
