import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import Campaign from './campaign';


import '../styles/Home.css'

function Home() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div>
    <div className="home" >
      <div className="headerContainer">
        Site under Construction
        <Link to="/donatenow">
          {/* <button> Donate Now </button> */}
        </Link>
      </div>
    </div>
    <Campaign/>
    </div> 
    
    
  );
}

export default Home
