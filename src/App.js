
import styled from "styled-components";

import Intro from "./components/Intro";
import KarriereValg from "./components/KarriereValg";
import KomIgjen from "./components/komIgjen";
import KursDeltaker from "./components/kursDeltaker";
import PictureBoxes from "./components/pictureBoxes";
import { EmptySpace } from "./components/styles/emptySpace";
import InfoTrude from "./components/trudeInfo";
import VartAnsvar from "./components/vartAnsvar";

// import Navbar from "./components/nav/Navbar";


import Navbar from './components/nav/Navbar';
import './App.css';

import './styles.css';

export default function App() {
  return (

    <div>

      {/* <Navbar /> */}

    <Navbar />

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
