import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Link as LogoLinkS } from 'react-scroll';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? '100vh' : '60px')};
  background-color: #fad4a3;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 9999;

  @media (min-width: 2160px) {
    height: ${(props) => (props.extendNavbar ? '100vh' : '90px')};
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const LogoLink = styled(LogoLinkS)``;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  padding-left: 50px;

  @media (min-width: 2160px) {
    justify-content: center;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 5%;

  @media (min-width: 2160px) {
    font-size: 2rem;
    flex: 4%;
  }
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
`;
export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  margin: 10px;
  cursor: pointer;

  &:hover {
    color: orange;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;
export const NavbarLinkExtended = styled(Link)`
  text-decoration: none;
  margin: 10px;
  cursor: pointer;

  &:hover {
    color: orange;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const LogoText = styled.label`
  font-size: 20px;
  padding-left: 9px;
  cursor: pointer;

  &:hover {
    color: orange;
  }
`;
export const Logo = styled.img`
  cursor: pointer;
  max-width: 180px;

  @media (min-width: 2160px) {
    max-width: 260px;
  }
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 75px;
  background: none;
  border: none;
  color: black;
  font-size: 3rem;
  cursor: pointer;
  text-align: center;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const Xbutton = styled.button`
  background: none;
  border: none;
  color: black;
  font-size: 1.9rem;
  cursor: pointer;
`;
