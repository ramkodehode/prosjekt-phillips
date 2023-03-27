import React from 'react';

import  {
         SidebarContainer, 
         Icon, 
         CloseIcon, 
         SidebarWrapper, 
         SidebarMenu, 
         SidebarLink,
        } 
  from '../styles/NavbarElements';

 

const Sidebar = ({ isOpen, toggle }) => {
  
  return (
    <>
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to='/hjem' onClick={toggle}>Hjem</SidebarLink>

            <SidebarLink to='/tjenester' onClick={toggle}>Tjenester</SidebarLink>
            <SidebarLink to='/priser' onClick={toggle}>Priser</SidebarLink>
            <SidebarLink to='/om' onClick={toggle}>Om</SidebarLink>
            <SidebarLink to='/kontakt' onClick={toggle}>Kontakt</SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
    </>
  )
};

export default Sidebar;