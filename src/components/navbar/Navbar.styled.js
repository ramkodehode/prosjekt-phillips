import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  * {
    padding: 0;
    margin: 0;
    text-decoration: 0;
    list-style: none;
    box-sizing: border-box;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  margin: 0;
`;

export const LogoImage = styled.img`
  margin-left: 20px;
`;

export const Label = styled.label`
  font-size: 20px;
  line-height: 75px;
  padding-left: 10px;
  font-weight: bold;
  color: black;
`;

export const MobileIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Nav = styled.nav`
  height: 75px;
  position: absolute;

  width: 100%;
  background-color: #fad4a3;
  display: flex;
  justify-content: space-between;
`;

export const UnorderedList = styled.ul`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 75px;
  float: right;
  background-color: #fad4a3;
  text-align: center;
  transition: all 0.5s;
`;

export const Item = styled.li`
  line-height: 30px;
  opacity: 1;
  margin: 50px 0;
`;

export const Anchor = styled.a`
  color: black;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`;
