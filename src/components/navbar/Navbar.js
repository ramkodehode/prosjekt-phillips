import { useState } from 'react';
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  Xbutton,
  NavbarLinkExtended,
} from './Navbar.styled';

import LogoImg from '../assets/image.png';

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <>
      <NavbarContainer>
        <NavbarInnerContainer>
          <LeftContainer>
            <Logo src={LogoImg}></Logo>
            <h3> Phillips Karriere</h3>
          </LeftContainer>
          <RightContainer>
            <NavbarLinkContainer>
              <NavbarLink>Hjem</NavbarLink>
              <NavbarLink>Tjenester</NavbarLink>
              <NavbarLink>Om oss</NavbarLink>
              <NavbarLink>Kontakt</NavbarLink>
              <OpenLinksButton
                onClick={() => {
                  setExtendNavbar((curr) => !curr);
                }}
              >
                {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
              </OpenLinksButton>
            </NavbarLinkContainer>
          </RightContainer>
        </NavbarInnerContainer>
        <NavbarExtendedContainer>
          <NavbarLinkExtended>Hjem</NavbarLinkExtended>
          <NavbarLinkExtended>Tjenester</NavbarLinkExtended>
          <NavbarLinkExtended>Om oss</NavbarLinkExtended>
          <NavbarLinkExtended>Kontakt oss</NavbarLinkExtended>
        </NavbarExtendedContainer>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
