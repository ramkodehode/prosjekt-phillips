<<<<<<< HEAD
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


export const EmptySpace = styled.div`
  width: auto;
  height: 200px;
  margin-top: 100px;

  background: rgba(0, 0, 0, 0.8);

  @media only screen and (max-width: 40em) {
    width: auto;
  }
`;
=======
import Hjem from "./components/Hjem";
>>>>>>> a7fefcef2ddc9d18d5eb50aab89d4ac4ec08a0d5


function App() {
 
  return (
<<<<<<< HEAD
    <div>
     
      <Intro />
      <VartAnsvar />
      <Tjenester />
      <Veiledning />
      <InfoTrude />
      <KomIgjen />
      <PictureBoxes />
      <KursDeltaker/>
      
      <ContactForm />
      <EmptySpace />
    </div>
=======
    <>
      <Hjem />
    </>
>>>>>>> a7fefcef2ddc9d18d5eb50aab89d4ac4ec08a0d5
  );
}

export default App;
