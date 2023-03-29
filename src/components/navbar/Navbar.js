import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import {
  Anchor,
  Header,
  Item,
  Label,
  List,
  LogoContainer,
  LogoImage,
  MobileIcon,
  Nav,
  UnorderedList,
} from './Navbar.styled';
import { useState } from 'react';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <Header>
        <Nav>
          <LogoContainer>
            <LogoImage></LogoImage>
            <Label>Phillips Karriere</Label>
          </LogoContainer>

          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <UnorderedList>
            <Item>
              <Anchor>Hjem</Anchor>
            </Item>
            <Item>
              <Anchor>Tjenester</Anchor>
            </Item>
            <Item>
              <Anchor>Om oss</Anchor>
            </Item>
            <Item>
              <Anchor>Kontakt</Anchor>
            </Item>
          </UnorderedList>
        </Nav>
      </Header>
    </>
  );
};

export default Navbar;
