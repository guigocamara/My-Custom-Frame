import React, {useState} from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavBarElements';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import LoginForm from '../Login';


function Navbar () {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Nav className="NavBarMain">
        <NavLink to='/'>
          <img src={require('../../images/Logo-Base.png')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu className="col">
          <NavLink className="NavLink" to='/products' activeStyle> products </NavLink>
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn >
          <NavBtnLink className="button NavLogButton" onClick={togglePopup}>login</NavBtnLink>
          {isOpen && <LoginForm handleClose={togglePopup} />}
          <ShoppingCartIcon className="NavCart"/>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;