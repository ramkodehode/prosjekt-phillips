import { Link, LogoContainer, Nav, NavbarContainer } from './Navbar.styled';

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <LogoContainer>Phillips Karriere</LogoContainer>
        <Nav>
          <Link>Hjem</Link>
          <Link>Tjenester</Link>
          <Link>Om oss</Link>
          <Link>Kontakt</Link>
        </Nav>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
