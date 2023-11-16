import React, {useState} from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavBarElements';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import LoginForm from '../Login';

import PersonIcon from '@mui/icons-material/Person';


function Navbar () {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Nav className="NavBarMain">
        <NavLink to='/'>
          <img src={require('../../images/Logo-Base-basic.png')} alt='logo' /> <div className="font-3 NavLinkLogo">mycustomframe</div>
        </NavLink>
        <Bars />
        <NavMenu className="col">
          <NavLink className="NavLink" to='/products' activeStyle>framing ideas</NavLink>
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn >
          <NavBtnLink className="button NavLogButton" onClick={togglePopup}><PersonIcon /></NavBtnLink>
          {isOpen && <LoginForm handleClose={togglePopup} />}
          <NavBtnLink ><ShoppingCartIcon /> </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;