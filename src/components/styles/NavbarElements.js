import styled from 'styled-components';
//import { Link as LinkR } from 'react-router-dom';//
import { Link as LinkScroll } from 'react-scroll';

import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
    background: #FFCB8F;
    //background: conic-gradient(from -89.99deg at 50.03% 100%, #FFCB8D 0deg, rgba(234, 205, 154, 0.402865) 234.38deg, rgba(217, 217, 217, 0) 360deg);//
    height: 100px;
    margin-top: -80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0.5rem calc((100vh - 1000px) / 2);
    z-index: 100;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    border-bottom: 1px solid #FE8900;

    @media screen and (max-width: 960px){
        transitions: 0.8s all ease; 
    }
`;


export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1400px;
`;

export const NavLogo = styled.div`
    color: #000;
    display: block;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1rem;
    align-items: start;
    text-decoration: none;
    text-transform: uppercase;
    line-height: 0px;

    @media screen and (max-width: 768px) {
        left: 0;
    }
`;

export const Logo = styled.img`
    width: 58px;
    height: 50.73px;

    @media screen and (max-width: 768px) {
        left: 0;
    
    }
    
`;

export const MobileIcon = styled.div`
    display: none;
   
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #000;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -25px;
    margin-top: 50px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;
    display: inline;
    position: relative;
    overflow: hidden;

`;

export const NavLink = styled(LinkScroll)`
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    color: #000;
    display: flex;
    align-items: right;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;

    &.active{
        &.active {
    text-decoration: underline;
  }
    }

    &:hover{
        color: #FE8900;
    }
`;




// Sidebar //
export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #FFCB8F;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    
`;

export const CloseIcon = styled(FaTimes)`
    color: #000;
   
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.3rem;
    right: 3rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

`;

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and(max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #000;
    cursor: pointer;

    &.active{
        border: 2px solid #FE8900;
    }

    &:hover{
        color: #FE8900;
        transition: 0.2s ease-in-out;
    }

  `;























