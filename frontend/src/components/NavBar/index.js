import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavBarElements';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <>
      <Nav className ="NavBarMain">
        <NavLink to='/'>
          <img src={require('../../images/Logo-Base.png')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink className= "navLink" to='/products' activeStyle>
            products
          </NavLink>
          <NavLink className= "navLink" to='/about' activeStyle>
            about us
          </NavLink>
          <NavLink className= "navLink" to='/contact-us' activeStyle>
            contact us
          </NavLink>
          <NavLink className= "navLink" to='/sign-up' activeStyle>
            
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink className= "navLink" to='/signin'>login</NavBtnLink>
          <ShoppingCartIcon className = "NavCart"/>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;