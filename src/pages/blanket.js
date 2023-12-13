import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/blanket.css"

function Blanket() {
    return (
        <>
        <h1 style={{fontSize:"50px",fontFamily:"Wallington-Regular"}}>Gift Blanket To Widow’s In Vrindavan</h1>
        <p style={{marginLeft:"100px",marginRight:"100px",textAlign:"left"}}>Winters are not a blessing for everyone, especially those without a roof. In Vrindavan, thousands of sadhus live on the streets, and many Matajis reside in makeshift houses with roofs covered by small tin or plastic sheets. They lack quality blankets to shield themselves from severe cold waves.<br></br>

We are distributing high-quality mink blankets, each weighing 2 kg, to provide warmth and comfort. Your support ensures that they can better endure the harsh cold storms and feel blessed. These blankets make a significant difference in helping them face the challenges of the winter season.</p>
        <div className='blanketleft' style={{marginLeft:"100px",marginTop:"60px"}}> 
          <div className='blanketright'style={{width:"450px",marginTop:"50px"}}>
            <h2 style={{fontSize:"30px",fontFamily:"Wallington-Regular"}}>Gift blanket to Widows's in Vrindavan- 600 ₹</h2>
            <p style={{width:"300px",marginLeft:"80px"}} > There are thousands of Matajis, and we need your small support so that we can provide blankets to all of them. Please come forward and contribute by donating blankets for their comfort and warmth.<br></br>Your compassionate gesture will bring solace and warmth to the hearts of these Matajis during the chilly winter nights.</p>
            <Link to="/donatenow"><button id='checkout'>Donate now</button></Link>
        </div>
          
        </div>
        </>
      )
}

export default Blanket