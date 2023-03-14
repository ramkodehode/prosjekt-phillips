import Intro from "./components/Intro";
import KarriereValg from "./components/KarriereValg";
import KomIgjen from "./components/komIgjen";
import KursDeltaker from "./components/kursDeltaker";
import PictureBoxes from "./components/pictureBoxes";
import { EmptySpace } from "./components/styles/emptySpace";
import InfoTrude from "./components/trudeInfo";
import VartAnsvar from "./components/vartAnsvar";
// import Navbar from "./components/nav/Navbar";

export default function App() {
  return (
    <div>
      {/* <Navbar /> */}
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
