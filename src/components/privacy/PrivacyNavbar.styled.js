import styled from 'styled-components';

import { Link as LogoLinkS } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  width: 100%;
  background-color: #fad4a3;
  display: flex;
  flex-direction: column;
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
