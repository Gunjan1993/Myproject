import React,{useEffect} from 'react'
import "../styles/Success.css"
import check from "../assets/success_upscaled-removebg-preview.png"
import heart from "../assets/download_upscaled.png"

function Success() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (

    <div className="success">
    <div className="successTop"></div>
    <div className="successBottom">
      <div style={{display:'flex', width:"max-content"}}>
      <h1> Thanks for the contribution!</h1>
      <img src={check} width={"100px"} height={"100px"} style={{marginTop:"20px",marginLeft:"20px"}} alt='Donated'></img>
      </div>
      <div className="line"></div>
      <h2>You are the reason these elderly and deserving Matajis wear smiles on their faces.</h2>
      <img src={heart} alt='Thanks' width={"100px"}></img>
    </div>
    <div className="success_foot">
      <p>Each donation is an essential help which improves everyone's life</p>
      <button>Happy Donating ❤</button>
    </div>
  </div>

    
  )
}

export default Success





