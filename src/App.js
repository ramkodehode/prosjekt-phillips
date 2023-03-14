import styled from "styled-components";
import Intro from "./components/Intro";
import KarriereValg from "./components/KarriereValg";
import KomIgjen from "./components/komIgjen";
import KursDeltaker from "./components/kursDeltaker";
import PictureBoxes from "./components/pictureBoxes";
import InfoTrude from "./components/trudeInfo";
import VartAnsvar from "./components/vartAnsvar";

export const EmptySpace = styled.div`
  width: auto;
  height: 300px;

  background: rgba(0, 0, 0, 0.8);

  @media only screen and (max-width: 40em) {
    width: 90rem;
  }
`;

function App() {
  return (
    <div>
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
