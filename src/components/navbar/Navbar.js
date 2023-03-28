import { useState } from 'react';
import {
  MobileIcon,
  NavbarContainer,
  NavbarLink,
  NavbarLogo,
  NavbarLinkWrapper,
} from './Navbar.styled';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <NavbarContainer>
      <NavbarLogo src="" />
      <MobileIcon onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </MobileIcon>
      <NavbarLinkWrapper>
        <NavbarLink to="/">Hjem</NavbarLink>
        <NavbarLink to="/tjenester">Tjenester</NavbarLink>
        <NavbarLink to="/om_oss">Om oss</NavbarLink>
        <NavbarLink to="kontakt">Kontakt</NavbarLink>
      </NavbarLinkWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
