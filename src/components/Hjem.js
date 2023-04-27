import React from "react";
import ContactForm from "./contact/ContactForm";
import Footer from "./footer";
import Intro from "./Intro";

import KursDeltaker from "./kursDeltaker";
import Navbar from "./navbar/Navbar";
import GlobalStyle from "./styles/Globalstyle";
import Tjenester from "./Tjenester";
import InfoTrude from "./trudeInfo";
import VartAnsvar from "./vartAnsvar";
import Veiledning from "./Veiledning";
import KomIgjen from "./komIgjen";

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
      <KursDeltaker /> {/* <------------ Her skal Karuselen inn Monica */}
      <KomIgjen />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Hjem;
