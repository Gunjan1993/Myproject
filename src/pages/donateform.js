import React from 'react'
import '../styles/Donateform.css'
import { useState,useEffect } from 'react';
import { Link,useNavigate,useLocation } from 'react-router-dom';






function Donateform() {
  // useEffect(() => {
  //   // 👇️ scroll to top on page load
  //   window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  //   console.log("yes")
  // }, []);
  const location=useLocation()
   var finamount1=location.state.finamount;
   console.log(finamount1);
  const navigate=useNavigate();
    const [userReg,setuserReg]=useState({
      
      firstname:"",
      lastname:"",
      address:"",
      city:"",
      state:"",
      phone:"",
      email:"",
      country:"",
      amount:""
    });
    const[records,setRecords]=useState([]);
    const[formErrors,setformErrors]=useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const[ischecked, setIschecked]=useState(false);
  function handleinput(e){
const name=e.target.name;
const value=e.target.value;
setuserReg({...userReg,[name]:value})
  }

  function handleSubmit(e){
    e.preventDefault();

    const newRecord={...userReg,id:new Date().getTime().toString()}
    console.log(records)

    setRecords([...records,newRecord]);
    console.log(records)

    setformErrors(validate(userReg));
    setIsSubmit(true);
  }
 
  
  
    
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(userReg);
    }}, [formErrors]);
function validate(values){
const errors={}
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const phnnumpattern=/^\d{10}$/;
    if (!values.firstname) {
      errors.firstname = "First name is required!";
    }
    if (!values.lastname) {
      errors.lastname = "Last name is required!";
    }
    if (!values.address) {
      errors.address = "Address is required!";
    }
    if (!values.city) {
      errors.city = "City is required!";
    }
    if (!values.state) {
      errors.state = "State is required!";
    }
    if (!values.country) {
      errors.country = "Country is required!";
    }
    if(!ischecked){
      errors.checkbox="This is required!"
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required!";
    } else if (!phnnumpattern.test(values.phone)) {
      errors.phone = "Invalid phone number!";
    }
    return errors;
  }
  
console.log(userReg.email)


    return (


      
        <div className='donate1'>
        <div className='donatebox1'>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
        navigate("/payment",{state:{mail:userReg.email,phn:userReg.phone,fn:userReg.firstname,ln:userReg.lastname,finamount2:finamount1,address:userReg.address,city:userReg.city,State:userReg.state,country:userReg.country}})
 
      ) : (
       console.log("error")

      )}
      <form onSubmit={handleSubmit} >
      <input id='firstname' name='firstname' placeholder='First name' onChange={handleinput} value={userReg.firstname}></input>
      <p className='firstnamep'>{formErrors.firstname}</p>
      <input id='lastname' name='lastname' placeholder='Last Name' onChange={handleinput} value={userReg.lastname}></input>
      <p  className='lastnamep'>{formErrors.lastname}</p>
      <textarea id='address' name='address' placeholder='Address' onChange={handleinput} value={userReg.address}></textarea>
      <p className='addressp'>{formErrors.address}</p>
      <div style={{display:'flex'}}>
      <div>
      <input id='city' name='city' placeholder='City'  onChange={handleinput} value={userReg.city}></input>
      <p  className="cityp" >{formErrors.city}</p>
      </div>
      <div>
      <input id='state' name='state' placeholder='State/Province'  onChange={handleinput} value={userReg.state}></input>
      <p className="statep" >{formErrors.state}</p>
      </div>
      
      </div>
      
      <input id='country' name='country' placeholder='Country' onChange={handleinput} value={userReg.country} ></input>
      <p className='countryp' >{formErrors.country}</p>
      <div style={{display:'flex'}} className='phnemail'>
        <div>
        <input id='phone' name='phone' placeholder='Phone' onChange={handleinput} value={userReg.phone}/>
      <p  className="phonep">{formErrors.phone}</p>
        </div>
      <div>
      <input id='email' name='email' placeholder='Email'onChange={handleinput} value={userReg.email}></input>
      <p className="emailp">{formErrors.email}</p>
      </div>
      
      </div>
      <p  id="ack">Acknowledgement of payment will be sent to this Email ID</p>
      <div style={{display:'flex'}}>
      <input type='checkbox'style={{width:'20px'}} id='checkdetails' onChange={(e)=>setIschecked(e.target.checked)}></input>
      <p  id='checkp'>I have read and understood the <Link style={{textDecoration:"none"}} to="/termsnconditions"><span style={{color:'red'}}>Terms and Conditions</span></Link> and <Link to="/privacypolicy" style={{textDecoration:"none"}}><span style={{color:"red"}}>Privacy Policy</span></Link> and agree to make a donation.</p>
      
      
      </div>
      <p id='paracheck' >{formErrors.checkbox}</p>
          <button  id='proceed' >PROCEED TO PAYMENT</button>
       
      
     </form> 





      </div>
      </div>
    );
}

export default Donateform