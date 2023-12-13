import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/medical.css"

function Medical() {
    return (
        <>
        <h1 style={{fontSize:"50px",fontFamily:"Wallington-Regular"}}>Help Widows with Monthly Medical Care</h1>
        <p style={{marginLeft:"150px",marginRight:"150px",textAlign:"left"}}>In old age, most widows suffer from high blood pressure due to stress from their own families. Many also experience diabetes and malnutrition. Additionally, arthritis and, in some cases, breast cancer are common challenges. We conduct periodic check-ups and provide them with their monthly life-saving medications. Your small contribution can give them a second chance at life.<br></br>

 </p>
        <div className='medicalleft' style={{marginLeft:"150px",marginTop:"60px"}}> 
          <div className='medicalright'style={{width:"450px",marginTop:"50px"}}>
            <h2 style={{fontSize:"30px",fontFamily:"Wallington-Regular"}}>Help Widows with Monthly Medical Care - 700 ₹</h2>
            <p style={{width:"300px",marginLeft:"80px"}} >  We conduct regular check-ups for them and ensure they receive their life-saving medications on a monthly basis.<br></br>Your continued support empowers us to uphold their health and well-being, ensuring a brighter and healthier journey in their golden years.</p>
            <Link to="/donatenow"><button id='checkout'>Donate now</button></Link>
        </div>
          
        </div>
        </>
      )
}

export default Medical