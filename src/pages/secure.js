// import React from 'react'
// import '../styles/Donateform.css'
// import { useState,useEffect } from 'react';
// import { Link,useNavigate,useLocation } from 'react-router-dom';


// const merchantKey = "tM5HOf";
// const salt ="WMMC7MXGhU9p1cbn8PGgB5msXUA8I7E2" ;


// function Donateform() {
//   const location=useLocation()
//    var finamount1=location.state.finamount;
//    console.log(finamount1);
//   const navigate=useNavigate();
//     const [userReg,setuserReg]=useState({
//       pan:"",
//       firstname:"",
//       lastname:"",
//       address:"",
//       city:"",
//       state:"",
//       phone:"",
//       email:"",
//       country:"",
//       amount:""
//     });
//     const[records,setRecords]=useState([]);
//     const[formErrors,setformErrors]=useState({});
//     const [isSubmit, setIsSubmit] = useState(false);
//   function handleinput(e){
// const name=e.target.name;
// const value=e.target.value;
// setuserReg({...userReg,[name]:value})
//   }

//   function handleSubmit(e){
//     e.preventDefault();

//     const newRecord={...userReg,id:new Date().getTime().toString()}
//     console.log(records)

//     setRecords([...records,newRecord]);
//     console.log(records)

//     setformErrors(validate(userReg));
//     setIsSubmit(true);
//   }
 
  
  
    
//   useEffect(() => {
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(userReg);
//     }}, [formErrors]);
// function validate(values){
// const errors={}
// const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.firstname) {
//       errors.fullname = "firstname is required!";
//     }
//     if (!values.lastname) {
//       errors.lastname = "lastname is required!";
//     }
//     if (!values.email) {
//       errors.email = "Email is required!";
//     } else if (!regex.test(values.email)) {
//       errors.email = "This is not a valid email format!";
//     }
//     if (!values.phone) {
//       errors.phone = "Phone number is required";
//     } else if (values.phone.length < 10) {
//       errors.phone = "Invalid phone number";
//     } else if (values.phone.length > 10) {
//       errors.phone = "Invalid phone number";
//     }
//     return errors;
//   }
  
// console.log(userReg.email)


//     return (
//         <div className='donate1'>
//         <div className='donatebox1'>
//       <form onSubmit={handleSubmit} >
//       <input id='firstname' name='firstname' placeholder='First name' onChange={handleinput} value={userReg.firstname}></input>
//       <input id='lastname' name='lastname' placeholder='Last Name' onChange={handleinput} value={userReg.lastname}></input>
//       <p>{formErrors.fullname}</p>
//       <textarea id='address' name='address' placeholder='Address' onChange={handleinput} value={userReg.address}></textarea>
//       <div style={{display:'flex'}}>

//       <input id='city' name='city' placeholder='City' style={{width:'180px'}} onChange={handleinput} value={userReg.city}></input>
//       <input id='state' name='state' placeholder='State/Province' style={{marginLeft:'20px',width:'180px'}} onChange={handleinput} value={userReg.state}></input>
//       </div>
      
//       <input id='country' name='country' placeholder='Country' onChange={handleinput} value={userReg.country}></input>
//       <div style={{display:'flex'}}>
//       <input id='phone' name='phone' placeholder='Phone'style={{width:'180px'}} onChange={handleinput} value={userReg.phone}></input>
//       <p>{formErrors.phone}</p>
//       <input id='email' name='email' placeholder='Email' style={{marginLeft:'20px',width:'180px'}} onChange={handleinput} value={userReg.email}></input>
//       <p>{formErrors.email}</p>
//       </div>
//       <p>Acknowledgement of payment will be sent to this Email ID</p>
//       <div style={{display:'flex'}}>
//       <input type='checkbox'style={{width:'20px'}} ></input>
//       <p style={{maxWidth:'400px'}}>I have read and understood the <Link to="/termsnconditions"><span style={{color:'red'}}>Terms and Conditions</span></Link> and <Link to="/privacypolicy"><span style={{color:"red"}}>Privacy Policy</span></Link> and agree to make a donation.</p>
//       </div>
      
//           <button  id='proceed' onClick={()=>{navigate("/payment",{state:{mail:userReg.email,phn:userReg.phone,fn:userReg.firstname,ln:userReg.lastname,finamount2:finamount1}})}}>PROCEED TO PAYMENT</button>
       
      
//      </form> 





//       </div>
//       </div>
//     );
// }

// export default Donateform

