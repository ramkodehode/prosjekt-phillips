import styled from "styled-components";
import Intro from "./components/Intro";
import KarriereValg from "./components/KarriereValg";
import KomIgjen from "./components/komIgjen";
import KursDeltaker from "./components/kursDeltaker";
import PictureBoxes from "./components/pictureBoxes";
import InfoTrude from "./components/trudeInfo";
import VartAnsvar from "./components/vartAnsvar";
import PhillipLogo from "../src/components/img/PhillipLogo.png";

import { NavLink } from "react-router-dom";

export const EmptySpace = styled.div`
  width: auto;
  height: 300px;

  background: rgba(0, 0, 0, 0.8);

  @media only screen and (max-width: 40em) {
    width: 90rem;
  }
`;

//Everything Nav related to be deleted. It's only for showing Trude Wednesday 14.03

export const NavTitle = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 52px;

  color: #000000;
`;

export const Navdiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
`;

export const Navbar = styled.ul`
  display: flex;
  justify-content: space-between;
  font-family: helvetica, arial, sans-serif;

  margin: 0 auto;

  align-items: center;

  background-color: white;

  position: sticky;
  top: 0;
  z-index: 1;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;

  list-style: none;
  font-weight: bold;
  cursor: pointer;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

  color: #000000;

  /* &.active {
    text-decoration: underline;
  } */
`;

export const ImageLogo = styled.img`
  width: 58px;
  height: 50.73px;
`;

//Everything above to be deleted

function App() {
  return (
    <div>
      {/* Everything NAV related to be deleted after meeting with Trude 14.03 */}
      <Navbar>
        <NavTitle>
          {" "}
          <ImageLogo src={PhillipLogo} alt="logo" /> <pr /> <pr />
          Phillipskarriere
        </NavTitle>
        <Navdiv>
          <StyledLink to="/"> Hjem </StyledLink>
          <StyledLink to="Tjenester"> Tjenester </StyledLink>
          <StyledLink to="/"> Om </StyledLink>
          <StyledLink to="/"> Kontakt</StyledLink>
        </Navdiv>
      </Navbar>

      {/* Everything above to be deleted */}
      <Intro />
      <KarriereValg />
      <VartAnsvar />
      <KursDeltaker />
      <InfoTrude />
      <KomIgjen />
      <PictureBoxes />
      <EmptySpace />
    </div>
  );
}

export default App;
