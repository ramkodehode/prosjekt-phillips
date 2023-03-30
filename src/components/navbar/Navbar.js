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
  LogoText,
  LogoContainer,
} from './Navbar.styled';

import { RxHamburgerMenu } from 'react-icons/fa';

import LogoImg from './assets/image.png';

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <>
      <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
          <LeftContainer>
            <LogoContainer>
              <Logo src={LogoImg}></Logo>
              <LogoText> Phillips Karriere</LogoText>
            </LogoContainer>
          </LeftContainer>
          <RightContainer>
            <NavbarLinkContainer>
              <NavbarLink
                to="/"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Hjem
              </NavbarLink>
              <NavbarLink
                to="tjenester"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Tjenester
              </NavbarLink>
              <NavbarLink
                to="om"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Om oss
              </NavbarLink>
              <NavbarLink
                to="kontakt"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Kontakt
              </NavbarLink>
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

        {extendNavbar && (
          <NavbarExtendedContainer>
            <NavbarLinkExtended to="/">Hjem</NavbarLinkExtended>
            <NavbarLinkExtended to="/products"> Tjenester</NavbarLinkExtended>
            <NavbarLinkExtended to="/contact">Om oss</NavbarLinkExtended>
            <NavbarLinkExtended to="/about">Kontakt</NavbarLinkExtended>
          </NavbarExtendedContainer>
        )}
      </NavbarContainer>
    </>
  );
};

export default Navbar;
