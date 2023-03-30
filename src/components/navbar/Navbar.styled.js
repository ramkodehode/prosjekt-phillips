import styled from 'styled-components';
import { Link } from 'react-scroll';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 75px;
  background-color: #fad4a3;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 9999;
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: -70%;
  display: flex;
  align-items: center;
  padding-right: 5%;
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
  @media (max-width: 700px) {
    display: none;
  }
`;
export const NavbarLinkExtended = styled(Link)`
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 40px;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 80px;
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
