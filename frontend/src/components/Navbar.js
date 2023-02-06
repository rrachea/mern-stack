import React, { useState} from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
// import { Button } from './Button';

function Navbar(){

  // default false so navbar will appear as triple lines
  const [click, setClick] = useState(false)
  // const [button, setButton] = useState(true)

  function handleClick(){
    // change value of click
    setClick(!click)
  }

  function closeMenu(){
    setClick(false)
  }

  // const showButton = () =>{
  //   if(window.innerWidth <= 950){
  //     setButton(false);
  //   }else{
  //     setButton(true);
  //   };

  // }

  // useEffect(()=>{
  //   showButton();
  // }, []);
  
  // // when screensize change itll evoke this function
  // window.addEventListener('resize',showButton)

  return (

  <>
<link rel="preconnect" href="https://fonts.googleapis.com" />
{/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet"></link>
  <nav className='nav'>
    <div className='navbar-container'>
    <Link to='/' className='navbar-logo' onClick={closeMenu}>
      Rachel.
      {/* <i className='fab fa-angellist' /> */}
    </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to ='/myself' className='nav-links' onClick={closeMenu}>
              About Me
            </Link>
          </li>
          <li className='nav-item'>
            <Link to ='/gallery' className='nav-links' onClick={closeMenu}>
              Gallery
            </Link>
          </li>
          <li className='nav-item'>
            <Link to ='/contact' className='nav-links' onClick={closeMenu}>
              Contact 
            </Link>
          </li>
          <li className='nav-item'>
            <Link to ='/login' className='nav-links' onClick={closeMenu}>
              Login / Signup
            </Link>
          </li>
        </ul>
        {/* {button && <Button buttonStyle='btn--outline' buttonSize=''></Button>} */}
    
  </div>
  </nav>
  
  </>
  );
}


export default Navbar;