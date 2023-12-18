import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import "../styles/grocery.css"

function Grocery() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
    return (
        <div className='grocerydiv'>
        <h1 >Grocery Kits For Widows In Vrindavan</h1>
        <p>The plight of these elderly women is heartbreaking, and their livelihood, uncertain. The widows have few savings and almost no income. Some of them have no one to call family, and others’ families have abandoned them in this holy city. Several of them sleep hungry and are deprived of even basic necessities. The elderly widows in Vrindavan struggle every day.
<br></br>
Vrindavan is home for 30000 plus widows and currently we are distributing grocery kits to 2000 widows and by you help we can increase this number.</p>
        <div className='groceryleft' > 
          <div className='groceryright'>
            <h2 >Donate 600 ₹ for a Grocery kit</h2>
            <p  id='pararightgrocery' > Your small contribution of 600 rupees will help them with grocery kit consisting of 3kg wheat, 3kg rice, 1kg dal, 1/2ltr oil, 1kg salt and assorted spices. Your small contribution makes a big difference in providing them with these essential items for their well-being and comfort.</p>
            <Link to="/donatenow"><button id='checkout'>Donate now</button></Link>
        </div>
         
        </div>

        <div className='grocerymobile'>
          <div className='groceryleftmobile'></div>
          <div className='groceryrightmobile'>
            <h2 >Donate 600 ₹ for a Grocery kit</h2>
            <p  id='pararightgrocery' > Your small contribution of 600 rupees will help them with grocery kit consisting of 3kg wheat, 3kg rice, 1kg dal, 1/2ltr oil, 1kg salt and assorted spices. Your small contribution makes a big difference in providing them with these essential items for their well-being and comfort.</p>
            <Link to="/donatenow"><button id='checkout'>Donate now</button></Link>
        </div>
          </div> 
        </div>
      )
}

export default Grocery