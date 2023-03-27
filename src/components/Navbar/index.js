import React from 'react';
import LogoImg from '../img/PhillipLogo.png';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

import {
	Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  Logo
  
} from '../styles/NavbarElements';

const Navbar = ({ toggle }) => {

  
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const toggleAbout = () => {
    scroll.scrollTo(<trudeInfo/>);
  };

  return (
    <>
      <Nav>
        <NavbarContainer>

        <NavLogo>
        <Logo src={LogoImg} alt="logo" />
         <p>Phillips Karriere</p></NavLogo>
        

         <MobileIcon onClick={toggle}>
         <FaBars/>
         </MobileIcon>
          
        <NavMenu>
          <NavItem>
            <NavLink to="/hjem" 
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-40}
                  onClick={toggleHome}>Hjem</NavLink>
          </NavItem>
            
          <NavItem>
            <NavLink to="/tjenester" >Tjenester</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/priser" >Priser</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink to="/om" >Om</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/kontakt">Kontakt</NavLink>
          </NavItem>
        </NavMenu>
        
      </NavbarContainer>
      </Nav>
    </>
  )
};

export default Navbar;