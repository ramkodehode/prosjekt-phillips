import { NavLink } from 'react-router-dom';
import { Header, List, Nav, UnorderedList } from './Navbar.styled';

const Navbar = () => {
  return (
    <>
      <Header>
        <Nav>
          <UnorderedList>
            <List>
              <NavLink>Hjem</NavLink>
            </List>
            <List>
              <NavLink>Tjenester</NavLink>
            </List>
            <List>
              <NavLink>Om oss</NavLink>
            </List>
            <List>
              <NavLink>Kontakt</NavLink>
            </List>
          </UnorderedList>
        </Nav>
      </Header>
    </>
  );
};

export default Navbar;
