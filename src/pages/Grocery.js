import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/grocery.css"

function Grocery() {
    return (
        <>
        <h1 style={{fontSize:"50px",fontFamily:"Wallington-Regular"}}>Grocery Kits For Widows In Vrindavan</h1>
        <p style={{marginLeft:"200px",marginRight:"200px",textAlign:"left"}}>The plight of these elderly women is heartbreaking, and their livelihood, uncertain. The widows have few savings and almost no income. Some of them have no one to call family, and others’ families have abandoned them in this holy city. Several of them sleep hungry and are deprived of even basic necessities. The elderly widows in Vrindavan struggle every day.
<br></br>
Vrindavan is home for 30000 plus widows and currently we are distributing grocery kits to 2000 widows and by you help we can increase this number.</p>
        <div className='groceryleft' style={{marginLeft:"30px",marginTop:"60px"}}> 
          <div className='groceryright'style={{width:"450px",marginTop:"50px"}}>
            <h2 style={{fontSize:"30px",fontFamily:"Wallington-Regular"}}>Donate 600 ₹ for a Grocery kit</h2>
            <p style={{width:"300px",marginLeft:"80px"}} > Your small contribution of 600 rupees will help them with grocery kit consisting of 3kg wheat, 3kg rice, 1kg dal, 1/2ltr oil, 1kg salt and assorted spices. Your small contribution makes a big difference in providing them with these essential items for their well-being and comfort.</p>
            <Link to="/donatenow"><button id='checkout'>Donate now</button></Link>
        </div>
          
        </div>
        </>
      )
}

export default Grocery