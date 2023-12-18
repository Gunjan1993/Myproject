import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import "../styles/blanket.css"

function Blanket() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
    return (
        <div className='blanketdiv'>
        <h1 >Gift Blanket To Widow’s In Vrindavan</h1>
        <p >Winters are not a blessing for everyone, especially those without a roof. In Vrindavan, thousands of sadhus live on the streets, and many Matajis reside in makeshift houses with roofs covered by small tin or plastic sheets. They lack quality blankets to shield themselves from severe cold waves.<br></br>

We are distributing high-quality mink blankets, each weighing 2 kg, to provide warmth and comfort. Your support ensures that they can better endure the harsh cold storms and feel blessed. These blankets make a significant difference in helping them face the challenges of the winter season.</p>
        <div className='blanketleft' > 
          <div className='blanketright'>
            <h2 >Gift blanket to Widows's in Vrindavan- 600 ₹</h2>
            <p  > There are thousands of Matajis, and we need your small support so that we can provide blankets to all of them. Please come forward and contribute by donating blankets for their comfort and warmth.<br></br>Your compassionate gesture will bring solace and warmth to the hearts of these Matajis during the chilly winter nights.</p>
            <Link to="/donatenow"><button id='checkout'>Donate now</button></Link>
        </div>
          
        </div>

        <div className='blanketmobile'>
<div className='blanketleftmobile'></div>
<div className='blanketrightmobile'>
<h2 >Gift blanket to Widows's in Vrindavan- 600 ₹</h2>
            <p  id='pararightblanket'> There are thousands of Matajis, and we need your small support so that we can provide blankets to all of them. Please come forward and contribute by donating blankets for their comfort and warmth.<br></br>Your compassionate gesture will bring solace and warmth to the hearts of these Matajis during the chilly winter nights.</p>
            <Link to="/donatenow"><button id='checkout'>Donate now</button></Link>
</div>
        </div>
        </div>
      )
}

export default Blanket