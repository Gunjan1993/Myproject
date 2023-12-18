import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import "../styles/medical.css"

function Medical() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
    return (
        <div className='medicaldiv'>
        <h1 >Help Widows with Monthly Medical Care</h1>
        <p >In old age, most widows suffer from high blood pressure due to stress from their own families. Many also experience diabetes and malnutrition. Additionally, arthritis and, in some cases, breast cancer are common challenges. We conduct periodic check-ups and provide them with their monthly life-saving medications. Your small contribution can give them a second chance at life.<br></br>

 </p>
        <div className='medicalleft' > 
          <div className='medicalright'>
            <h2 >Help Widows with Monthly Medical Care - 700 ₹</h2>
            <p  >  We conduct regular check-ups for them and ensure they receive their life-saving medications on a monthly basis.<br></br>Your continued support empowers us to uphold their health and well-being, ensuring a brighter and healthier journey in their golden years.</p>
            <Link to="/donatenow"><button id='checkout'>Donate now</button></Link>
        </div>
          
        </div>

        <div className='medicalmobile'>
          <div className='medicalleftmobile'></div>
          <div className='medicalrightmobile'>
          <h2 >Help Widows with Monthly Medical Care - 700 ₹</h2>
            <p  id='pararightmedical'>  We conduct regular check-ups for them and ensure they receive their life-saving medications on a monthly basis.<br></br>Your continued support empowers us to uphold their health and well-being, ensuring a brighter and healthier journey in their golden years.</p>
            <Link to="/donatenow"><button id='checkout'>Donate now</button></Link>
           
        </div>
          </div> 
        </div>
      )
}

export default Medical