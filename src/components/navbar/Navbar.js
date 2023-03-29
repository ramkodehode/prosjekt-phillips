import { useState } from 'react';
import {
  MobileIcon,
  NavbarContainer,
  NavbarLink,
  NavbarLogo,
  NavbarLinkContainer,
  NavbarLogoContainer,
} from './Navbar.styled';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <NavbarContainer>
      <MobileIcon onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </MobileIcon>

      <NavbarLinkContainer>
        <NavbarLink to="/">Hjem</NavbarLink>
        <NavbarLink to="/tjenester">Tjenester</NavbarLink>
        <NavbarLink to="/om_oss">Om oss</NavbarLink>
        <NavbarLink to="kontakt">Kontakt</NavbarLink>
      </NavbarLinkContainer>
    </NavbarContainer>
  );
};

export default Navbar;
