import { useState } from 'react';
import {
  MobileIcon,
  NavbarContainer,
  NavbarLink,
  NavbarLogo,
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
      <NavbarLink to="/">Hjem</NavbarLink>
      <NavbarLink to="/tjenester">Tjenester</NavbarLink>
      <NavbarLink to="/om_oss">Om oss</NavbarLink>
      <NavbarLink to="kontakt">Kontakt</NavbarLink>
    </NavbarContainer>
  );
};

export default Navbar;
