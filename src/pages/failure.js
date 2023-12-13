import React from 'react'
import errimg from "../assets/error-icon-32-removebg-preview.png"

function Failure() {
  return (
    <div>
        <h1>Donation Unsuccessful!</h1>
        <img src={errimg} width={"100px"}></img>
        <h2 style={{fontFamily: "Wallington-Regular"}}>Please Try Again</h2>
    </div>
  )
}

export default Failure