import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const NavbarContainer = styled.main`
  display: flex;
  justify-content: center;
  background-color: #fad4a3;
  width: 100%;

  @media screen (min-width: 768px) {
  }
`;

export const LogoContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (min-width: 768px) {
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    position: fixed;
    z-index: 99999;
    background-color: #fad4a3;
  }
`;

export const Link = styled(LinkS)`
  padding: 20px;
  cursor: pointer;

  &:hover {
    color: orange;
  }
`;
