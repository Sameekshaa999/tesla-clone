import React, { useState } from 'react'
import styledComponents from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Header = () => {
  const [BurgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
        <img src='/images/logo.svg' alt='logo'/>
      <Menu className="hidden lg:flex">
        <p>Model S</p>
        <p>Model Y</p>
        <p>Model 3</p>
        <p>Model X</p>
      </Menu>
      <RightMenu>
        <p>Shop</p>
        <p>Account</p>
        <p><CustomMenu onClick={()=>setBurgerStatus(true)} className="cursor-pointer" /></p>
      </RightMenu>
      <BurgerNav show={BurgerStatus} className="cursor-pointer font-semibold">
      <CloseWrap><CustomClose onClick={()=>setBurgerStatus(false)} className="cursor-pointer"/></CloseWrap>
        <li>Existing Inventory</li>
        <li>Used Inventory</li>
        <li>Trade-In</li>
        <li>Test Drive</li>
        <li>Insurance</li>
        <li>Cybertruck</li>
        <li>Radster</li>
        <li>Semi</li>
        <li>Charging</li>
        <li>Powerwall</li>
        <li>Commercial Energy</li>
        <li>Utilities</li>
        <li>Find Us</li>
        <li>Support</li>
        <li>Investor Relations</li>
      </BurgerNav>
    </Container>
  )
}

export default Header;

const Container = styledComponents.div`
  z-index: 1;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top:0;
  left:0;
  right:0;
`
const Menu = styledComponents.div`
  // display: flex;
  align-items: center;
  justify-content:center;
  flex-1;
  p{
    font-weight: 600;
    text-transform: uppercase;
    padding:0 10px;
    flex-wrap: nowrap;
  }
  
`
const RightMenu = styledComponents.div`
  display: flex;
  align-items: center;
  justify-content:center;
p{
  font-weight: 600;
  text-transform: uppercase;
  padding:0 10px;
  flex-wrap: nowrap;
}
`
const CustomMenu = styledComponents(MenuIcon)`
  // cursor: pointer;
`
const BurgerNav = styledComponents.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding:20px;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)' };
  transition: transform 0.5s;
  li{
    padding: 12px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a{
      font-weight:600;
    }
  }
`
const CustomClose = styledComponents(CloseIcon)`
`
const CloseWrap = styledComponents.div`
  display: flex;
  justify-content: flex-end;
`