import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as LogoLinkS } from "react-scroll";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: #ffe6c7;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 9999;
  justify-content: center;
  font-size: 1.2em;

  @media only screen and (min-width: 1440px) {
    font-size: 1.5em;
  }

  @media (min-width: 1920px) {
    height: 2em;
    font-size: 2em;
    padding: 0.5em;
  }

  @media (min-width: 2560px) {
    font-size: 3em;
    padding: 0.8em;
  }

  @media (max-width: 768px) {
    height: ${(props) => (props.extendNavbar ? "50vh" : "80px")};
  }
`;

export const LogoLink = styled(LogoLinkS)``;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  padding-left: 50px;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 5%;

  @media (min-width: 1920px) {
  }
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
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
  width: auto;
  height: 5vh;

  @media only screen and (min-width: 1920px) {
    height: 5vh;
  }
  @media only screen and (min-width: 2560px) {
    height: 7vh;
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
