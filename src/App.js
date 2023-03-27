import styled from "styled-components";
import Intro from "./components/Intro";
import KomIgjen from "./components/komIgjen";
import KursDeltaker from "./components/kursDeltaker";
import PictureBoxes from "./components/pictureBoxes";
import InfoTrude from "./components/trudeInfo";
import VartAnsvar from "./components/vartAnsvar";
import Tjenester from "./components/Tjenester";
import Veiledning from "./components/Veiledning";
import ContactForm from "./components/contact/ContactForm";

import Home from "./Home";


export const EmptySpace = styled.div`
  width: auto;
  height: 200px;
  margin-top: 100px;

  background: rgba(0, 0, 0, 0.8);

  @media only screen and (max-width: 40em) {
    width: auto;
  }
`;

function App() {
  return (
    <div>
      <Home/>
      
      <Intro />
      <VartAnsvar />
      <Tjenester />
      <Veiledning />
      <InfoTrude />
      <KomIgjen />
      <PictureBoxes />
      <KursDeltaker /> {/* <------------ Her skal Karuselen inn Monica */}
      <ContactForm />
      <EmptySpace />
    </div>
  );
}

export default App;
