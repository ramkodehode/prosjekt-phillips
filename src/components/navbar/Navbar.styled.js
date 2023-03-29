import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const NavbarContainer = styled.nav``;

export const NavbarLogo = styled.img``;

export const NavbarLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 40px;
  text-align: center;

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
  }
`;

export const NavbarLink = styled(LinkS)`
  padding: 30px;
  margin: 0;
  &:hover {
    color: #fe8b19;
    background-color: #fcd6a7;
    transition: all 0.3s ease;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
`;
