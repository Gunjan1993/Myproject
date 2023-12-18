import {Link} from 'react-router-dom'
import React,{useEffect} from 'react'

import '../styles/adopt.css'



function Adopt() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  

  
  return (
    <div className='adoptdiv'>
    <h1 >Adopt A Widow In Vrindavan</h1>
    <p >Women, after their spouse's demise, come down to Vrindavan in their quest to seek spiritual salvation. They spend their life with other widows in the Ashrams. Many widows here depend on the Ashrams for food, and survival. There are around 30000 widows living in Vrindavan and each of them have their own story of hardship and heartbreak. 

We urge you to come forward and help them. You might not be able to make the journey to the Vrindavan, but you can definitely help feed hundred of widows by donating them.</p>
    <div className='adoptleft' > 
      <div className='adoptright'>
        <h2 >Contribute 1500 ₹ per month to adopt a Mataji</h2>
        <p  >We urge you to come forward and help them. You might not be able to make the journey to the Vrindavan, but you can definitely help feed hundred of widows by donating them.</p>
        <Link to="/donatenow"><button id='checkout'>Donate now</button></Link>
    </div>
      
    </div>

    <div className='adoptmobile'>
      <div className='adoptleftmobile'></div>
      <div className='adoptrightmobile'>
      <h2 >Contribute 1500 ₹ per month to adopt a Mataji</h2>
        <p  id='pararightadopt'>We urge you to come forward and help them. You might not be able to make the journey to the Vrindavan, but you can definitely help feed hundred of widows by donating them.</p>
        <Link to="/donatenow"><button id='checkout'>Donate now</button></Link>
      </div>
    </div>
    </div>
  )
}

export default Adopt
