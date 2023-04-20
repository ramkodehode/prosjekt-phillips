import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Link as LogoLinkS } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? '100vh' : '75px')};
  background-color: #fad4a3;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 9999;
`;

export const LogoLink = styled(LogoLinkS)``;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: center;
`;
export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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
