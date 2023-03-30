import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
} from './Navbar.styled';

import LogoImg from '../img/logo.png';

const Navbar = () => {
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
            </NavbarLinkContainer>
          </RightContainer>
        </NavbarInnerContainer>
        <NavbarExtendedContainer></NavbarExtendedContainer>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
