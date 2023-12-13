import React from 'react'
import "../styles/Success.css"
import check from "../assets/success_upscaled-removebg-preview.png"
import heart from "../assets/download_upscaled.png"

function Success() {
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





