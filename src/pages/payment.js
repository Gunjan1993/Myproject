//import { LastPage } from "@mui/icons-material";
import React,{useEffect,useState} from "react";
import { useLocation } from "react-router-dom";
import "../styles/payment.css"
import { SHA512 } from "crypto-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Set the API endpoint URL
//const apiEndpoint = "https://secure.payu.in/_payment";

// Set the merchant key and salt
const merchantKey = "tM5HOf";
const salt ="WMMC7MXGhU9p1cbn8PGgB5msXUA8I7E2" ;

// Set the order details

// var txnId = "t6svtqtjRdl4ws"
// const surl = "https://yourwebsite.com/payment-success";
// const furl = "https://yourwebsite.com/payment-failure";



var amount="";
var productInfo = "PureDevotion";
var firstName = "";
var lastName="";
var email=""
var phone = "";
var address="";
var city="";
var state="";
var country="";


 
function Payment(){
  const history = useNavigate();

const objsurl={surl:"https://www.thepuredevotion.in/success",furl:"https://www.thepuredevotion.in/failure"};
const [surldata,setSurldata]=useState(objsurl)

const [hash,setHash]=useState();
const[transactionid,setTransactionid]=useState("txn"+Date.now())




const location=useLocation()
console.log(location.state.mail)
email=location.state.mail;
firstName=location.state.fn;
lastName=location.state.ln;
phone=location.state.phn;
//amount=location.state.finamount2;
amount="1"
address=location.state.address;
city=location.state.city;
state=location.state.State;
country=location.state.country;

console.log(amount)

useEffect(()=>{


  
generateHash({
    key:merchantKey,transactionid,amount,productInfo,firstName,email,salt},salt).then((res)=>{
// var enc = new TextDecoder("utf-8");
// let a=enc.decode(res)
 setHash(res)
console.log (res);})

console.log(hash);
// let el=ref.current;
// console.log(el.value);

},[])

    async function generateHash(params, salt) {
      let hashString = params["key"] + "|" + params["transactionid"] + "|" + params["amount"] + "|" + params["productInfo"] + "|" + params["firstName"] + "|" + params["email"] + "|||||||||||" + salt;
    console.log(hashString)
      // Generate the hash
     
      // return hash;
      const hash = SHA512(hashString).toString();

  return hash;
    }
    
    async function hs() {
      try {
        const response = await axios.post('https://secure.payu.in/_payment', null, {
          params: surldata,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
        console.log(response);
        history('/success');
      } catch (error) {
        console.error('Error submitting payment:', error);
      }
    }
    
    


    return(
        <div className="paymentform">

        <h2>Donar Details</h2>
        <table>
          <tr>
            <td>Fullname:</td>
            <td>{firstName+" "+lastName}</td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>{address+", "+city+", "+state+", "+", "+country}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>
              Phone:
            </td>
            <td>{phone}</td>
          </tr>
         

        </table>
        <form action='https://secure.payu.in/_payment' method='post' onSubmit={hs}>
    <input type="hidden" name="key" value={merchantKey} />
    <input type="hidden" name="txnid" value={transactionid} />
    <input type="hidden" name="productinfo" value="PureDevotion" />
    <input type="hidden" name="amount" value={amount}    />
    <input  type="hidden" name="email"  value={email}/>
    <input type="hidden" name="firstname" value={firstName} />
    <input type="hidden" name="lastname" value={lastName} />
    <input type="hidden" name="surl" value={surldata.surl}  />
    <input type="hidden" name="furl" value={surldata.furl} />
    <input type="hidden" name="phone" value={phone} />
    <input type="hidden" name="hash" value={hash} />
    <input type="submit" id="submitbtnn" value="Checkout" /> 
    </form>
       
        </div>
    );

    
}

export default Payment