import styled from 'styled-components';
import { Link } from 'react-scroll';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 75px;
  background-color: #fad4a3;
  display: flex;
  flex-direction: column;
  position: fixed;
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
export const NavbarExtendedContainer = styled.div``;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 40px;
  height: auto;
`;
