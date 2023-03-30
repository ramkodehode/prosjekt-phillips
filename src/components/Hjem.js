import React from "react";
import ContactForm from "./contact/ContactForm";
import Footer from "./footer";
import Intro from "./Intro";
import KomIgjen from "./komIgjen";
import KursDeltaker from "./kursDeltaker";
import Navbar from "./navbar/Navbar";
import PictureBoxes from "./pictureBoxes";
import GlobalStyle from "./styles/Globalstyle";
import Tjenester from "./Tjenester";
import InfoTrude from "./trudeInfo";
import VartAnsvar from "./vartAnsvar";
import Veiledning from "./Veiledning";

const Hjem = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Intro />
      <VartAnsvar />
      <Tjenester />
      <Veiledning />
      <InfoTrude />
      <KomIgjen />
      <PictureBoxes />
      <KursDeltaker /> {/* <------------ Her skal Karuselen inn Monica */}
      <ContactForm />
      <Footer />
    </>
  );
};

export default Hjem;
