import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube,faInstagram,faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Email } from '@mui/icons-material';
import { Phone } from '@mui/icons-material';
import {LocationOn } from '@mui/icons-material';
import {Link} from 'react-router-dom'
import Logo from '../assets/Logo.png'


function Footer() {
  const scrolltop=()=>{
    
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  
  }
  return (
    <div className="footer">
      <div className='mobileview'>
        <p>ABOUT Us</p>
        <p style={{margin: "0 10px"}}>Pure Devotion Foundation is the largest NGO that serves more than 10000 widows in Vrindavan every year.</p>
<br></br>
        <p>CONTACT US</p>
<p><Email/><sup>&nbsp;&nbsp;&nbsp;contact@thepuredevotion.in</sup></p>
<p><Phone/><sup>&nbsp;&nbsp;&nbsp;8923598431 & 7221863811</sup></p>
<p style={{margin: "0 10px"}}><LocationOn/><sup>Pure Devotion Foundation-Radha Kund Bypass Towards Barsana Road, near Radha Kund Vrindavan Marg Crossing</sup></p>
<br></br>

<p>Follow us on</p>
<a href='https://www.instagram.com/puredevotionfoundation/' id='insta' ><FontAwesomeIcon icon={faInstagram} size='lg' ></FontAwesomeIcon></a> 
&nbsp;&nbsp;&nbsp;
<a href='https://www.youtube.com/channel/UChc8fNEtGsffJK_y-ypB_9Q' id='yt' ><FontAwesomeIcon icon={faYoutube} size='lg' ></FontAwesomeIcon></a>
&nbsp;&nbsp;&nbsp;
<a href='https://www.facebook.com/Pure-Devotion-Foundation-106069855089307/videos/415196820734623/?paipv=0&eav=AfbJeAP2CQPf1YnejPgUVDyz2Dj25kkgxb-pC7jZGrq5p5agDkPUJoNk4rqZjrsxDGQ&_rdr' id='fb' ><FontAwesomeIcon icon={faFacebook}  size='lg'></FontAwesomeIcon></a>
<br></br>
<br></br>
<p> &copy; 2023 PureDevotion | All rights reserved</p>
<div className='copyright' style={{margin: "0 10px",fontSize:"15px"}}>
      <Link to="/privacypolicy" onClick={scrolltop}>Privacy Policy</Link>&nbsp;|&nbsp;
      <Link to="/termsnconditions" onClick={scrolltop}>Terms and Conditions</Link>&nbsp;|&nbsp;
      <Link to="/refundpolicy" onClick={scrolltop}>Refund Policy</Link>
      </div>
      </div>
      <div className='webview'>
      <div className='contactus'>
      <div className='contactleft'>
      <div style={{float:'left'}}><img src={Logo} alt='Pure Devotion'/></div>
      
      <div style={{padding:'20px'}}><p>Pure Devotion Foundation is the largest NGO that serves more than 10,000 widows in Vrindavan every year.</p></div>
      <div className="socialMedia">
      <a href='https://www.instagram.com/puredevotionfoundation/' id='insta' ><FontAwesomeIcon icon={faInstagram} size='2x'></FontAwesomeIcon></a> 
&nbsp;&nbsp;&nbsp;
<a href='https://www.youtube.com/channel/UChc8fNEtGsffJK_y-ypB_9Q' id='yt' ><FontAwesomeIcon icon={faYoutube} size='2x' ></FontAwesomeIcon></a>
&nbsp;&nbsp;&nbsp;
<a href='https://www.facebook.com/Pure-Devotion-Foundation-106069855089307/videos/415196820734623/?paipv=0&eav=AfbJeAP2CQPf1YnejPgUVDyz2Dj25kkgxb-pC7jZGrq5p5agDkPUJoNk4rqZjrsxDGQ&_rdr' id='fb' ><FontAwesomeIcon icon={faFacebook} size='2x' ></FontAwesomeIcon></a>
      
      </div>
      </div>
      
      <div className='contactright'>
      <p>CONTACT US</p>
<p><Email/><sup>&nbsp;&nbsp;&nbsp;contact@thepuredevotion.in</sup></p>
<p><Phone/><sup>&nbsp;&nbsp;&nbsp;8923598431 & 7221863811</sup></p>
<p><LocationOn/><sup>Pure Devotion Foundation-Radha Kund Bypass Towards Barsana Road, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;near Radha Kund Vrindavan Marg Crossing</sup></p>

      </div>
      </div>
      
      <div className='copyrights'>
      <p> &copy; 2023 PureDevotion | All rights reserved</p>
      <Link to="/privacypolicy" onClick={scrolltop}>Privacy Policy</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="/termsnconditions" onClick={scrolltop}>Terms and Conditions</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="/refundpolicy" onClick={scrolltop}>Refund Policy</Link>
      </div>
      </div>
    </div>
  )
}

export default Footer
