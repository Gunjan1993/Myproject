import {Link} from 'react-router-dom'
import React from 'react'

import '../styles/adopt.css'



function Adopt() {
  
  

  
  return (
    <>
    <h1 style={{fontSize:"50px",fontFamily:"Wallington-Regular"}}>Adopt A Widow In Vrindavan</h1>
    <p style={{marginLeft:"200px",marginRight:"200px"}}>Women, after their spouse’s demise, come down to Vrindavan in their quest to seek spiritual salvation. They spend their life with other widows in the Ashrams. Many widows here depend on the Ashrams for food, and survival. There are around 30000 widows living in Vrindavan and each of them have their own story of hardship and heartbreak. 

We urge you to come forward and help them. You might not be able to make the journey to the Vrindavan, but you can definitely help feed hundred of widows by donating them.</p>
    <div className='leftside' style={{marginLeft:"30px",marginTop:"60px"}}> 
      <div className='rightside'style={{width:"450px",marginTop:"50px"}}>
        <h2 style={{fontSize:"30px",fontFamily:"Wallington-Regular"}}>Contribute 1500 ₹ per month to adopt a Mataji</h2>
        <p style={{width:"300px",marginLeft:"80px"}} >We urge you to come forward and help them. You might not be able to make the journey to the Vrindavan, but you can definitely help feed hundred of widows by donating them.</p>
        <Link to="/donatenow"><button id='checkout'>Donate now</button></Link>
    </div>
      
    </div>
    </>
  )
}

export default Adopt
