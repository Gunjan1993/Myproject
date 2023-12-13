import React, {useState} from 'react'
import Logo from '../assets/Logo.png'
import Login from '../assets/login.png'
import {Link} from 'react-router-dom'

import '../styles/Navbar.css'
import '../fonts/Wallington-Regular.ttf'
import '../fonts/Voga-Medium.ttf'
import Dropdown from './Dropdown';
import Button from './Button'





function Navbar() {

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  
   
            return(
              <>
<nav className='navbar'>

        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          
           <img src={Logo} style={{width:"100px", display:"inline-flex"}} alt='Pure Devotion Logo'></img>
           <span style={{marginTop:"10px", marginLeft:"20px"}}>Pure Devotion</span>
          
        </Link>
       
        
        
        <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='#'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
         
        </ul>
        <Button />



</nav>
              
              </>

                )
/*
  const[dropdown,setDropdown]=useState(true);
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <img src={Logo} alt='Pure Devotion'/>
        <div className='PD'>Pure Devotion</div>
        <div className='hiddenLinks'>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/campaign">CAMPAIGN</Link>
        <Link to="/contact">CONTACT US</Link>
        </div>
      </div>
      <div className='rightSide' >
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT US</Link>
        <div style={{border:"5px solid",marginTop:"255px", width:"100px"}}>
        <div style={{paddingRight:"0px"}}>CAMPAIGN</div><div>{dropdown && <Dropdown></Dropdown>}</div></div>
        <Link to="/contact">CONTACT US</Link>
        <span className="seperate">|&nbsp;&nbsp;&nbsp;</span>
        <img src={Login} alt='Login'/>
        <Link>LOGIN</Link>
        <Link to="/donatenow"><button id="dnb">Donate Now</button></Link>

        <button id="navtoggle" onClick={toggleNavbar}>
          <ReorderSharpIcon/>
        </button>

      </div>
      
    </div>
  )
 
 */
    
}
export default Navbar

