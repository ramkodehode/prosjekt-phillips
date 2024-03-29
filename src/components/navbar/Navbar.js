import { useState } from "react";
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
  NavbarLinkExtended,
  LogoText,
  LogoContainer,
  LogoLink,
} from "./Navbar.styled";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import ImgLogo from "./assets/ImgLogo.png";

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <>
      <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
          <LeftContainer>
            <LogoLink
              to="/"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <LogoContainer>
                <Logo alt="phillips karriere" src={ImgLogo}></Logo>
                <LogoText> </LogoText>
              </LogoContainer>
            </LogoLink>
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
                to="priser"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Priser
              </NavbarLink>
              <NavbarLink
                to="om"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Om
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
                {extendNavbar ? (
                  <AiOutlineClose size={32} />
                ) : (
                  <RxHamburgerMenu size={32} />
                )}
              </OpenLinksButton>
            </NavbarLinkContainer>
          </RightContainer>
        </NavbarInnerContainer>

        {extendNavbar && (
          <NavbarExtendedContainer>
            <NavbarLinkExtended
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
              to="/"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Hjem
            </NavbarLinkExtended>
            <NavbarLinkExtended
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
              to="tjenester"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Tjenester
            </NavbarLinkExtended>
            <NavbarLinkExtended
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
              to="priser"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Priser
            </NavbarLinkExtended>
            <NavbarLinkExtended
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
              to="om"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Om oss
            </NavbarLinkExtended>
            <NavbarLinkExtended
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
              to="kontakt"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Kontakt
            </NavbarLinkExtended>
          </NavbarExtendedContainer>
        )}
      </NavbarContainer>
    </>
  );
};

export default Navbar;
