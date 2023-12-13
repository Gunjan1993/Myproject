import {useNavigate} from 'react-router-dom'
import React from 'react'
import { useState,useEffect } from 'react'
import '../styles/donatenow.css'
import Amount from '../components/amount'

var money;

const hidebtns=()=>{
  document.getElementById("fixedamount").style.display='none';}

  const showbtns=()=>{
    document.getElementById("fixedamount").style.display='block';}

    
function Donatenow() {
function otheramount(e){
  setValueother(e.target.value);
}
const navigatte=useNavigate();
function checkamount(){
  if(valueother<200){
    
    navigatte("/donatenow")
    document.getElementById("amounterror").innerHTML="*Value entered should be greater than or equal to 201"
  }
  else{
    navigatte("/donateform",{state:{finamount:money}})
  }
}
  
useEffect(()=>{
  if(show===true){
    money=document.getElementById("textin").value;
  }
  else{
    money=document.getElementById("buttonin").value;
  }
  document.getElementById("displaymoney").innerHTML=money;
  console.log(money);
})

  const[show, hide]=useState(false)
  const[active, setactive]=useState("1500")
  const[valueother,setValueother]=useState()
  return (
    
    <div className='donate'> 
      <div className='donatebox'>
        <h3>Select Donation Amount</h3>
        
        <button onClick={()=>{setactive("600")
        showbtns()
      hide(false) }}>₹600</button>

        <button onClick={()=>{setactive("1200")
        showbtns()
        hide(false)
        }}>₹1200</button>

        <button onClick={()=>{setactive("1500")
      showbtns()
      hide(false)
      }}>₹1500</button>

        <button onClick={()=>{
          hide(true) 
          hidebtns()}} >OTHER</button>

        {show &&
        (<div className="other">
          <p>ENTER AMOUNT</p><span style={{fontSize:"20px",fontWeight:"bold",marginRight:"10px"}}>₹</span><input type='number' onChange={otheramount} value={valueother} id="textin"></input>
        </div>)
        }
        
        <div id="fixedamount">
          {active==="600"&& <Amount title={600}/>}
          {active==="1200"&& <Amount title={1200}/>}
          {active==="1500"&& <Amount title={1500}/>}
        </div>
        <p id='amounterror' style={{color:"red",fontWeight:"bold",fontSize:"15px"}}></p>
        <p>Registered under Section 8 of the Indian Companies Act, 2013. Donations to Pure Devotion are tax exempted under 80G of the Indian Income Tax Act.</p>
        <button id='checkout'onClick={checkamount}>Donate now</button>
        <p id='displaymoney' style={{display:"none"}}></p>
    </div>
      
    </div>
  )
}

export default Donatenow
